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

// ----get action information by id----------------
router.get("/:id", (req, res) => {
    const { id } = req.params;
    actionModel.get(id)
        .then(projectActions => {
            if (!projectActions) {
                res.status(404).json({error: `There is No Project Actions with the Id ${id}`})
            }else {
                res.status(200).json(projectActions)
            }
        })
        .catch((projectActions) => {
            if (projectActions) {
                res.status(404).json({error: `There is No Project Actions with the Id ${id}`})
            }else {
            res.status(500).json({error: `Could Not Retrieve Actions from Id ${id}`})
            }
        })
});

// ----insert (create) an action----------------
server.post('/api/actions',(req, res) => {
    const {project_id, description, notes, completed} = req.body;
    if (!project_id) {
        res.status(400).json({error: `Need to Provide Project Id`})
    } else if (!description.substr(1,128)) {
        res.status(400).json({error: `Need to Provide Description Less than 128 Characters`})
    } else if (!notes) {
        res.status(400).json({error: `Need to Provide Notes`})
    } else {
        actionDb
        .insert({project_id, description, notes, completed})
        .then(newAction => {
            res.status(200).json(newAction)
        })
        .catch(() => {
            res.status(500).json({error: `Could Not Add New Action`})
        })
    }
});
// ----update an action----------------

// ----delete an action----------------