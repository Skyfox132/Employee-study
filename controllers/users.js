const { prisma } = require('../prisma/prisma-client')
const bcrypt = require('bcrypt')
// const { log } = require('debug/src/browser')
const jwt = require('jsonwebtoken')


// @route /api/users/login

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        
        if (!email || !password) {
            return res.status(400).json( {massage: "Пожалуйста проверьте свои данные"} )
        }
        const user = await prisma.user.findFirst( {
            where: {
                email,
            }
        } )
        const secret = process.env.JWT_Secret
        // pass in reg "23123" = "password token jwt"
        const isPasswordCorrect = user && (await bcrypt.compare(password, user.password))
        if(user && isPasswordCorrect && secret) {
            res.status(200).json( { 
                Id: user.id,
                email: user.email,
                name: user.userName,
                token: jwt.sign({id: user.id}, secret, {expiresIn: "30d"}),
            })
        }else {
            return res.status(400).json( {message: "данные не верны"})
        }
    } catch(error) {
        res.status(400).json({message: "Произошла ошибка"})
    }

}
// @route POST /api/users/register
// @desk Регистрация
// @access public
const register = async (req, res) => { 
    try {
        const {email, password, name}= req.body
        res.json({
            email: email,
            name: name,
            password: password,
        })
        if (!email || !password || !name) {
            return res.status(400).json( {message: "Вы не ввели нужные данные для регистарции"} )
        }
    
        const registeredUser = await prisma.user.findFirst({
            where: {
                email,
            }
        })
    
        if (registeredUser) {
            return res.send(400).json({ massage: "уже зарегистрированный пользователь"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
    
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            }
        })
        const secret = process.env.JWT_Secret
        if (user && secret) {
            res.status(201).json({
                id: user.id,
                email: user.email,
                name: user.name,
                token: jwt.sign({id: user.id}, secret, {expiresIn: "30d"})
            })
        } else {
            return res.status(400).json({massage: "Не удалось создать пользователя"})
        }
    } catch(error) {
        res.status(400).json({message: "Произошла ошибка"})
    }
}


// @route GET /api/user/current
// @desc текущий пользователь
// @access private
const current = async (req, res) => {
    res.status(200).json({...req.user, password: ""})
}

module.exports = {
    login,
    register,
    current
}