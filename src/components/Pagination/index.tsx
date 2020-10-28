import React from 'react';
import { Link } from 'gatsby';

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
        {!isFirst && <Link to={prevPage!}>Página anterior</Link>}
        <p>
            {currentPage} de {numPages}
        </p>
        {!isLast && <Link to={nextPage!}>Próxima página</Link>}
    </S.PaginationWrapper>
);

export default Pagination;
