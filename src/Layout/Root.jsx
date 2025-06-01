import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import TopScroll from '../Components/TopScroll/TopScroll';

const Root = () => {
    return (
        <div>
            <TopScroll/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;