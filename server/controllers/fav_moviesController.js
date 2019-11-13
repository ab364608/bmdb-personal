addFavMovies = async (req, res) => {
    const db = req.app.get('db');
    const { movie_id, movie_title, movie_overview, movie_poster, movie_rating } = req.body;
    const { id } = req.session.user;

    try {
        await db.add_fav_movie(id, movie_id, movie_title, movie_overview, movie_poster, movie_rating);
    } catch (err) {
        return console.log(err)
    }

    const favMovies = await db.fav_movies(id)
    res.status(200).json(favMovies);
}

getUsersFavMovies = async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.session.user;

    const usersFavMovies = await db.get_user_fav_movies(id);
    res.status(200).json(usersFavMovies);
}

deleteFromWatchlist = async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { id: user_id } = req.session.user;
    
    await db.delete_from_watchlist(id);
    
    const usersFavMovies = await db.get_user_fav_movies(user_id);
    res.status(200).json(usersFavMovies);
}

module.exports = {
    addFavMovies,
    getUsersFavMovies,
    deleteFromWatchlist
}