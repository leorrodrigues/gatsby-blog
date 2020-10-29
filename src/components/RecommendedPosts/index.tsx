import React from 'react';

import getThemeColor from '../../utils/getThemeColor';

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
            <S.RecommendedLink
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                to={previous.fields.slug}
                className="previous"
            >
                {previous.frontmatter.title}
            </S.RecommendedLink>
        )}
        {next && (
            <S.RecommendedLink
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}
                to={next.fields.slug}
                className="next"
            >
                {next.frontmatter.title}
            </S.RecommendedLink>
        )}
    </S.RecommendedWrapper>
);
export default RecommendedPosts;
