UPDATE users
SET username = $2, password = $3, name = $4
WHERE user_id = $1
RETURNING *;