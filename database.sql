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
	migraine_id SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user",
	start_migraine TIMESTAMP,
	serverity INT,
	notes VARCHAR (1000),
	med_taken VARCHAR (200)
	);