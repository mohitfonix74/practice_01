import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Props from './components/Props';
import Home from './components/Home';
import Employee_list from './components/Employee_list';
import Form from './components/Form';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Mouse from './components/Mouse';
import Responsive from './components/Responsive';
import Grid from './components/Grid';
import Fonix from './components/Fonix';
import Jspractice from './components/Jspractice';
import Reactprctice from './components/Reactprctice';
import Buttoncomp from './components/Buttoncomp';
import Inputcomp from './components/Inputcomp';
import { ToastContainer } from 'react-toastify';
import Apiform from './components/Apiform';
import Reactres from './components/Reactres';
import Carddaisy from './components/Carddaisy';
import Cardskeleton from './components/Cardskelton';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar value={"Mohit Kumawat"} /> {/* Navbar is displayed here */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/props' element={<Props name="Mohit" city="Jaipur" />} />
          <Route path='/employee_list' element={<Employee_list />} />
          <Route path='/form' element={<Form />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/mouse' element={<Mouse />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/js' element={<Jspractice />} />
          <Route path='/responsive' element={<Responsive />} />
          <Route path='/fonix' element={<Fonix label="Progress" value1={70} />} />
          <Route path='/reactpractice' element={<Reactprctice />} />
          <Route path='/input' element={<Inputcomp />} />
          <Route path='/button' element={<Buttoncomp />} />
          <Route path='/apiform' element={<Apiform />} />
          <Route path='/reactres' element={<Reactres />} />
          <Route path='/carddaisy' element={<Carddaisy />} />
          <Route path='/cardskelton' element={<Cardskeleton />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </AuthProvider>
  );
};

export default App;
