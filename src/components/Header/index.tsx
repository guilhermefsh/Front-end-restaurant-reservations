import { Container, FocusLinks, Logo, NavLinks } from "./styles"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <Container>
            <Logo to="/">La casa di Gastone</Logo>
            <NavLinks>
                <FocusLinks>CARDÁPIO</FocusLinks>
                <Link to="/sign">HISTÓRIA</Link>
                <Link to="/sign">ENTRAR</Link>
            </NavLinks>
        </Container>
    )
}
