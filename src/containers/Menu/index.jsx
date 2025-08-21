import { useEffect, useState } from 'react';
import { Container, Banner, CategoryMenu, ProductsContainer } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';

export function Menu() {
  // Estado do React para armazenar as categorias e produtos
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Chama API para buscar as categorias
  useEffect(() => {
    async function loadCategories() {  // Função assíncrona para carregar categorias
      try {
        const { data } = await api.get('/categories');

        // Adiciona a categoria "todas" que possui todos os produtos
        const newCategories = [
          { id: 0, name: 'Todas' }, ...data,
        ];

        setCategories(newCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    async function loadProducts() {
      try {
        const { data } = await api.get('/products');
        // .map Mapeia o array dos produtos e inclui o valor em Reais
        const newProducts = data
          .map(product => ({
          currencyValue: formatPrice(product.price),
          ...product,
        }));
        setProducts(newProducts);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    // Chama as funções para carregar categorias e produtos
    loadCategories();
    loadProducts();
  }, []);


  return (
    <Container>
      <Banner>
        <h1> O MELHOR <br/> HAMBURGUER <br/> ESTÁ AQUI <br/>
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>
      <CategoryMenu>

      </CategoryMenu>
      <ProductsContainer>
        { products.map(product => (
          <CardProduct key={product.id}  product={product}
          />
        ))}
      </ProductsContainer>
    </Container>
  )
}