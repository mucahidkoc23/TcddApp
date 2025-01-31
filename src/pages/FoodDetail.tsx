import React, { useState } from 'react';
import { SlideBar } from '../components/SlideBar';
import { useLocation } from 'react-router-dom';
import {
  FoodDetailDefination,
  FoodDetailDefinationLarge,
} from '../components/FoodDetailDefination';
import { UserInfo } from '../components/UserInfo';

interface Recipe {
  name: string;
  image: string;
  cuisine: string;
  caloriesPerServing: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  tags: string[];
  mealType: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
}

const FoodDetail = () => {
  const [activeTab, setActiveTab] = useState<'ingredients' | 'recipe'>(
    'ingredients',
  );
  const location = useLocation();
  const recipe = location.state?.recipe as Recipe | undefined;

  return (
    <div className="flex min-h-screen bg-[#FAEBDD]">
      <SlideBar />
      <div className="flex w-[30%] flex-col px-4">
        <div className="mt-[175px]">
          <div className="absolute top-30 text-xl font-bold text-orange-400">
            Yemek Detayı
          </div>
          <div className="min-h-[100px] rounded-3xl border border-blue-200 bg-[#f8efe6] p-2 shadow-lg sm:min-h-[1200px] md:min-h-[1055px]">
            {recipe && (
              <div className="flex flex-col gap-3">
                <FoodDetailDefinationLarge
                  defination={recipe.name}
                  img={recipe.image}
                />
                <FoodDetailDefination
                  title={'Yemek Adı'}
                  defination={recipe.name}
                />
                <FoodDetailDefination
                  title={'Mutfak'}
                  defination={recipe.cuisine}
                />
                <FoodDetailDefination
                  title={'Kalori'}
                  defination={recipe.caloriesPerServing.toString()}
                />
                <FoodDetailDefination
                  title={'Hazırlanma Süresi'}
                  defination={recipe.prepTimeMinutes.toString()}
                />
                <FoodDetailDefination
                  title={'Pişme Süresi'}
                  defination={recipe.cookTimeMinutes.toString()}
                />
                <FoodDetailDefination
                  title={'Etiketleri'}
                  defination={recipe.tags.join(' , ')}
                />
                <FoodDetailDefination
                  title={'Yemek Türü'}
                  defination={recipe.mealType}
                />
                <FoodDetailDefination
                  title={'Zorluk'}
                  defination={recipe.difficulty}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-[65%] flex-col px-4">
        <div className="relative h-35">
          <div className="absolute top-8 left-1/4 -translate-x-1/2 -translate-y-1/2 transform text-center text-2xl font-bold text-orange-400">
            TCDD YEMEK TARİFLERİ
          </div>
          <UserInfo />
        </div>
        <div className="mt-8 grid grid-cols-2 rounded-3xl border border-blue-200 bg-[#f8efe6] p-2 shadow-lg sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          <button
            className={`rounded-full p-1 text-center transition-all ${
              activeTab === 'ingredients'
                ? 'bg-orange-400 text-white'
                : 'bg-[#f8efe6] text-gray-500'
            }`}
            onClick={() => setActiveTab('ingredients')}
          >
            İÇİNDEKİLER
          </button>

          <button
            className={`rounded-full p-1 text-center transition-all ${
              activeTab === 'recipe'
                ? 'bg-orange-400 text-white'
                : 'bg-[#f8efe6] text-gray-500'
            }`}
            onClick={() => setActiveTab('recipe')}
          >
            YEMEK TARİFİ
          </button>
        </div>

        <div className="mt-2 min-h-[1250px] rounded-3xl border border-blue-200 bg-[#f8efe6] p-2 shadow-lg sm:min-h-[1240px] md:min-h-[1000px]">
          <div className="min-h-[300px] rounded-3xl border border-blue-200 bg-[#f7f3ee] p-4 shadow-lg">
            {activeTab === 'ingredients' ? (
              <ul className="list-disc pl-5">
                {recipe && recipe.ingredients
                  ? recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))
                  : 'İçindekiler yükleniyor...'}
              </ul>
            ) : (
              <ul className="list-disc pl-5">
                {recipe && recipe.instructions
                  ? recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))
                  : 'Yemek tarifi yükleniyor...'}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
