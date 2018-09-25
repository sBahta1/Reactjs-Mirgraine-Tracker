DATABASE_Name: migraine_tracker

CREATE TABLE "user" (
	id SERIAL PRIMARY KEY,
	user_name VARCHAR(300),
	password VARCHAR(1080)
	);

CREATE TABLE "daily_checkin" (
	user_id INT REFERENCES "user",
	date TIMESTAMP,
	mood INT,
	hydration INT,
	fitness INT,
	nutrition INT,
	medication BOOLEAN,
	menstruating BOOLEAN
    );

CREATE TABLE "rx" (
	user_id INT REFERENCES "user",
	med_name VARCHAR(180),
	symptom VARCHAR(180),
	dose INT,
	regimen VARCHAR(180)
	);

    CREATE TABLE "notes" (
	note_id SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user",
	note VARCHAR(1000),
	time_stamp TIMESTAMP
	);

    CREATE TABLE "migraine_epi" (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user",
	start_migraine TIMESTAMP,
	serverity INT,
	notes VARCHAR (1000),
	med_taken VARCHAR (200)
	);

CREATE TABLE "migraine_loc" (
	migraine_id int REFERENCES "migraine_epi",
	user_id int REFERENCES "user",
	temple_left BOOLEAN DEFAULT 'false',
	temple_right BOOLEAN DEFAULT 'false',
	scalp_left BOOLEAN DEFAULT 'false',
	scalp_right BOOLEAN DEFAULT 'false',
	forehead_left BOOLEAN DEFAULT 'false',
	forehead_right BOOLEAN DEFAULT 'false',
	forehead_center BOOLEAN DEFAULT 'false',
	skull BOOLEAN DEFAULT 'false',
	shoulder_left BOOLEAN DEFAULT 'false',
	shoulder_right BOOLEAN DEFAULT 'false',
	neck_left BOOLEAN DEFAULT 'false',
	neck_right BOOLEAN DEFAULT 'false',
	neck_spine BOOLEAN DEFAULT 'false',
	back_upper BOOLEAN DEFAULT 'false',
	back_mid BOOLEAN DEFAULT 'false',
	back_lower BOOLEAN DEFAULT 'false'
	);




router.post('/register', (req, res, next) => {
  const newUser = req.body
  const email = req.body.email;
  const password = encryptLib.encryptPassword(req.body.password);
  const queryText = `WITH first_ins AS (INSERT INTO users (email, password, first_name, middle_name, last_name, primary_phone, secondary_phone, street_address1, street_address2, city, state, zip, regular_basis, specific_event, as_needed, limitations_allergies, why_excited, employer, job_title, date_of_birth, active, access_level, admin_notes) 
  									 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23) RETURNING id) 
									 INSERT INTO "user_certifications" ("user_id", "certification_id", "is_certified") 
  									 VALUES ((SELECT id FROM first_ins), 1, FALSE), 
										  	((SELECT id FROM first_ins), 2, FALSE),
											((SELECT id FROM first_ins), 3, FALSE), 
											((SELECT id FROM first_ins), 4, FALSE), 
											((SELECT id FROM first_ins), 5, FALSE), 
											((SELECT id FROM first_ins), 6, FALSE), 
											((SELECT id FROM first_ins), 7, FALSE), 
											((SELECT id FROM first_ins), 8, FALSE), 
											((SELECT id FROM first_ins), 9, FALSE), 
											((SELECT id FROM first_ins), 10, FALSE), 
											((SELECT id FROM first_ins), 11, FALSE), 
											((SELECT id FROM first_ins), 12, FALSE),
  											((SELECT id FROM first_ins), 13, TRUE);`;
  pool.query(queryText, [email, password, newUser.first_name, newUser.middle_name, newUser.last_name, newUser.primary_phone, newUser.secondary_phone, newUser.street_address1, newUser.street_address2, newUser.city, newUser.state, newUser.zip, newUser.regular_basis, newUser.specific_event, newUser.as_needed, newUser.limitations_allergies, newUser.why_excited, newUser.employer, newUser.job_title, newUser.date_of_birth, newUser.active, newUser.access_level, newUser.admin_notes,])
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});

