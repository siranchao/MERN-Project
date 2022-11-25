//use npm package 'asyncHandler' replace try(..)catch(..) block 
const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//@controller: get goals
//@route GET /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json({
        message: `Get Goals`,
        data: goals
    })
})

//@controller: set a goal
//@route POST /api/goals
//@access private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }

    res.status(200).json({
        message: `Create a Goal`
    })
})

//@controller: update a goal
//@route PUT /api/goals/:id
//@access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update a Goal: ${req.params.id}`
    })
})

//@controller: delete a goal
//@route DELETE /api/goals/:id
//@access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete a Goal: ${req.params.id}`
    })
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}