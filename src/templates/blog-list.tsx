import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

import { Query, SitePageContext } from '../generated/graphql.d';
import Pagination from '../components/Pagination';

import * as S from '../components/ListWrapper/styled';

const BlogList: React.FC<PageProps<Query>> = props => {
    const { data, pageContext } = props;
    const { currentPage, numPages }: SitePageContext = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage! - 1 === 1 ? '/' : `/page/${currentPage! - 1}`;
    const nextPage = `/page/${currentPage! + 1}`;

    const postsList = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO
                title="Home"
                description="List of several posts containing a wide range of contents"
            />
            <S.ListWrapper>
                {postsList.map(
                    ({ node: { frontmatter, timeToRead, fields } }) => {
                        const { slug } = fields ?? {};
                        const {
                            background,
                            category,
                            date,
                            title,
                            description,
                        } = frontmatter ?? {};
                        return (
                            <PostItem
                                slug={slug!}
                                background={background!}
                                category={category!}
                                date={date!}
                                timeToRead={(timeToRead! as unknown) as string}
                                title={title!}
                                description={description!}
                                key={slug!}
                            />
                        );
                    },
                )}
            </S.ListWrapper>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage!}
                numPages={numPages!}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Layout>
    );
};

export const postListQuery = graphql`
    query PostListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
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
            }
        }
    }
`;

export default BlogList;
