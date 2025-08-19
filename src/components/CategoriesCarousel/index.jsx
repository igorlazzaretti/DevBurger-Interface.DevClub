import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get('/categories');
        console.log("Categories:", response);
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