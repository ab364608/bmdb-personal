const bcrypt = require('bcryptjs');

const editUserProfile = async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params
    const { username, password, name } = req.body
    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const editedProfile = await db.edit_user_info([id, username, hashedPassword, name]);
    
    res.status(200).json(editedProfile)
}

const deleteUserProfile = async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    const deletedUser = await db.delete_user(id);
    res.status(200).json(deletedUser);
}

module.exports = {
    editUserProfile,
    deleteUserProfile
}