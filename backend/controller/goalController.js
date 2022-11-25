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

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json({
        message: `Goal Created`,
        data: goal
    })
})

//@controller: update a goal
//@route PUT /api/goals/:id
//@access private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json({
        message: `Update a Goal: ${req.params.id}`,
        data: updatedGoal
    })
})

//@controller: delete a goal
//@route DELETE /api/goals/:id
//@access private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({
        message: `Goal is Deleted: ${req.params.id}`
    })
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}