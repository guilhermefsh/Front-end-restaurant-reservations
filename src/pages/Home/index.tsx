import image from '../../assets/pexels-narda-yescas-724842-1566837.jpg';
import divisor from '../../assets/divisor.png';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import pizzainfo from '../../assets/restaurantspace.jpg';
import imgreserva1 from '../../assets/imgreserva1.jpg';
import imgreserva2 from '../../assets/imgreserva2.jpg';
import imgreserva3 from '../../assets/imgreserva3.jpg';
import Carousel from './Components/Carrossel';
import { ButtonEffect } from './Components/ButtonEffect';
import { gsap } from 'gsap';
import { useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    AlignBtn,
    ArticleCulinaria,
    ArticleReserva,
    Container,
    ContainerInformations,
    CulinContainer,
    DescriptionInfo,
    DivisorImg,
    ImageContainer,
    ImageInformations,
    ImagesItensReserva,
    ImgReservaContainer,
    Overlay,
    ParagraphCulin,
    ReservaInfo,
    ReservaTitle,
    TextInfoContainer,
    TextReserva,
    TitleCulin,
    TitleInfo,
    WelcomeIMG,
    WelcomeTitle
} from './styles';

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
    const imgs = [image1, image2, image3, image4, image5];
    const el = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (el.current) {
                const images = el.current.querySelectorAll('.imageItem');
                images.forEach((image, index) => {
                    gsap.fromTo(image, {
                        opacity: 0,
                        y: 160,
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: image,
                            start: 'top 100%',
                            end: 'top 50%',
                            scrub: true,
                            markers: false,
                        }
                    });
                });
            }
        }, el);

        return () => ctx.revert(); // Clean up
    }, []);

    return (
        <Container>
            <ImageContainer>
                <WelcomeIMG src={image} alt="imagem" />
                <WelcomeTitle>La Casa di Gastone <br /><br /><br /></WelcomeTitle>
                <WelcomeTitle>Bem-vindo</WelcomeTitle>
            </ImageContainer>
            <ArticleCulinaria>
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
            </ArticleCulinaria>
            <ContainerInformations>
                <ImageInformations src={pizzainfo} alt="Espaço do restaurante" />
                <Overlay />
                <TextInfoContainer>
                    <TitleInfo>Momentos inesquecíveis!</TitleInfo>
                    <DescriptionInfo>Nosso ambiente é perfeito para trazer a família e amigos, junto a nossa culinária
                        espetacular, todos terão momentos inesquecíveis, faça já sua reserva!
                    </DescriptionInfo>
                </TextInfoContainer>
            </ContainerInformations>
            <ArticleReserva>
                <ReservaInfo>
                    <ReservaTitle>Reserve sua mesa!</ReservaTitle>
                    <TextReserva>Crie já a sua conta e reserve sua mesa. <br />Escolha o lugar de sua preferência e aproveite
                        a incrível experiência de comer em La Casa Di Gastone
                    </TextReserva>
                    <AlignBtn>
                        <ButtonEffect />
                    </AlignBtn>
                </ReservaInfo>
                <ImgReservaContainer ref={el}>
                    <ImagesItensReserva className="imageItem" src={imgreserva1} />
                    <ImagesItensReserva className="imageItem" src={imgreserva2} />
                    <ImagesItensReserva className="imageItem" src={imgreserva3} />
                </ImgReservaContainer>
            </ArticleReserva>
        </Container>
    );
};
