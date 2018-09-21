const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    if (req.isAuthenticated) {
        const prescription = req.body;
        console.log(prescription);
        const queryText = `INSERT INTO "rx"
                            ("user_id","med_name","symptom","dose","regiment") 
                            VALUES ($1, $2, $3, $4, $5);`;
        pool.query(queryText, [req.user.id, prescription.med_name, prescription.symptom,
                                    prescription.dose, prescription.regiment])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Prescription POST Failed', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        const qText = `SELECT "rx".*, 
                            "user"."username" 
                            FROM "rx" JOIN "user" 
                            ON "user"."id" = "rx"."user_id"
                             WHERE "user"."id" = $1;`;
        pool.query(qText, [req.user.id]).then((results) => {
           console.log('Here', results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('GET RX failed', error);
            res.sendStatus(500);
        });

    } else {
        res.sendStatus(403);
    }
});


module.exports = router;