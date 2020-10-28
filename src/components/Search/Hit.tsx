/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import PostItem from '../PostItem';

interface HitProps {
    hit: {
        fields: {
            slug: string;
        };
        title: string;
        date: string;
        category: string;
        description: string;
        background: string;
    };
}

const Hit = ({ hit }: HitProps) => (
    <PostItem
        slug={hit.fields.slug}
        background={hit.background}
        title={hit.title}
        date={hit.date}
        category={hit.category}
        description={hit.description}
    />
);

export default Hit;
