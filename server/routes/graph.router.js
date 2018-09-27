const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        const qText = `SELECT "daily_checkin".*,
                        "user"."username"
                        FROM "daily_checkin"
                        JOIN "user" 
                        ON "user"."id" = "daily_checkin"."user_id"
                        WHERE "user"."id" = $1;`;
        pool.query(qText, [req.user.id]).then((results) => {
           console.log('Here', results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('GET graph data failed', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;