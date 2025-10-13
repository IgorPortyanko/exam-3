
import { Routes, Route } from "react-router";
import Layout from './components/layout/Layout'
import HomePage from "./components/homepage/HomePage";
import PizzaPage from "./components/pizza/PizzaPage";
import BurgerPage from "./components/burger/BurgerPage";
import RollsPage from "./components/rolls/RollsPage";
import SetsPage from "./components/sets/SetsPage";
import SushiPage from "./components/sushi/SushiPage";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index path='/' element={<HomePage/>}></Route>
          <Route path='/pizza' element={<PizzaPage/>}></Route>
          <Route path='/burger' element={<BurgerPage/>}></Route>
          <Route path='/rolls' element={<RollsPage/>}></Route>
          <Route path='/sets' element={<SetsPage/>}></Route>
          <Route path='/sushi' element={<SushiPage/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
