import styled from "styled-components";


export const Container = styled.main`

`
export const ImageContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
export const WelcomeIMG = styled.img`
width:100%;
height:730px;
object-fit:cover;
`
export const WelcomeTitle = styled.h1`
position:absolute;
color:white;
font-size:2rem;
text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
`
export const ArticleCulinaria = styled.article`
width: 100%;
max-width: 1200px;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
margin: 4rem auto;
padding: 0 1rem;
`;

export const CulinContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;

export const TitleCulin = styled.h3`
color: #D19B6F;
font-style: italic;
text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
font-size: 2.5rem;
margin-bottom: 1rem;
`;

export const ParagraphCulin = styled.p`
width: 100%;
max-width: 800px;
font-size: 1rem;
line-height: 1.5rem;
margin-bottom: 2rem;
`;

export const DivisorImg = styled.img`
margin: 1rem 0;
`;

export const ItensCulin = styled.img`
max-width: 200px;
height: 300px;
margin: 0 10px;
`;

export const ContainerInformations = styled.article`
width:100%;
height:460px;
position:relative;
@media (max-width: 768px) {
    height: 300px;
  }

@media (max-width: 480px) {
    height: 200px;
  }
`
export const ImageInformations = styled.img`
width:100%;
height:100%;
object-fit:cover;
`
export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.3);
pointer-events: none; //para garantir que a camada não interfira na interação com a imagem
`
export const TextInfoContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
color: white;
pointer-events: none;
@media (max-width: 768px) {
    width: 90%;
  }

@media (max-width: 480px) {
    width: 95%;
  }
`;

export const TitleInfo = styled.h4`
margin: 0;
font-size: 2em;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
@media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const DescriptionInfo = styled.p`
margin: 0;
margin-top: 10px;
font-size: 1em;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
@media (max-width: 768px) {
    font-size: 0.9em;
    margin-top: 8px;
  }

@media (max-width: 480px) {
    font-size: 0.8em;
    margin-top: 6px;
}
`;

//reserva
export const ArticleReserva = styled.article`
width: 100%;
display: block;
padding: 1rem;
text-align: center;
`;

export const ReservaInfo = styled.div`
margin-bottom: 2rem;
`;

export const ReservaTitle = styled.h4`
font-weight: bolder;
font-style: italic;
color: #d19b6f;
font-size: 40px;
`;

export const TextReserva = styled.p`
font-size: 18px;
`;

export const ButtonEffect = styled.button`
display: block;
margin: 1rem auto 0;
padding: 0.5rem 1rem;
font-size: 1rem;
color: white;
background-color: #d19b6f;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #b07a5c;
}
`;

export const ImgReservaContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const ImagesItensReserva = styled.img`
  width: 100%;
  max-width: 240px;
  height: auto;
  margin: 0.5rem;

  &:nth-child(odd) {
    transform: translateY(-20px);
  }

  &:nth-child(even) {
    transform: translateY(20px);
  }

  @media (max-width: 768px) {
    &:nth-child(odd),
    &:nth-child(even) {
      transform: translateY(0);
    }
  }
  @media (max-width: 968px) {
    &:nth-child(odd),
    &:nth-child(even) {
      transform: translateY(0);
    }
  }
`;

export const AlignBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:2rem;
`;