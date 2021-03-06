import styled from "styled-components";

const Container3 = styled.div`
padding: 8rem 0;
height: 100vh;
margin-bottom: 2.5rem;


h1 {
    margin-bottom: 2.5rem;
    margin-left: 2rem;
}

    .content {
        height: 100%;

        display: flex;
        flex-direction: row;
        justify-content:space-evenly;
        align-items: center;
        background: url("/images/nossosServicos-bg.png");
        background-repeat: no-repeat;

        #elipse1 {
            background: url("/images/Ellipse1.png");
            background-repeat: no-repeat;

            display: flex;
            align-items: center;
            justify-content: center;

            height: 280px;
            width: 280px;

            h3 {
                text-align: center;
                width: 180px;
            }
        }
        #elipse2 {
            background: url("/images/Ellipse2.png");
            background-repeat: no-repeat;

            display: flex;
            align-items: center;
            justify-content: center;

            height: 280px;
            width: 280px;

            h3 {
                text-align: center;
                width: 180px;
            }
        }
        #elipse3 {
            background: url("/images/Ellipse3.png");
            background-repeat: no-repeat;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            height: 280px;
            width: 280px;

            h3 {
                text-align: center;
                width: 180px;
            }

            button {
                box-sizing: border-box;

                color: white;
                font-weight: bold;
                margin-top: 1rem;
                margin-bottom: -2rem;
                width: 165px;
                height: 28px;

                background: #0B0B3A;
                border: 2px solid #FFFFFF;
                border-radius: 50px;

                transition:  0.2s;

                &:hover {
                    background: white;
                    color: black;
                    font-weight: bold;
                }
            }
        }
    }


    @media (max-width: 500px) {
        height: 170vh;
        .content {
            padding-top: 1.5rem;
            flex-direction: column;
            #elipse1 {
                height: 100%
            }
            #elipse2 {
                height: 100%
            }            
            #elipse3 {
                height: 100%
            }
        }
    }
`

export default Container3
