import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    loadCategories();
  }, []);
  return (
    <div>
      <h1>Carrossel de Categorias</h1>
    </div>
  )
}