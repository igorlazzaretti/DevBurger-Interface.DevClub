import { Banner, Container, Content } from "./styles";

export function Home() {
    return (
        <main>
            <Banner>
                <h1>Bem-vindo!</h1>
            </Banner>
            <Container>
                <Content>
                    <div>Carrosel Categorias</div>
                    <div>Carrosel Produtos</div>
                </Content>
            </Container>
        </main>
    )
}