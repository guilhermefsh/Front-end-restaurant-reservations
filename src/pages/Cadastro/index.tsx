import {
    ButtonForm,
    ButtonLink,
    Container,
    FormCadastro,
    LabelCadastro,
    AreaCadastro,
    InputForm,
    Logo
} from './styles';
import { Link } from "react-router-dom";

export const Cadastro = () => {
    return (
        <Container>
            <FormCadastro>
                <AreaCadastro>
                    <Logo>Cadastro</Logo>
                    <LabelCadastro>Nome</LabelCadastro>
                    <InputForm placeholder='Digite seu nome' type='text' />
                </AreaCadastro>
                <AreaCadastro>
                    <LabelCadastro>Email</LabelCadastro>
                    <InputForm placeholder='Digite seu email' type='email' />
                </AreaCadastro>
                <AreaCadastro>
                    <LabelCadastro>Endereço</LabelCadastro>
                    <InputForm placeholder='Digite seu endereço' type='text' />
                </AreaCadastro>
                <AreaCadastro>
                    <LabelCadastro>Data de Nascimento</LabelCadastro>
                    <InputForm placeholder='Digite sua data de nascimento' type='date' />
                </AreaCadastro>
                <AreaCadastro>
                    <LabelCadastro>Número de Telefone</LabelCadastro>
                    <InputForm placeholder='Digite seu número de telefone' type='tel' />
                </AreaCadastro>
                <AreaCadastro>
                    <ButtonForm>Cadastrar</ButtonForm>
                    <ButtonLink>
                        <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
                            Voltar ao login
                        </Link>
                    </ButtonLink>
                </AreaCadastro>
            </FormCadastro>
        </Container >
    );
}
