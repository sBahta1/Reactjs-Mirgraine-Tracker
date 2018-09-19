const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

//post received from DailyCheckin.js
router.post('/', (req, res) => {
    if (req.isAuthenticated) {
        const checkin = req.body;
        const queryText = `INSERT INTO "daily_checkin"
                              ("user_id","mood", "hydration","fitness","nutrition","medication","menstruating") 
                       VALUES ($1, $2, $3, $4, $5, $6, $7);`;
        pool.query(queryText, [req.user.id, checkin.mood, checkin.hydro, checkin.fitness, checkin.nutrition, checkin.medication, checkin.menstruation])
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