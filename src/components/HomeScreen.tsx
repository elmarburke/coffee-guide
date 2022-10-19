import { FC } from 'react';
import { Link } from 'react-router-dom';

export const HomeScreen: FC = () => {
  return (
    <div className="mx-auto mt-8 max-w-lg text-center">
      <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential'>
        Coffee Guide
      </h1>
      <h2 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        A guide to brewing the perfect cup of coffee at home.
      </h2>

      <p className="mb-6 font-light text-gray-500 dark:text-gray-400">
        This is a collection of recipes for brewing coffee at home. Use the best
        beans you can find, and follow the recipes to the letter. Enjoy your
        coffee!
      </p>

      <div>
        <Link
          to="/recipes"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore the recipes
        </Link>
      </div>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        You can access the source code for this project on{' '}
        <a
          href="https://github.com/elmarburke/coffee-guide"
          className="text-blue-700 hover:underline dark:text-blue-600"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/elmarburke/coffee-guide
        </a>
        . You can check out the code on a GitHub CodeSpace, download the code,
        or if you prefer to work in your browser, you can open it in{' '}
        <a
          href="https://stackblitz.com/github/elmarburke/coffee-guide"
          className="text-blue-700 hover:underline dark:text-blue-600"
          rel="noopener noreferrer"
          target="_blank"
        >
          StackBlitz
        </a>
        .
      </p>
    </div>
  );
};
