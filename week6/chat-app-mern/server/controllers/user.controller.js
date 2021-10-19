const User = require('../models/user.model');

module.exports.createUser = (req, res) => {
    const { body } = req;
    User.create(body)
        .then(user => res.json({ user }) )
        .catch(err => {
            if(err?.name === 'ValidationError') {
                console.error(Object.values(err.errors).map(val => val.message))
                const errors = Object.values(err.errors).map(val => val.message);
                return res.status(500).json({errors: errors})

            }
            console.log("🚀 ~ file: user.controller.js ~ line 8 ~ err", err)
        })
};

module.exports.getAllUsers = async (req, res) => {
    try {
        const usersList = await User.find();
        return res.json({ usersList });

    } catch(err) {
        return res.status(500).json({error: err});
    }
}

module.exports.getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.json({ user });

    } catch(err) {
        return res.status(500).json({error: err});
    }
}