import styled from "styled-components";
import background from '../../assets/loginback.jpg'
import { Link } from "react-router-dom";

export const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-image: url(${background});
background-size: cover;
background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Camada preta semitransparente */
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;
export const FormLogin = styled.form`
width:400px;
height:400px;
border-radius:18px;
background-color:hsla(0, 0%, 10%, 0.1);
backdrop-filter:blur(12px);
display:block;
text-align:center;
align-items:center;
justify-content:center;
`
export const AreaLogin = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:0.75rem;
`

export const Logo = styled(Link)`
color:#D19B6F;
font-size:32px;
text-align:center;
margin-top:2rem;
margin-bottom:1rem;
text-decoration:none;
cursor: pointer;
&:hover {
    color: #d68746;
    transform: translateY(-2px);
}
`

export const LabelLogin = styled.label`
color:white;
font-size:20px;
font-weight:bold;
margin-bottom:1px;
`

export const InputForm = styled.input`
width:300px;
height:2rem;
border-radius:12px;
text-align:center;
background-color:transparent;
border:2px solid #d19b6f;
color:white;
padding: 0.5rem;
transition: all 0.3s ease-in-out;
margin-bottom:2rem;

&:focus{
    outline:none;
    border-color:#FFF5E1;
    box-shadow:0 0 10px #d19b6f;
    background-color:rgba(255,255,255,0.1);
}

&::placeholder{
    color:#d19b6f;
    opacity:0.8s
}
`
export const ButtonForm = styled.button`
width: 300px;
height: 2.5rem;
border-radius: 12px;
background-color: #ee8c3c;
color: white;
font-size: 18px;
font-weight: bold;
border: none;
cursor: pointer;
transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  
&:hover {
    background-color: #d68746;
    transform: translateY(-2px);
}
  
&:active {
    background-color: #d38b4c;
    transform: translateY(0);
}
`
export const LinkBT = styled.div`
  margin-top: 1rem;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
