import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const Profile: React.FC = () => {
    const {
        site: {
            siteMetadata: { title, description, position },
        },
    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    title
                    position
                    description
                }
            }
        }
    `);

    return (
        <S.ProfileWrapper>
            <S.ProfileLink
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}
                to="/"
            >
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    );
};

export default Profile;
