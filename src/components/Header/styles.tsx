import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const logoAnimation = keyframes`
0%{
    transform:scale(1);
}
50%{
    transform:scale(1.1);
}
100%{
    transform:scale(1);
}
`
export const Container = styled.nav`
background: rgba(0, 0, 0, 0.3);
width:100%;
display:flex;
justify-content:space-between;
align-items: center;
padding: 1rem 2rem;
position:fixed;
`
export const Logo = styled(Link)`
color:#ebebeb;
font-size:1.5rem;
font-weight:bold;
text-decoration:none;
transition:color 0.3s ease-in-out;
&:hover{
    animation: ${logoAnimation} 1s linear infinite;
    color:#D19B6F;
}
`
export const NavLinks = styled.div`
a{
    color:#ebebeb;
    text-decoration:none;
    margin-left:1.5rem;
    font-size:1rem;
    transition:color 0.3s ease-in-out;
    &:hover{
    color:#D19B6F;
    }
}
`
export const FocusLinks = styled.a`
cursor: pointer;
`