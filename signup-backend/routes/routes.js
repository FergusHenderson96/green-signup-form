const express = require ('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')


router.post('/signup', (req, res) => {
    const signedUpUser = new signUpTemplateCopy({
        email: req.body.email
    })
    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router