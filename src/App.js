import React, { useEffect, useState } from 'react'
import './App.css';
import Header from "./components/Header";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
// import SearchMovie from './components/SearchMovie';
import { ToastContainer } from 'react-toastify';
import { AuthUserProvider, useAuth } from './contexts/firebase/auth';



const App = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c43eafb6cfde3357615b65d291332480&page=${page}`
  useEffect(() => {
    getData();

    // eslint-disable-next-line
  }, [page])

  const getData = async () => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
      // console.log(result);
      // console.log(result.results);
      // console.log(result.page);
    } catch (error) {
      console.error('Error from getData', error);
    }

  };
  const navigate = useNavigate();

  const { authUser, isLoading } = useAuth();

  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [authUser, isLoading]);


  return (
    <>
      <AuthUserProvider>
        <ToastContainer />
        <Header />
        <hr className='mb-2' />
        <Routes>
          <Route path='/' element={<Home data={data} page={page} setPage={setPage} />} />
          {/* <Route path='/search-movie' element={<SearchMovie />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />

        </Routes>
      </AuthUserProvider>
    </>
  )
}

export default App;