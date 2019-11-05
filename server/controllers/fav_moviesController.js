addFavMovies = async (req, res) => {
    const db = req.app.get('db');

    const addToWatchlist = await db.add_fav_movies(user_id, movie_id)
}