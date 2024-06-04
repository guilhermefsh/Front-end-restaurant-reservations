import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Animação do logo
const logoAnimation = keyframes`
0% {
    transform: scale(1);
}
50% {
    transform: scale(1.1);
}
100% {
    transform: scale(1);
}
`;

export const TagHeader = styled.header``;

// Container do menu de navegação
export const NavContainer = styled.nav`
background: rgba(0, 0, 0, 0.2);
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
position: fixed;
z-index: 1000;

&.scrolled{
    background-color:#e7e7e7;
}

@media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
}
`;

// Estilo do logo
export const Logo = styled(Link)`
color: #ebebeb;
font-size: 1.5rem;
text-decoration: none;
transition: color 0.3s ease-in-out;

&.scrolled{
   color: #191919;
}

&:hover {
    animation: ${logoAnimation} 1s linear infinite;
    color: #d19b6f;
}

@media (max-width: 768px) {
    font-size: 1.2rem;
}
`;

// Container dos links de navegação
export const NavLinks = styled.div`
display: flex;
align-items: center;

@media (max-width: 768px) {
    max-height: 0;
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    transition: max-height 0.3s ease-in-out;
}

&.open {
    @media (max-width: 768px) {
        max-height: 500px;
    }
}

&.scrolled a{
   color: #191919;
    }

a {
    color: #ebebeb;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 1rem;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #d19b6f;
    }

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 1rem;
        font-size: 1.2rem;
    }
}
`;

export const ItensMenu = styled.div`
display: none;
cursor: pointer;

&.scrolled > *{
   background-color: #191919;
}

@media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 2rem;
}
`;

