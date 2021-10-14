const User = require('../models/user.model');

module.exports.createUser = (req, res) => {
    const { body } = req;
    User.create(body)
        .then(user => res.json({ user }) )
        .catch(err => {
            console.log("🚀 ~ file: user.controller.js ~ line 8 ~ err", err)
            return res.status(500).json({error: err})
        })
};