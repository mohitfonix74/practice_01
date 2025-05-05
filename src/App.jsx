import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Props from './components/Props'
import Home from './components/Home'
import Employee_list from './components/Employee_list'
import Form from './components/Form'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Mouse from './components/Mouse'
import Responsive from './components/Responsive'
import Grid from './components/Grid'
import Fonix from './components/Fonix'
import Jspractice from './components/Jspractice'
import Reactprctice from './components/Reactprctice'
const App = () => {
  return (
    <Router>  
      <Navbar value={"mohit kumawat"} />

      <Routes>
        <Route path='/' element ={<Home/>}/>
      <Route path='/props' element={<Props name = "Mohit" city= "jaipur"/>}/>
      <Route path='/employee_list' element ={<Employee_list/>}/>
      <Route path='/form' element ={<Form/>}/>
      <Route path='/counter' element ={<Counter/>}/>
      <Route path='/todo' element ={<Todo/>}/>
      <Route path='/mouse' element ={<Mouse/>}/>
      <Route path='/grid' element ={<Grid/>}/>
      <Route path='/js' element ={<Jspractice/>}/>
      <Route path='/responsive' element ={<Responsive/>}/>
      <Route path='/fonix' element = {<Fonix label="Progress" value1={70}/>} />
      <Route path='/reactpractice' element ={<Reactprctice/>}/>





      </Routes>
      
    </Router>
  )
}

export default App