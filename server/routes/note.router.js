const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    if (req.isAuthenticated) {
        const note = req.body;
        console.log(note);

        const queryText = `INSERT INTO "notes"
                            ("user_id","note") 
                            VALUES ($1, $2);`;
        pool.query(queryText, [req.user.id, note.note])
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
//Get notes by signed in user
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        const qText = `SELECT "notes".*, 
                        "user"."id" as user_id, 
                        "user"."username" 
                        FROM "notes" JOIN "user" 
                        ON "user"."id" = "notes"."user_id"
                        WHERE "user"."id" = $1;`;
        pool.query(qText, [req.user.id]).then((results) => {
           console.log('here', results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('GET todo/all failed', error);
            res.sendStatus(500);
        });

    } else {
        res.sendStatus(403);
    }
});

module.exports = router;