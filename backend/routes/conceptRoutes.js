const express = require('express');
const DSAConcept = require('../models/DSAConcept');
const router = express.Router();

router.get('/:title', async (req, res) => {
    try {
        const concept = await DSAConcept.findOne({ title: req.params.title });
        res.json(concept);
    } catch (error) {
        res.status(500).json({ error: "Concept not found" });
    }
});

module.exports = router;
