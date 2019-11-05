import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/Sign Up/SignUp';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import FavMovies from './components/Fav Movies/FavMovies';
import FavTV from './components/Fav TV/FavTV';
import Movies from './components/Movies/Movies';
import TVSeries from './components/TV Series/TVSeries';
import NavBar from './components/NavBar/Navbar';

export default (
    <>
        <NavBar />
        <Switch>
            <Route component={Home} exact path='/' />
            <Route component={SignUp} path='/signup' />
            <Route component={Profile} path='/profile/:username' />
            <Route component={FavMovies} path='/favs/movies' />
            <Route component={FavTV} path='/favs/tv' />
            <Route component={Movies} path='/movies' />
            <Route component={TVSeries} path='/tv' />
        </Switch>
    </>
)