const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.json({ user })
        
    } catch(err) {
        return res.status(500).json({ errors: err })
    }
}

module.exports.login = async (req, res) => {
    try {
        console.log("🚀 ~ file: server.js ~ line 9 ~ process.env", process.env.SECRET_KEY)

        const user = await User.findOne({ email: req.body.email });
        console.log("🚀 ~ file: user.controllers.js ~ line 18 ~ module.exports.login= ~ user", user)
        if(!user) {
            return res.status(403).json({ msg: "Credenciales inválidas1" })
        } else {
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            if(isValidPassword) {
                const newJWT = jwt.sign({
                    _id: user._id
                }, process.env.SECRET_KEY)
              return res
                .cookie("usertoken", newJWT, process.env.SECRET_KEY, {
                  httpOnly: true
                })
                .json({ msg: "success!" });
            } else {
                return res.status(403).json({ msg: "Credenciales inválidas2" })

            }
        }

    } catch(err) {
        console.log("🚀 ~ file: user.controllers.js ~ line 39 ~ module.exports.login= ~ err", err)
        return res.status(403).json({ msg: "Credenciales inválidas3" })
        
    }
}

module.exports.saludo = (_, res) => {
    try {
        return res.json({msg: 'Hola chiquillos están validados :)'})

    } catch(err) {
        return res.status(403).json({msg: 'Regrese por donde entró usted no ha sido validado'})
    }
}

module.exports.logout = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user) {
            res.clearCookie('usertoken');
            return res.json({ user });
        }

    } catch(err) {
        return res.status(500).json({msg: 'Ha fallado todooooo!'})
    }
}