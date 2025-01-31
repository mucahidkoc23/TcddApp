import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  difficulty: string;
  caloriesPerServing: number;
  image: string;
}

interface FoodListProps {
  setTotalResults: (total: number) => void;
  currentPage: number;
  searchQuery: string;
}

export const FoodList: React.FC<FoodListProps> = ({
  setTotalResults,
  currentPage,
  searchQuery,
}) => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        let url = 'https://dummyjson.com/recipes';
        if (searchQuery) {
          url = `https://dummyjson.com/recipes/search?q=${searchQuery}`;
        }

        const response = await axios.get(url);
        const recipesData: Recipe[] = response.data.recipes;
        setRecipes(recipesData);
        setTotalResults(recipesData.length);
      } catch (err) {
        console.log(err);
        setRecipes([]);
        setTotalResults(0);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchQuery, setTotalResults]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recipes.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <p className="p-8">Yükleniyor...</p>;
  }

  if (recipes.length === 0) {
    return <p className="p-8">Sonuç bulunamadı.</p>;
  }

  return (
    <div>
      {currentItems.map((recipe) => (
        <div
          key={recipe.id}
          className={`grid grid-cols-6 items-center justify-items-center gap-5 p-4 text-center ${
            recipe.id % 2 === 0 ? 'bg-[#fff6f0]' : 'bg-[#FAEBDD]'
          }`}
        >
          <div>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="h-20 w-20 rounded-lg object-cover"
            />
          </div>
          <div>{recipe.name}</div>
          <div>{recipe.cuisine}</div>
          <div>{recipe.difficulty}</div>
          <div>{recipe.caloriesPerServing}</div>
          <div>
            <button
              className="text-xl text-gray-400 hover:text-gray-600"
              onClick={() =>
                navigate(`/foodDetail/${recipe.id}`, { state: { recipe } })
              }
            >
              &gt;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
