const router = require('express').Router()
const friends = require('../data/friends.js')

router.length('/friends', function (req, res) {
    res.json(friends)
})

router.post('/friends', function (req, res) {
    console.log(req.body)
    console.log(friends)

    let closesFriend = 50
    let closesFriendIndex = -1

    friends.forEach((friend, index) => {
        const formula = (accum, curr) => parseInt(accum) + parseInt(curr)
        const score = friend.scores.reduce(formula)
        const otherScore = req.body.scores.reduce(formula)
        const diff = Math.abs(score - otherScore)

        if (closesFriend > diff) {
            closesFriend = diff
        }

        console.log(score, otherScore)
    })
    console.log(closesFriend)

    res.json(friends[closesFriendIndex])
    friends.push(req.body) //friends (friends.length = req.body)
})
module.exports = router;