import React, { useEffect, useState } from 'react'
import './App.css';
import Header from "./components/Header";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Explore from './components/Explore/Explore';
import PageNotFound from './components/PageNotFound';

import { ToastContainer } from 'react-toastify';
import { AuthUserProvider, useAuth } from './contexts/firebase/auth';
import MoviePage from './components/MovieDetailPage/MoviePage';
import PaymentPage from './components/Payment/PaymentPage';
import MyBookings from './components/MyBookings/MyBookings';
import WatchedMovies from './components/MyBookings/WatchedMovies/WatchedMovies';
import Loader from './components/Loader/Loader';
import BackToTop from './components/BackToTop/BackToTop';
import Profile from './components/Profile/Profile';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Footer from './components/Footer/Footer';

const App = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c43eafb6cfde3357615b65d291332480&page=${page}`
  // const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=c43eafb6cfde3357615b65d291332480&page=${page}`
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


  return !isLoading ? <Loader /> : (
    <>
      <AuthUserProvider>
        <ToastContainer theme='dark' />
        <Header />
        <hr className='mb-2' />
        <Routes>
          {/* <Route path='/search-movie' element={<SearchMovie />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

          <Route path='/' element={<Home data={data} page={page} setPage={setPage} />} />

          <Route path="/explore" element={<Explore />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="/movie/:movieId/:price" element={<PaymentPage />} />

          <Route path="/user/bookings" >
            <Route index element={<MyBookings />} />
            <Route path="/user/bookings" element={<MyBookings />} />
            {/* <Route path="watched-movies" element={<WatchedMovies />} /> */}
          </Route>

          <Route path="/user-profile" element={<Profile />} />
          <Route path="/user/bookings" element={<MyBookings />} />
          <Route path="user/bookings/watched-movies" element={<WatchedMovies />} />

          <Route path='/*' element={<PageNotFound />} />

          {/* <Route path='/' element={<Loader />} /> */}
        </Routes>
        <Footer />
      </AuthUserProvider>
      <BackToTop />
    </>
  )
}

export default App;