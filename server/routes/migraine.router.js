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
                console.log('Migraine Failed to log', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.put('/loc', (req, res) => {
    if (req.isAuthenticated) {
        const loc = req.body;
        //console.log(loc); 
        const queryText = `UPDATE "migraine_loc" SET "back_lower" = $1, "back_mid" = $2,"back_upper" = $3, "forehead_center" = $4, "forehead_left" = $5, 
                                                     "forehead_right" = $6, "neck_left" = $7, "neck_right" = $8, "neck_spine" = $9,"scalp_left" = $10, 
                                                     "scalp_right" = $11, "shoulder_left" = $12, "shoulder_right" = $13, "skull" = $14, "temple_left" = $15, "temple_right" = $16 
                            WHERE "migraine_loc"."migraine_id" IN (SELECT MAX("migraine_id") FROM "migraine_loc");`;
        pool.query(queryText, [loc.back_lower, loc.back_lower, loc.back_upper, loc.forehead_center, loc.forehead_left, loc.forehead_right, loc.neck_left, loc.neck_right, loc.neck_spine, loc.scalp_left, loc.scalp_right, loc.shoulder_left, loc.shoulder_right, loc.skull, loc.temple_left, loc.temple_right])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Migraine Locations Failed to log', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.put('/sev', (req, res) => {
    if (req.isAuthenticated) {
        const data = req.body;
        //console.log(loc); 
        const queryText = `UPDATE "migraine_epi" SET "severity" = $1, "notes" = $2 WHERE "id" IN (SELECT MAX("id") FROM "migraine_epi");`;
        pool.query(queryText, [data.value, data.notes])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Migraine Locations Failed to log', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});





module.exports = router;