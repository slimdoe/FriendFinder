const path = require("path")
const router = require('express').Router()

router.get('/survey', function(req, res){
  res.sendFile(path.join(__dirname, "../public/survey.html"));
})

router.get("*",function(req, res){
  res.sendFile(path.join(__dirname, "../public/home.html"));
})

module.exports = router;