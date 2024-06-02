import styled, { keyframes } from "styled-components";

const slide = keyframes`
  50% {
    left: 10%;
    top: -40%;
  }

  100% {
    left: -15%;
    top: -15%;
  }
`;

export const FooterContainer = styled.footer`
  background-color: #191919;
  width: 100%;
  padding: 2rem 1rem;
  margin-top:60px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const AlignContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:center;
  padding: 2rem 5rem;

  @media (max-width: 954px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Logo e Endereço
export const LogoContainer = styled.div`
  text-align: center;
  justify-content:center;
  align-items:center;
  display:block;
`;

export const LogoTitle = styled.h4`
  font-size: 24px;
  color: #d19b6f;
  margin-top: -8px;
`;

export const AddresText = styled.p`
  color: white;
  font-size: 14px;
`;

// Horários
export const TimeContainer = styled.div`
  display: block;
  justify-content:center;
  text-align: center;
  @media(max-width:954px){
    margin-top:28px;
    margin-bottom:20px;
  }
`;

export const Title = styled.h4`
  font-size: 24px;
  color: #d19b6f;
`;

export const TimeDescription = styled.p`
  font-size: 12px;
  color: white;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 12px;
  color: white;
  margin-bottom: 0.5rem;
`;

// Contato
export const ContactContainer = styled.div`
  text-align: center;
`;

export const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
`;

// Ícones do rodapé
export const Icone = styled.i`
  color: white;
`;

export const NetworkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const NetworkIcon = styled.a`
  text-decoration: none;
  border-radius: 14px;
  width: 2.325rem;
  height: 2.925rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  i {
    color: #ffffff;
    font-size: 1.5rem;
    transition: all 0.2s;
    z-index: 1;
  }

  &:hover i {
    transform: scale(1.2);
    color: #f1f1f1;
  }

  &:before {
    background: var(--color);
    content: "";
    position: absolute;
    width: 130%;
    height: 130%;
    left: -110%;
    top: 80%;
    transform: rotate(45deg);
    z-index: 0;
  }

  &:hover:before {
    animation: ${slide} 0.7s forwards;
  }
`;

export const NetworkIconInstagram = styled(NetworkIcon)`
  --color: linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7);
`;

export const NetworkIconFacebook = styled(NetworkIcon)`
  --color: #004cf0;
`;

export const NetworkIconWhatsapp = styled(NetworkIcon)`
  --color: #25d366;
`;
