import Logo from "../../assets/logo.svg";
import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RigthContainer,
    Title,
    Link,
    Button
} from "./styles";

export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>
            <RigthContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha</span>
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>

                <p>
                    Não possui conta? <Link>Clique aqui</Link>
                </p>
            </RigthContainer>
        </Container>
    );
}