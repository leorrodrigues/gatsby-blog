import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styled';

interface CommentsProps {
    url: string;
    title: string;
}

const Comments: React.FC<CommentsProps> = ({ url, title }) => {
    const completeURL = `https://willianjustem.com.br${url}`;

    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
                shortname="willianjusten"
                identifier={completeURL}
                title={title}
                url={completeURL}
            />
        </S.CommentsWrapper>
    );
};

export default Comments;
