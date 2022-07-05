import Link from "next/link";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <img src="images/logo.png" alt="Logo" />
            <nav>
                <Link href='/'><a>Home</a></Link>
                <Link href='/contate-nos'><a>Contate-nos</a></Link>
            </nav>
        </Container>
    )
}