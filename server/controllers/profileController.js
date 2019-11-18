const bcrypt = require('bcryptjs');

const editUserProfile = async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { username, password, name } = req.body;
    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const editedProfile = await db.edit_user_info([id, username, hashedPassword, name]);
    
    res.status(200).json(editedProfile);
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
    editUserProfile,
    updateProfileImg,
    getProfileImg
}