import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Title, ContainerItems } from "./styles";

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get('/products');
        // Filtro para obter apenas as ofertas
        const onlyOffers = data.filter(product => product.offer);
        setOffers(onlyOffers);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    loadProducts();
  }, []);

  // Responsividade do Carrossel exigido pela biblioteca react-multi-carousel
  const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 4,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1280},
        items: 4,
    },
    tablet: {
        breakpoint: {max: 1280, min: 690},
        items: 3,
    },
    mobile: {
        breakpoint: {max: 690, min: 0},
        items: 2,
    },
  };

  return (
    <Container>
      <Title>Ofertas do Dia</Title>
      <Carousel
          responsive={responsive}
          infinite={true}
          partialVisible={false}
          itemClass="carousel-item"
      >
        {offers.map(({ id, url, name }) => (
          <ContainerItems key={id} $imageurl={url} >
            <p>{name}</p>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  )
}