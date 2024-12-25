import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import LayOut from './Componests/LayOut/LayOut';
import { QueryClient,QueryClientProvider} from '@tanstack/react-query';
import NotFound from './pages/NotFound/NotFound';
function App() {
let client = new QueryClient();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayOut/>,
      children: [
        { path: '', element: <Home/> },
        { path: '/news', element: <News /> },
        {path : '*',element:<NotFound/>}
      ],
    },
  ]);

  return(
    // qery client provider for every route 
    <QueryClientProvider client={client}>
     <RouterProvider router={router} />
    </QueryClientProvider>
  ) ;
}

export default App;
