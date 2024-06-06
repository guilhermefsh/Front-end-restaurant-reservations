import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
background-color: #d4722c;
width: 14%;
min-width: 200px;
height: 100vh;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
text-align: center;
overflow: auto;

@media(max-width: 768px){
}

@media(max-width: 680px){
  width: 100%;
  height: auto;
  display: block;
  flex-direction: column;
}
`;

export const UserDetails = styled.div`
margin-top: 20px;

@media(max-width: 680px){
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  border-bottom: 1px solid white;
  padding: 2px;
}
`;

export const UserImg = styled.img`
border-radius: 50%;
width: 100px;  /* Diminuir ainda mais o tamanho da imagem */
height: auto;
object-fit: cover;

@media(max-width: 680px){
  margin-bottom: 0.2rem;
  width: 70px;
}
`;

export const UserInfo = styled.p`
font-size: 20px;
color: white;

@media(max-width: 680px){
  font-size: 14px;  /* Diminuir a fonte */
}
`;

export const Menu = styled.div`
width: 100%;
margin-top: 4rem;
flex: 1;
overflow: hidden;
transition: max-height 0.3s ease-in-out;

@media (max-width: 680px){
  max-height: 0px;
  margin-top:0px;
}

&.open{
  @media (max-width: 680px) {
    max-height: 500px;
    display: block;
    transition: max-height 0.3s ease-in-out;
    margin-top:0px;
  }
}
`;

export const ButtonMenu = styled.button`
width: 100%;
height: 2rem;  /* Reduzir a altura */
background-color: transparent;
cursor: pointer;
border-top: none;
border-left: none;
border-right: none;
display: flex;
align-items: center;
justify-content: center;
color:white;

&:hover {
  background-color: rgb(235, 235, 235);
  color: black;
}

--icon-size: 20px;

svg {
  width: var(--icon-size);
  height: var(--icon-size);
}

@media(max-width: 680px){
  font-size: 16px;  /* Diminuir a fonte */
  margin-bottom: 0.2rem;
  
  --icon-size: 20px;  /* Reduzir o tamanho do ícone */
}
`;

export const LogoArea = styled.div`
margin-bottom: 10px;  /* Reduzir a margem inferior */
`;

export const Logo = styled.span`
font-size: 20px;
width: auto;
color: white;
font-weight: bold;
cursor: pointer;
background: linear-gradient(90deg, #724f02, #99000d);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
filter: drop-shadow(8px 9px 9px black);

@media(max-width: 680px){
  display: none;
}
`;

export const ItensMenu = styled.div`
display: none;
cursor: pointer;

@media(max-width: 680px){
  display: block;
  margin-top: 5px;  /* Reduzir a margem superior */
}
`;

export const LinkPage = styled(Link)`
text-decoration:none;
color:white;
&:hover {
  color: black;
}
`
