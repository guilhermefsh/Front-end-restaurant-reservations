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

export const ArticleContainer = styled.article`
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

export const TitleCulin = styled.h1`
font-weight: bold;
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