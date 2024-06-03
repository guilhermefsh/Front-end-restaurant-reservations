import styled from "styled-components";
import background from '../../assets/loginback.jpg'

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background-image:url(${background});
background-size:cover;
background-position:center;
`
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

export const Logo = styled.h3`
color:#D19B6F;
font-size:32px;
text-align:center;
margin-top:2rem;
margin-bottom:1rem;
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
export const ButtonLink = styled.button`
width: 300px;
height: 2.5rem;
border-radius: 12px;
background-color: #f79e55;
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