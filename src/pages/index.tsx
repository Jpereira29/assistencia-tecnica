import Link from "next/link";
import Container1 from "./stylesIndex/stylesIndex1";
import Container2 from "./stylesIndex/stylesIndex2";
import Container3 from "./stylesIndex/stylesIndex3";

export default function Home() {
  return (
    <>
      <title>Home</title>

      <Container1>
        <h1>MELHORES SOLUÇÕES PARA QUEM PROCURA QUALIDADE E EFICIÊNCIA</h1>
      </Container1>

      <Container2>
        <h1>Quem Somos?</h1>
        <div>
          <h2>Técnico de circuito integrado responsável pela recuperação de aparelho de telecomunicação global</h2>
        </div>
      </Container2>

      <Container3>
        <h1>Nossos Serviços</h1>
        <div className="content">
          <div id="elipse1">
            <h3>Concerto de placas em geral</h3>
          </div>

          <div id="elipse2">
            <h3>Trocas de telas</h3>
          </div>

          <div id="elipse3">
            <h3>Entre outros serviços</h3>
            <Link href='contate-nos'><button>Faça seu orçamento</button></Link>
          </div>
        </div>
      </Container3>
    </>
  )
}
