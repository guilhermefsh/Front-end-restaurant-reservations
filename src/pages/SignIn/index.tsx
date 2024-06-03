import {
    AreaLogin,
    ButtonForm,
    LinkBT,
    Container,
    FormLogin,
    InputForm,
    LabelLogin,
    Logo
} from './styles'
import { Link } from "react-router-dom";

export const SignIn = () => {
    return (
        <Container>
            <FormLogin>
                <Logo>La Casa di Gastone</Logo>
                <AreaLogin>
                    <LabelLogin>Email</LabelLogin>
                    <InputForm placeholder='Digite seu email' type='text' />
                </AreaLogin>
                <AreaLogin>
                    <LabelLogin>Senha</LabelLogin>
                    <InputForm placeholder='Digite sua senha' type='password' />
                </AreaLogin>
                <AreaLogin>
                    <ButtonForm>Logar</ButtonForm>
                    <LinkBT>
                        <Link to='/cadastro'
                            style={{ textDecoration: 'none', color: 'white' }}
                        >Fazer cadastro
                        </Link>
                    </LinkBT>
                </AreaLogin>
            </FormLogin>
        </Container>
    )
}
