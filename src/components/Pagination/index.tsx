import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

interface PaginationProps {
    isFirst: boolean;
    isLast: boolean;
    currentPage: number;
    numPages: number;
    prevPage?: string;
    nextPage?: string;
}

const Pagination: React.FC<PaginationProps> = ({
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPage,
    nextPage,
}) => (
    <S.PaginationWrapper>
        {!isFirst && (
            <AniLink
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                to={prevPage!}
            >
                Página anterior
            </AniLink>
        )}
        <p>
            {currentPage} de {numPages}
        </p>
        {!isLast && (
            <AniLink
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}
                to={nextPage!}
            >
                Próxima página
            </AniLink>
        )}
    </S.PaginationWrapper>
);

export default Pagination;
