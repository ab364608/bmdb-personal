import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/Sign Up/SignUp';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Watchlist from './components/Watchlist/Watchlist';
import Movies from './components/Movies/Movies';
import TVSeries from './components/TV Series/TVSeries';
import NavBar from './components/NavBar/Navbar';
import MoviesComingSoon from './components/Movies Coming Soon/MoviesComingSoon';
import MostPopularMovies from './components/Most Popular Movies/MostPopularMovies';
import TopRatedMovies from './components/Top Rated Movies/TopRatedMovies';
import NowShowing from './components/Now Showing/NowShowing';
import TopRatedTV from './components/Top Rated TV/TopRatedTV';
import MostPopularTV from './components/Most Popular TV/MostPopularTV';
import TVAiringToday from './components/TV Airing Today/TVAiringToday';

export default (
    <>
        <NavBar />
        <Switch>
            <Route component={Home} exact path='/' />
            <Route component={SignUp} path='/signup' />
            <Route component={Profile} path='/profile/:username' />
            <Route component={Watchlist} path='/watchlist' />
            <Route component={Movies} exact path='/movies' />
            <Route component={MoviesComingSoon} path='/movies/comingsoon' />
            <Route component={MostPopularMovies} path='/movies/popular' />
            <Route component={TopRatedMovies} path='/movies/toprated' />
            <Route component={NowShowing} path='/movies/nowshowing' />
            <Route component={TVSeries} exact path='/tv' />
            <Route component={TopRatedTV} path='/tv/toprated' />
            <Route component={MostPopularTV} path='/tv/popular' />
            <Route component={TVAiringToday} path='/tv/airing' />
        </Switch>
    </>
)