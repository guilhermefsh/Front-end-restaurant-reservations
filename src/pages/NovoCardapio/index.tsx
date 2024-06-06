import { FiUpload } from "react-icons/fi"
import { Sidebar } from "../../components/sidebar"
import { FormInput } from "../../components/InputForm/styles"
import {
    Container,
    FormContainer,
    TitlePage,
    UploadButtonImg,
    UploadContainer,
    UploadFile,
    UploadFileCont,
    ImageNewItem,
    FormNewItem,
    TitleLable,
    TypeItemDiv,
    TypeItems,
    SubmitButton,
    ButtonContainer
} from "./styles"


export const NovoCardapio = () => {
    return (
        <Container>
            <Sidebar />
            <FormContainer>
                <TitlePage>CADASTRAR NOVO ITEM</TitlePage>
                <ImageNewItem>
                    <UploadContainer>
                        <UploadButtonImg>
                            <FiUpload size={30} />
                        </UploadButtonImg>
                        <UploadFileCont>
                            <UploadFile type="file" />
                        </UploadFileCont>
                    </UploadContainer>
                </ImageNewItem>
                <FormNewItem>
                    <TypeItemDiv>
                        <TypeItems>
                            <TitleLable>Nome do prato:</TitleLable>
                            <FormInput />
                        </TypeItems>
                        <TypeItems>
                            <TitleLable>Cidade de origem:</TitleLable>
                            <FormInput />
                        </TypeItems>
                    </TypeItemDiv>
                    <TitleLable>Descrição:</TitleLable>
                    <FormInput />
                    <TitleLable>Preço:</TitleLable>
                    <FormInput />
                    <ButtonContainer>
                        <SubmitButton>Salvar</SubmitButton>
                    </ButtonContainer>
                </FormNewItem>
            </FormContainer>
        </Container>
    )
}
