import { useState } from "react"
import { NavContainer, ItensIcon, ItensMenu, Logo, NavLinks, TagHeader } from "./styles"
import { Link } from "react-router-dom"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <TagHeader>
            <NavContainer>
                <Logo to="/">La casa di Gastone</Logo>
                <ItensMenu onClick={toggleMenu}>
                    <ItensIcon />
                    <ItensIcon />
                    <ItensIcon />
                </ItensMenu>
                <NavLinks className={isOpen ? 'open' : ''}>
                    <Link to="/cardapio">CARDÁPIO</Link>
                    <Link to="/historia">HISTÓRIA</Link>
                    <Link to="/login">ENTRAR</Link>
                </NavLinks>
            </NavContainer>
        </TagHeader>
    )
}
