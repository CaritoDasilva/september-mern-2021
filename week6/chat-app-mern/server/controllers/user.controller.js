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

module.exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.deleteOne({_id: id});
        return res.json({msg: 'Se ha borrado usuario exitosamente', user: deletedUser});

    } catch(err) {
        return res.status(500).json({error: err});         
    }

}

module.exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findOneAndUpdate({_id: id}, req.body, {new: true});
        return res.json({msg: 'Se ha actualizado correctamente', updatedUser })
    } catch(err) {
        return res.status(500).json({error: err});
    }
}