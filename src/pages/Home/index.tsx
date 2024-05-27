import image from '../../assets/pexels-narda-yescas-724842-1566837.jpg'
import divisor from '../../assets/divisor.png'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import { Header } from '../../components/Header'
import { ArticleContainer, Container, CulinContainer, DivisorImg, ImageContainer, ItensCulin, ParagraphCulin, TitleCulin, WelcomeIMG, WelcomeTitle } from './styles'
import Carousel from './Carrossel'


export const Home = () => {
    const imgs = [image1, image2, image3, image4, image5];
    return (
        <Container>
            <Header />
            <ImageContainer>
                <WelcomeIMG src={image} alt="imagem" />
                <WelcomeTitle>La Casa di Gastone <br /><br /><br /></WelcomeTitle>
                <WelcomeTitle>Bem-vindo</WelcomeTitle>
            </ImageContainer>
            <ArticleContainer>
                <CulinContainer>
                    <TitleCulin>Nossa Culinária</TitleCulin>
                    <DivisorImg src={divisor} />
                    <ParagraphCulin>
                        Bem-vindo ao La Casa di Gastone, onde a tradição e a paixão pela culinária italiana se encontram
                        para proporcionar uma experiência gastronômica inesquecível. Nosso restaurante é um tributo à
                        riqueza e diversidade da cozinha italiana, trazendo o autêntico sabor da Itália para o seu paladar.
                    </ParagraphCulin>
                </CulinContainer>
                <Carousel slides={imgs} />
            </ArticleContainer>
            <div>
                teste
            </div>
        </Container>
    )
}
