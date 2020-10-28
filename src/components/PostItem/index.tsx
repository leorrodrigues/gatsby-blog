import React from 'react';
import * as S from './styled';

interface PostItemProps {
    slug: string;
    background?: string;
    category: string;
    date: string;
    timeToRead?: string;
    title: string;
    description: string;
}

const PostItem: React.FC<PostItemProps> = ({
    slug,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
}) => {
    return (
        <S.PostItemLink to={slug}>
            <S.PostItemWrapper>
                <S.PostItemTag background={background}>
                    {category}
                </S.PostItemTag>
                <S.PostItemInfo>
                    <S.PostItemDate>
                        {date} . {timeToRead} min de leitura
                    </S.PostItemDate>
                    <S.PostItemTitle>{title}</S.PostItemTitle>
                    <S.PostItemDescription>{description}</S.PostItemDescription>
                </S.PostItemInfo>
            </S.PostItemWrapper>
        </S.PostItemLink>
    );
};

export default PostItem;
