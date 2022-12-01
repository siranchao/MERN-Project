


//@controller: register a new user
//@route POST /api/users
//@access Public
const registerUser = (req, res) => {
    res.json({
        message: 'New user registed'
    })
}

//@controller: Authenticate a new user
//@route POST /api/users/login
//@access Public
const loginUser = (req, res) => {
    res.json({
        message: 'User login authenticated'
    })
}


//@controller: Get user data
//@route GET /api/users/me
//@access Public
const getMe = (req, res) => {
    res.json({
        message: 'Get user data'
    })
}

module.exports = { registerUser, loginUser, getMe } 