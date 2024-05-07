import "./app.css"
import Home from './state/components/home'
import Play from './state/components/play'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/play' element={<Play/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
