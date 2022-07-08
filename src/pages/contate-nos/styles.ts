import styled from "styled-components";

const  Container = styled.div`
background: url('images/bg-contato.png');
background-repeat: no-repeat;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

    .content {
        max-width: 1100px;
        height: 8rem;

        padding: 0 1.2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        background: rgba(255, 255, 255, 0.10);
        border-radius: 20px;

        input {
            margin-left: 1rem;
        }
        input[type="email"] {
            width: 400px;
            height: 30px;

            padding: 0 1rem;
        }

        input[type="button"] {
            width: 82px;
            height: 32px;

            background: none;
            border: 1.5px solid #FFFFFF;
            border-radius: 50px;

            color: white;
            font-weight: bold;

            transition:  0.2s;
            &:hover {
                background: white;
                color: black;
                font-weight: bold;
            }
        }
    }

    #logo-mideas {
        margin-top: 10rem;

        img {
            margin: 0 1.5rem;

            transition: filter 0.2s;
            &:hover {
                filter: brightness(0.8);
            }
        }
    }

    @media (max-width: 500px) {
        font-size: 18px;
        height: 100vh;
        .content {
            flex-direction: column;
            height: 350px;

            input {
                margin-left: 0;
                height: 8rem;
            }
            input[type="email"] {
                width: 300px;
                height: 40px;
                margin-top: 30px;
            }
            input[type="button"] {
                width: 300px;
                height: 40px;
                margin-top: 30px;
                border: 3px solid white;

            }
        }
    }

`

export default Container