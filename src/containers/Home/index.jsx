import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OfferCarousel";
import { Banner, Container, Content } from "./styles";

import { useUser } from "../../hooks/UserContext";

export function Home() {

    console.log('Home')
    const {soma, userInfo} = useUser();
    console.log(soma(2,3));
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
        </main>
    )
}