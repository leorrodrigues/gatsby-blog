/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, PageProps } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';

import * as S from '../components/Post/styled';

import { Query } from '../generated/graphql.d';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/comments';

interface pageContextProps {
    nextPost?: {
        frontmatter: {
            title: string;
        };
        fields: {
            slug: string;
        };
    };
    previousPost?: {
        frontmatter: {
            title: string;
        };
        fields: {
            slug: string;
        };
    };
}

const BlogPost: React.FC<PageProps<Query, pageContextProps>> = ({
    data,
    pageContext,
}) => {
    const { frontmatter, timeToRead, html, fields } = data.markdownRemark ?? {};
    const { nextPost, previousPost } = pageContext;

    return (
        <Layout>
            {frontmatter && (
                <>
                    <SEO title={frontmatter.title!} />
                    <S.PostHeader>
                        <S.PostDate>
                            {frontmatter.date} * {timeToRead} min de leitura
                        </S.PostDate>
                        <S.PostTitle>{frontmatter.title}</S.PostTitle>
                        <S.PostDescription>
                            {frontmatter.description}
                        </S.PostDescription>
                    </S.PostHeader>
                </>
            )}
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: html! }} />
            </S.MainContent>
            <RecommendedPosts next={nextPost} previous={previousPost} />
            {frontmatter && fields && (
                <Comments url={fields.slug!} title={frontmatter.title!} />
            )}
        </Layout>
    );
};

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                slug
            }
            frontmatter {
                title
                description
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
            html
            timeToRead
        }
    }
`;

export default BlogPost;
