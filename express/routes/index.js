var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (request, response, next) {
  return next({
    message: "barlus",
    status: 403,
  });
  // return res.json({
  //   title: "Barlus axpernerin",
  //   axperner: "Davo,Mko, Hakob",
  // });
  // res.render("index", {
  //   title: "Barlus axpernerin",
  //   axperner: "Davo,Mko, Hakob",
  // });
});

module.exports = router;
