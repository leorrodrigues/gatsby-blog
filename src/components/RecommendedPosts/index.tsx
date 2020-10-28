import React from 'react';

import * as S from './styled';

interface RecommendedPostsProps {
    next?: {
        frontmatter: {
            title: string;
        };
        fields: {
            slug: string;
        };
    };
    previous?: {
        frontmatter: {
            title: string;
        };
        fields: {
            slug: string;
        };
    };
}

const RecommendedPosts: React.FC<RecommendedPostsProps> = ({
    next,
    previous,
}) => (
    <S.RecommendedWrapper>
        {previous && (
            <S.RecommendedLink to={previous.fields.slug} className="previous">
                {previous.frontmatter.title}
            </S.RecommendedLink>
        )}
        {next && (
            <S.RecommendedLink to={next.fields.slug} className="next">
                {next.frontmatter.title}
            </S.RecommendedLink>
        )}
    </S.RecommendedWrapper>
);
export default RecommendedPosts;
