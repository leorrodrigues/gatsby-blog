import styled from 'styled-components';

export const ListWrapper = styled.section`
    body#grid & {
        background-color: var(--borders);
        border-bottom: 1px solid var(--borders);
        border-top: 1px solid var(--borders);
        display: grid;
        grid-area: posts;
        grid-gap: 1px;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        margin-top: 2rem;
    }
`;
