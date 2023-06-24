import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import Layout from './Component/Layout'

import Finanace from './Pages/Finanace';
import Activity from './Pages/Activity';
import Home from './Pages/Home';

//The routing Page .

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout/>}>
      <Route path="/home" element={<Home/>}  />
      <Route path="/finance" element={<Finanace/>}  />
      <Route path="/activity" element={<Activity/>}  />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
