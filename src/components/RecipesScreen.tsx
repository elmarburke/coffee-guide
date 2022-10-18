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
