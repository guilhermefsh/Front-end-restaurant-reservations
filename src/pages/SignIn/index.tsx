import {
    AreaLogin,
    ButtonForm,
    ButtonLink,
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
                    <ButtonLink>
                        <Link to='/cadastro'
                            style={{ textDecoration: 'none', color: 'white' }}
                        >Fazer cadastro
                        </Link>
                    </ButtonLink>
                </AreaLogin>
            </FormLogin>
        </Container>
    )
}
