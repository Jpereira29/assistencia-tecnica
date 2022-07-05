import { Container } from './styles'
export default function Contate() {
    return (
        <>
            <title>Contate-nos</title>
            <Container>
                <div id='content'>
                    <p>Increva-se para receber e-mails promocionais</p>
                    <input type="text" placeholder='E-mail' />
                    <input type="button" value="Inscrever" />
                </div>

                <div id='logo-mideas'>
                    <img src="/images/whatsapp.png" alt="whatsapp" />
                    <img src="/images/instagram.png" alt="instagram" />
                    <img src="/images/facebook.png" alt="facebook" />
                </div>
            </Container>

        </>
    )
}