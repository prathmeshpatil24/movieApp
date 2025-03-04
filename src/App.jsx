import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ExplorePage from './pages/ExplorePage';
import SearchPage from './pages/SearchPage';
import Footer from './components/Footer';
import Error from './components/Error';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/movieSlice';

function App() {
  const dispatch = useDispatch();

  // Fetch trending data
  const fetchTrandingData = async () => {
    try {
      const response = await axios.get('/trending/all/day', {
        params: {
          api_key: import.meta.env.VITE_ACCESS_TOKEN, // API key method
        },
      });
      //console.log('Response data:', response.data);
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
  };

  // Fetch trending data image
    const fetchConfigurationData = async () => {
      try {
        const response = await axios.get('/configuration', {
          params: {
            api_key: import.meta.env.VITE_ACCESS_TOKEN,
          },
        });
       // console.log('Response data:', response.data);
       dispatch(setImageURL(response.data.images.secure_base_url+"original"));

      } catch (error) {
        console.log('Error:', error.response ? error.response.data : error.message);
        
      }
    }


  useEffect(()=>{
    fetchTrandingData();
    fetchConfigurationData();
  },[]);

  return (
    <>
      <div>
        <NavBar></NavBar>{/* NavBar is now within the Router context */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer></Footer>
      </div>
    </>
  )
}

export default App
