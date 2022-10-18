import { invariant } from '@remix-run/router';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Recipe } from '../domain';

export const RecipeRoute: FC<{ recipes: readonly Recipe[] }> = ({
  recipes,
}) => {
  const { id } = useParams();
  invariant(id, 'Recipe id is required in the params');
  const recipe = useMemo(() => recipes.find((recipe) => recipe.id === id), []);
  invariant(recipe, 'Recipe not found');

  return <RecipeScreen recipe={recipe} />;
};

interface RecipeScreenProps {
  recipe: Recipe;
}

const RecipeScreen: FC<RecipeScreenProps> = ({ recipe }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {recipe.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400">{recipe.description}</p>
      <dl className="space-y-4">
        <dt className="text-gray-600 dark:text-gray-400">Brewing method</dt>
        <dd className="text-gray-900 dark:text-white">{recipe.brewType}</dd>

        <dt className="text-gray-600 dark:text-gray-400">Grind size</dt>
        <dd className="text-gray-900 dark:text-white">{recipe.grindSetting}</dd>

        <dt className="text-gray-600 dark:text-gray-400">Brew Temperature</dt>
        <dd className="text-gray-900 dark:text-white">{recipe.temperature}</dd>

        <dt className="text-gray-600 dark:text-gray-400">Bloom time</dt>
        <dd className="text-gray-900 dark:text-white">{recipe.bloomTime}</dd>

        <dt className="text-gray-600 dark:text-gray-400">Brew time</dt>
        <dd className="text-gray-900 dark:text-white">{recipe.brewTime}</dd>

        <dt className="text-gray-600 dark:text-gray-400">Coffee</dt>
        <dd className="text-gray-900 dark:text-white">{recipe.coffeeName}</dd>
      </dl>
    </div>
  );
};
