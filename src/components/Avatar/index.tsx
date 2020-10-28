import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as S from './styled';

const avatar: React.FC = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile_photo.jpg" }) {
                    childImageSharp {
                        fixed(width: 60, height: 60) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `,
    );

    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />;
};

export default avatar;
