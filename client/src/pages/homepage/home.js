import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import RegistrationPage from '../RegistrationPage';

const Home = () => {
    return(
        <>
        <Header/>
        <main className='h-screen'>
        <Loader/>
        </main>
        <Footer/>
      

        </>
    )
}

export default Home;