const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    if (req.isAuthenticated) {
        const queryText = `WITH first_ins as (INSERT INTO "migraine_epi" ("user_id")
                            Values ($1) RETURNING id, user_id)
                            INSERT INTO "migraine_loc" ("migraine_id", "user_id")
                            VALUES ((SELECT "id" FROM first_ins), (SELECT "user_id" From first_ins));`;
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