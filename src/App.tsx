import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from './components/Navigation';
import { RecipesScreen } from './components/RecipesScreen';
import { Recipe } from './domain';
import { HomeScreen } from './components/HomeScreen';
import { RecipeRoute } from './components/RecipeScreen';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'V60 by James Hoffman',
    description: 'A simple recipe for a V60 coffee',
    brewType: 'V60',
    coffeeName: 'Bocca Soulmate (Medium Roast)',
    grindSetting: 'Medium',
    totalWater: '250',
    coffee: '30g',
    temperature: '92',
    bloomTime: '00:30',
    bloomWater: '60g',
    brewTime: '3:00',
    notes: 'This is a great recipe for a V60 coffee',
  },
  {
    id: '2',
    title: 'Aeropress by James Hoffman',
    description: 'A simple recipe for an Aeropress coffee',
    brewType: 'Aeropress',
    coffeeName: 'Bocca Soulmate (Medium Roast)',
    grindSetting: 'Medium to fine',
    totalWater: '200',
    coffee: '20g',
    temperature: '92',
    bloomTime: '0',
    bloomWater: '0',
    brewTime: '2:00',
    notes: 'No need to let the coffee bloom, just stir, wait and press',
  },
];

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <main className="container p-4 mx-auto">
          <Routes>
            <Route path="" element={<HomeScreen />} />
            <Route path="recipes">
              <Route path="" element={<RecipesScreen recipes={recipes} />} />
              <Route path=":id" element={<RecipeRoute recipes={recipes} />} />
            </Route>
          </Routes>
        </main>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
