import styled from "styled-components";


export const Container = styled.main`
display:flex;
@media(max-width:680px){
    display:block;
}
`
export const FormContainer = styled.section`
display:flex;
align-items:center;
flex-direction:column;
width:100%;
height:auto;
margin:2.5rem;
@media(max-width:680px){
    width:auto;
}

`
export const TitlePage = styled.h3`
font-size:40px;
@media(max-width:900px){
font-size:24px;
}
@media(max-width:682px){
font-size:20px;
}
`
export const ImageNewItem = styled.form`
display:flex;
border:1px solid black;
width:100%;
height:24%;
padding:1rem;
`
export const UploadContainer = styled.button`
border-width: 2px;
width: 12rem;
border-radius: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-color: #888;
height: 8rem;
`

export const UploadButtonImg = styled.div`
cursor: pointer;
background-color:transparent;
border:none;
position:absolute;
`
export const UploadIcon = styled.button`
cursor: pointer;
`
export const UploadFileCont = styled.div`
position:absolute;
opacity:0;
`
export const UploadFile = styled.input`
cursor: pointer;
`
export const FormNewItem = styled.form`
display:flex;
flex-direction:column;
width:100%;
height:auto;
padding:1.5rem;
border: 1px solid black;
gap:0.55rem;
`
export const TitleLable = styled.label`
font-size:14px;
font-weight:bold;
`
export const TypeItemDiv = styled.div`
display:flex;
gap:1rem;
`
export const TypeItems = styled.div`
display:block;
width:100%;
`
export const SubmitButton = styled.button`
width:100%;
padding:0.25rem;
height:2.5rem;
border-radius:0.90rem;
background-color:#D4722C;
color:white;
font-size:20px;
font-weight:bold;
cursor: pointer;

&:hover{
    background-color:#ad5d24;
}
`
export const ButtonContainer = styled.div`
margin-top:1.5rem;
`
