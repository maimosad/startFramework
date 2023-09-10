import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';

class Layout extends Component {
    render() {
        return <>
        <Header/>
        <Outlet></Outlet>
<Footer/>
        
        </>
    }
}

export default Layout;