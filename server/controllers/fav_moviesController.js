addFavMovies = async (req, res) => {
    const db = req.app.get('db');
    const { movie_id, movie_title, movie_overview, movie_poster, movie_rating } = req.body;
    const { id } = req.session.user;

    try {
        await db.add_fav_movie(id, movie_id, movie_title, movie_overview, movie_poster, movie_rating);
    } catch (err) {
        return console.log(err)
    }

    const userFavMovies = await db.get_user_fav_movies(id)
    res.status(200).json(userFavMovies);
}

module.exports = {
    addFavMovies
}