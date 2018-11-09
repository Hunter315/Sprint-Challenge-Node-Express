const express = require("express");
const router = express.Router();
const actionModel = require("../data/helpers/actionModel");
router.use(express.json());
module.exports = router;

// ==== Action Routing============================================

// ----get all action information----------------
router.get("/", (req, res) => {
    //get request in db
    actionModel.get()
        .then(actions => {
            res.status(200).json(actions) 
        })
        .catch(err => {
            res.status(500).json({message: "The action information could not be retrieved"})
        })
});

// ----get all action information----------------