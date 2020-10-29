import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as S from './styled';

const avatar: React.FC = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile_photo.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 60) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `,
    );

    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
};

export default avatar;
