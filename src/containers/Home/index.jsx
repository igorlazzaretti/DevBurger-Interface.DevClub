import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Footer } from "../../components/Footer";
import { OffersCarousel } from "../../components/OfferCarousel";
import { Banner, Container, Content } from "./styles";


export function Home() {
    return (
        <main>
            <Banner>
                <h1>Bem-vindo!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel />
                    <OffersCarousel />
                </Content>
            </Container>
            <Footer />
        </main>
    )
}