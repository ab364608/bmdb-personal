SELECT fm.fav_movies_id, fm.movie_id, fm.movie_title, fm.movie_overview, fm.movie_poster, fm.movie_rating FROM user_fav_movies AS fm
INNER JOIN users AS u ON u.user_id = fm.user_id
WHERE fm.user_id = $1;