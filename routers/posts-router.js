const express = require("express")
const router = express.Router()
const postsJson = require("../data/posts")


// index
router.get("/", (req, res) => {
    res.json(postsJson)
})

// show
router.get("/:id", (req, res) => {
    res.json(postsJson[req.params.id])})

// store
router.post("/", (req, res) => {
    res.send("Creazione nuovo post")
})

// update
router.put("/:id", (req, res) => {
    res.send(`Modifica integrale del post ${req.params.id}`)
})

// modify
router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`)})

// destroy
router.delete("/:id", (req, res) => {
    res.send(`Eliminazione del post ${req.params.id}`)})


module.exports = router