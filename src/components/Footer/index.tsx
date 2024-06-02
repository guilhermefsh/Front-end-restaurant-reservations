import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import {
    AddresText,
    AlignContainer,
    ContactContainer,
    Description,
    FooterContainer,
    FooterLine,
    Icone,
    LogoContainer,
    LogoTitle,
    NetworkContainer,
    NetworkIconFacebook,
    NetworkIconInstagram,
    NetworkIconWhatsapp,
    TimeContainer,
    TimeDescription,
    Title
} from './styles'

export const Footer = () => {
    return (
        <FooterContainer>
            <AlignContainer>
                <LogoContainer>
                    <LogoTitle>La Casa di Gastone</LogoTitle>
                    <AddresText>Av. ReactJs com typescript, N96 - @GuilhermeFsh <br />Em breve com outros FrameWorks</AddresText>
                </LogoContainer>
                <TimeContainer>
                    <Title>Horários</Title>
                    <TimeDescription>Segunda à Sábado: 11:00 às 22:00</TimeDescription>
                    <TimeDescription>Domingos e Feriados: 11:30 às 20:00</TimeDescription>
                </TimeContainer>
                <ContactContainer>
                    <Title>Contatos</Title>
                    <Description>(12)9213-20209</Description>
                    <Description>lacasadigastone@contato.com</Description>
                </ContactContainer>
            </AlignContainer>
            <FooterLine></FooterLine>
            <NetworkContainer>
                <NetworkIconInstagram href='#'><Icone><FaInstagram size={30} /></Icone></NetworkIconInstagram>
                <NetworkIconFacebook href='#'><Icone><FaFacebook size={30} /></Icone></NetworkIconFacebook>
                <NetworkIconWhatsapp href='#'><Icone><FaWhatsapp size={30} /></Icone></NetworkIconWhatsapp>
            </NetworkContainer>
        </FooterContainer>
    )
}
