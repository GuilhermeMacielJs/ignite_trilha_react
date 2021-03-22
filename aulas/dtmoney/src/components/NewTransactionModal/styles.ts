import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.form`
    display:flex;
    flex-direction: column;
    
    h2{
    

        color: var(--text-title);
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }

    button.react-modal-close{
        position:absolute;
        right:1rem;
        top:1rem;
        border:0;
        background: transparent;

        transition: filter .2s;
        &:hover{
            filter: brightness(.8);
        }
    }

    input{
        height: 4rem;
        width:100%;
        padding:0 1.5rem;

        background:#e7e9ee;

        border: 1px solid #d7d7d7;
        border-radius:0.25rem;

        &::placeholder{
            color: var(--text-title);
        }

        & + input{
            margin-top:1rem;    
        }
    }
    button[type="submit"]{
        height:4rem;
        width:100%;

        color: var(--shape);
        background-color:var(--green);

        border:0;
        border-radius: 0.25rem;

        font-size: 1rem;
        font-weight: 600;

        margin-top: 1.5rem;
        
        transition: .2s;
        &:hover{
            filter: brightness(.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    margin: 1rem 0;        
`;

interface RadioBoxProps{
    isActive: boolean
}

export const RadioBox = styled.button<RadioBoxProps>`
    display:flex;
    align-items:center;
    justify-content:center;

    height:4rem;
    width:100%;

    background: ${(props) => props.isActive ? 'var(--green)' : 'transparent'};
    color: (--text-tile);

    transition: .2s;

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    }
       
    border: 1.5px solid #969CB3;
        border-radius: 0.25rem;

    img{
        height:20px;
        width:20px;
    }
    
    span{
        display: inline-block;
        margin-left:1rem;

        font-weight:500;
        font-size:1rem;
    }
`;

