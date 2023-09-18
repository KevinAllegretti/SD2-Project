

drop database oversteer;
create database oversteer;
create user oversteer with encrypted password 'oversteer';
grant all privileges on database oversteer to oversteer;
grant connect on database oversteer to oversteer;

\c oversteer oversteer

-- create and inserts

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    email VARCHAR
);

GRANT ALL PRIVILEGES ON TABLE users TO oversteer;

CREATE TABLE IF NOT EXISTS questions (
    question_id SERIAL PRIMARY KEY,
    author VARCHAR,
    questiontext VARCHAR,
    questiontime VARCHAR
);

GRANT ALL PRIVILEGES ON TABLE questions TO oversteer;
