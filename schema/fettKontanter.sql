CREATE TABLE assets (
    asset_id INTEGER PRIMARY KEY
                     NOT NULL
                     UNIQUE,
    user_id  INTEGER REFERENCES users (user_id) 
                     NOT NULL,
    name     TEXT    NOT NULL
);

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

CREATE TABLE liabilities (
    liability_id INTEGER PRIMARY KEY
                         NOT NULL
                         UNIQUE,
    user_id      INTEGER REFERENCES users (user_id) 
                         NOT NULL,
    name         TEXT    NOT NULL
);

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

CREATE TABLE users (
    user_id  INTEGER PRIMARY KEY
                     UNIQUE
                     NOT NULL,
    name     TEXT,
    currency TEXT    DEFAULT GDP
                     NOT NULL
);