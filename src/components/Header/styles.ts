import styled from "styled-components";

export const Container = styled.header`
    box-sizing: border-box;

    position: fixed;
    width: 100vw;
    height: 5rem;

    background: #000000;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.6);

    display: flex;
    align-items: center;
    
    nav {
        margin-left: auto;
        margin-right: 8rem;
        a {
            margin-right: 2rem;
        }
    }

    img {
        margin-left: 1rem;
    }

    @media (max-width: 500px) {
        font-size: 14px;

        nav {
            margin-right: 5px;
        }
    }
`