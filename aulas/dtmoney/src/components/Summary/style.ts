import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    
    div{
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    }

    div:last-child{
        background-color: var(--green);
        color: var(--shape)
    }

    header{
        display:flex;
        justify-content:space-between; 
    }

    //strong por padrão vem com display inline. Por isso formatação como margin não funciona.
    strong{
        display:block;
        font-weight:500; 
        font-size: 2rem;

        margin-top: 1rem;
        line-height:3rem;
    }
`;
