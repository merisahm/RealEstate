import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

import './custom.css'
import PropertySale from './pages/PropertySale';
import PropertyDetails from './pages/PropertyDetails';
import UserDetails from './pages/UserDetails';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import UserProfile from './pages/UserProfile';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Route exact path='/' component={Home} />
            <Route exact path='/oglasi' component={PropertySale} />
            <Route exact path='/oglasi/:id' component={PropertyDetails} />
            <Route exact path='/korisnik/id' component={UserDetails} />
            <Route exact path='/profile' component={UserProfile} />
          </AuthContextProvider>
        </ThemeContextProvider>
      </Layout>
    );
  }
}
