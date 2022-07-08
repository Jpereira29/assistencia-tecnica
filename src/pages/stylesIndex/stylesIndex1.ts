import styled from "styled-components";

const Container1 = styled.div`
background: url("/images/background.png");
background-repeat: no-repeat;
height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
    font-family: "Rubik Moonrocks";
    max-width: 800px;
    }

    h2 {
    font-family: "Shrikhand";
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 20px;
            margin-top: -200px;
            max-width: 320px;
        }
    }

`

export default Container1
