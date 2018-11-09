const express = require("express");
const router = express.Router();
const projectModel = require("../data/helpers/projectModel");

module.exports = router;
// ====Project Model Routing===================================

// ---- get all projects ----------------
router.get("/", (req, res) => {
    projectModel.get()
        // When successful
        .then(projects => {
            res.status(200).json(projects);
        })
        // Catch an error
        .catch(err => {
            console.log("error", err);
            res
                .status(500)
                .json({ error: "The project information could not be retrieved"});
        });
});

// ---- get project by id ----------------
router.get("/:id", (req, res) => {
    projectModel.get(req.params.id)
        // When successful
        .then(projects => {
            res.status(200).json(projects);
        })
        // Catch an error
        .catch(err => {
            console.log("error", err);
            res
                .status(500)
                .json({ error: "The project information could not be retrieved"});
        });
});


// ---- insert (create) a project ----------------
router.post("/", (req, res) => {
    // Maximum string length of 128 requirement on name
    if (req.body.name.length < 129) {
        //insert by passing resource object and add to db
        projectModel.insert(req.body)
            .then(projects => {
                //return newly created resource
                res.status(200).json(projects);
            })
            //catch error
            .catch( err => {
                console.log("error", err);
                res
                    .status(500)
                    .json({message: "The project information could not be posted"})
            })
    }
    //
})

// ---- update an existing project by id ----------------
router.put("/:id", (req, res) => {
    //need id to pass and 'changes' being made
    const { id } = req.params;
    const { name, description, completed } = req.body;
    projectModel
        .update(id, {name, description, completed})
        .then(isUpdated => {
            if(!isUpdated) {
                res.status(400).json({error: `The post with id ${id} could not be updated`})
            } else {
                res.status(200).json(isUpdated)
            }
        })
})


// --------------------

// --------------------