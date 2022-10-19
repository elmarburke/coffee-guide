import { Card } from 'flowbite-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../domain';

interface RecipeProps {
  recipes: RecipeCardProps['recipe'][];
}

export const RecipesScreen: FC<RecipeProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

interface RecipeCardProps {
  recipe: Pick<Recipe, 'title' | 'id' | 'description'>;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Card>
      <Link to={`${recipe.id}`} className="space-y-2">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          {recipe.title}
        </span>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {recipe.description}
        </p>
      </Link>
    </Card>
  );
};

const RecipeCardSkeleton: FC = () => (
  <Card>
    <div role="status" className="animate-pulse space-y-2">
      <div className="flex items-center space-x-2 w-full">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div className="flex items-center space-x-2 w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-6"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-8"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-5"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-7"></div>
      </div>

      <div className="sr-only">Loading...</div>
    </div>
  </Card>
);

export const RecipesScreenSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <RecipeCardSkeleton />
      <RecipeCardSkeleton />
      <RecipeCardSkeleton />
      <RecipeCardSkeleton />
    </div>
  );
};
