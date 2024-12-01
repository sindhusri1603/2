const express = require('express');
const formRoutes = require('./formRoutes'); 

const router = express.Router();

// POST route for form submission
router.post('/submit', (req, res) => {
    const formData = new FormData(req.body);
    formData.save()
        .then(() => res.json({ message: 'Data saved successfully!' }))
        .catch(err => res.status(400).json({ error: 'Error saving data: ' + err.message }));
});

module.exports=router;
