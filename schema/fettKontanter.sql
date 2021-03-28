--
-- File generated with SQLiteStudio v3.3.2 on Sun Mar 28 02:09:36 2021
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: assets
CREATE TABLE assets (
    asset_id INTEGER PRIMARY KEY
                     NOT NULL
                     UNIQUE,
    user_id  INTEGER REFERENCES users (user_id) 
                     NOT NULL,
    name     TEXT    NOT NULL
);


-- Table: assetValue
CREATE TABLE assetValue (
    assetValue_id   INTEGER  PRIMARY KEY
                             NOT NULL
                             UNIQUE,
    asset_id                 REFERENCES assets (asset_id) 
                             NOT NULL,
    value           INTEGER  NOT NULL,
    amount          INTEGER  NOT NULL,
    dateTimeEntered DATETIME NOT NULL
);


-- Table: liabilities
CREATE TABLE liabilities (
    liability_id INTEGER PRIMARY KEY
                         NOT NULL
                         UNIQUE,
    user_id      INTEGER REFERENCES users (user_id) 
                         NOT NULL,
    name         TEXT    NOT NULL
);


-- Table: liabilityValue
CREATE TABLE liabilityValue (
    liabilityValue_id INTEGER  PRIMARY KEY
                               NOT NULL
                               UNIQUE,
    liability_id               REFERENCES liabilities (liability_id) 
                               NOT NULL,
    value             INTEGER  NOT NULL,
    amount            INTEGER  NOT NULL,
    dateTimeEntered   DATETIME NOT NULL
);


-- Table: users
CREATE TABLE users (
    user_id  INTEGER PRIMARY KEY
                     UNIQUE
                     NOT NULL,
    name     TEXT,
    currency TEXT    DEFAULT GDP
                     NOT NULL
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
