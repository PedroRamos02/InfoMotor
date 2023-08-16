import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Consumo from './components/Consumo'
import PaginaBase from './components/PaginaBase'
import TrocaDeOleo from './components/TrocaDeOleo'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route path='/Consumo' element={<Consumo />}></Route>
          <Route path='/TrocaDeOleo' element={<TrocaDeOleo />}></Route>
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
