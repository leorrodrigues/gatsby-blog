const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'pages',
        });

        createNodeField({
            node,
            name: 'slug',
            value: `/${slug.slice(12)}`,
        });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    const result = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: frontmatter___date, order: DESC }
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                background
                                category
                                date(
                                    locale: "pt-br"
                                    formatString: "DD [de] MMMM [de] YYYY"
                                )
                                description
                                title
                            }
                            timeToRead
                        }
                        next {
                            frontmatter {
                                title
                            }
                            fields {
                                slug
                            }
                        }
                        previous {
                            frontmatter {
                                title
                            }
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `,
    );

    if (result.errors) {
        throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node, next, previous }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/blog-post.tsx'),
            context: {
                slug: node.fields.slug,
                previousPost: next,
                nextPost: previous,
            },
        });
    });

    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
        createPage({
            path: index === 0 ? '/' : `/page/${index + 1}`,
            component: path.resolve(`./src/templates/blog-list.tsx`),
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                numPages,
                currentPage: index + 1,
            },
        });
    });
};
