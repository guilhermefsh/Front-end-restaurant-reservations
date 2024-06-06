import { FaBars, FaCalendarTimes } from 'react-icons/fa';
import foto from '../../assets/user.jpg';
import { ButtonMenu, Container, ItensMenu, LinkPage, Logo, LogoArea, Menu, UserDetails, UserImg, UserInfo } from "./styles";
import { CiForkAndKnife } from 'react-icons/ci';
import { GiKnifeFork } from 'react-icons/gi';
import { MdTableRestaurant } from 'react-icons/md';
import Clock from 'react-live-clock';
import { useState } from 'react';

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const showSideBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Container>
            <UserDetails>
                <UserImg src={foto} alt="User Image" />
                <UserInfo>Guilherme Ferreira</UserInfo>
                <UserInfo><Clock format={"HH:mm:ss"} ticking={true} timezone={'America/Sao_Paulo'} /></UserInfo>
            </UserDetails>
            <ItensMenu onClick={showSideBar}>
                <FaBars size={34} color='white' />
            </ItensMenu>
            <Menu className={isOpen ? 'open' : ''}>
                <ButtonMenu><GiKnifeFork size={20} /> <LinkPage to={"novocardapio"}>CADASTRO DE CARDÁPIO</LinkPage></ButtonMenu>
                <ButtonMenu><CiForkAndKnife size={20} /> EDITAR DE CARDÁPIO</ButtonMenu>
                <ButtonMenu><MdTableRestaurant size={20} /> CADASTRAR MESAS</ButtonMenu>
                <ButtonMenu><FaCalendarTimes size={20} /> RESERVAS</ButtonMenu>
            </Menu>
            <LogoArea>
                <Logo>La casa di Gastone</Logo>
            </LogoArea>
        </Container>
    );
};
