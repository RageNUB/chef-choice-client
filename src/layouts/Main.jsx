import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>
            }
            <Footer></Footer>
            <ToastContainer></ToastContainer>
            <Modal></Modal>
        </div>
    );
};

export default Main;