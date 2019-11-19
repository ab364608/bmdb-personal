const bcrypt = require('bcryptjs');

const editUserPassword = async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { password } = req.body;
    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const editedPassword = await db.edit_user_password([id, hashedPassword]);
    
    res.status(200).json(editedPassword);
}

const editUsersName = (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { name } = req.body;

    const updateUsersName = db.edit_users_name(id, name);
    res.status(200).json(updateUsersName)
}

const editUsername = (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { username } = req.body;

    const updateUsername = db.edit_username(id, username);
    res.status(200).json(updateUsername)
}

const updateProfileImg = async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { img } = req.body;

    const updateImg = await db.update_profile_img(id, img);
    res.status(200).json(updateImg);
}

const getProfileImg = async (req, res)  => {
    const db = req.app.get('db');
    const { id } = req.session.user;

    const getProfileImg = await db.get_profile_img(id);
    res.status(200).json(getProfileImg);
}

module.exports = {
    editUserPassword,
    updateProfileImg,
    getProfileImg,
    editUsersName,
    editUsername
}