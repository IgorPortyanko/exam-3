
import { Routes, Route } from "react-router";
import Layout from './components/layout/Layout'
import HomePage from "./components/homepage/HomePage";
import PizzaPage from "./components/pizza/PizzaPage";
import BurgerPage from "./components/burger/BurgerPage";
import RollsPage from "./components/rolls/RollsPage";
import SetsPage from "./components/sets/SetsPage";
import SushiPage from "./components/sushi/SushiPage";
import PromoPage from "./components/promo/PromoPage";
import DeliveryPage from "./components/delivery/DeliveryPage";
import ContactsPage from "./components/contacts/ContactsPage";
import AuthPage from "./components/auth/AuthPage";
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
          <Route path='/promo' element={<PromoPage/>}></Route>
          <Route path='/delivery' element={<DeliveryPage/>}></Route>
          <Route path='/contacts' element={<ContactsPage/>}></Route>
          <Route path='/auth' element={<AuthPage/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
