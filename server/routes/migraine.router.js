const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    if (req.isAuthenticated) {
        const queryText = `INSERT INTO "migraine_epi"
                            ("user_id") 
                            VALUES ($1);`;
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Daily Checkin POST Failed', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});


module.exports = router;