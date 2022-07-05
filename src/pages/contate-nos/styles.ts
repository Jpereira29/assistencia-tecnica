import styled from "styled-components";

export const Container = styled.div`
background: url('images/bg-contato.png');
background-repeat: no-repeat;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

    #content {
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
        input[type="text"] {
            width: 400px;
            height: 30px;

            padding: 0 1rem;
        }

        input[type="button"] {
            width: 82px;
            height: 32px;

            background: url(button.jpg);
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
        font-size: 16px;
        #content {
            height: 250px;
            padding: 30px;

            flex-direction: column;
            input[type="text"] {
                height: 40px;
                width: 250px;
                margin-top: 30px;
            }
            input[type="button"] {
                height: 40px;
                width: 250px;
                margin-top: 30px;

            }
        }
    }

`