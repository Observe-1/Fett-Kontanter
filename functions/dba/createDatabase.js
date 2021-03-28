export default function createDatabase(db) {
    console.log("Creating database.");
    db.transaction((tx) => {
        tx.executeSql(usersTableCreate, [], success, error);
    });

    db.transaction((tx) => {
        tx.executeSql(liabilitiesTableCreate, [], success, error);
    });

    db.transaction((tx) => {
        tx.executeSql(liabilityValueTableCreate, [], success, error);
    });

    db.transaction((tx) => {
        tx.executeSql(assetTableCreate, [], success, error);
    });

    db.transaction((tx) => {
        tx.executeSql(assetValueTableCreate, [], success, error);
    });
    console.log("Database created.");
}

//TODO do this better
function success() {}
function error(transaction, error) {
    console.log("Error with transaction");
    console.log(transaction);
    console.error(error);
}

//This is a copy of __dir/schema/fettKontanter.sql as react-native-fs was not working
const usersTableCreate = `
    CREATE TABLE IF NOT EXISTS users (
        user_id 
            INTEGER 
            PRIMARY KEY 
            UNIQUE 
            NOT NULL, 
        name 
            TEXT, 
        currency 
            TEXT 
            DEFAULT 'GDP' 
            NOT NULL,
        dob
            DATE            
    );`;

const liabilitiesTableCreate = `
    CREATE TABLE IF NOT EXISTS liabilities (
        liability_id 
            INTEGER 
            PRIMARY KEY 
            NOT NULL 
            UNIQUE, 
        user_id
            INTEGER 
            REFERENCES users (user_id)  
            NOT NULL, 
        name         
            TEXT    
            NOT NULL,
        category
            TEXT
    );`;

const liabilityValueTableCreate = `
    CREATE TABLE IF NOT EXISTS liabilityValue (
        liabilityValue_id 
            INTEGER  
            PRIMARY KEY 
            NOT NULL 
            UNIQUE, 
        liability_id               
            REFERENCES liabilities (liability_id) 
            NOT NULL, 
        value             
            INTEGER    
            NOT NULL, 
        amount            
            INTEGER  
            NOT NULL, 
        dateTimeEntered   
            DATETIME 
            NOT NULL
    );`;

const assetTableCreate = `
    CREATE TABLE IF NOT EXISTS assets (
        asset_id 
            INTEGER 
            PRIMARY KEY 
            NOT NULL 
            UNIQUE, 
        user_id
            INTEGER 
            REFERENCES users (user_id)  
            NOT NULL, 
        name         
            TEXT    
            NOT NULL,
        category
            TEXT
    );`;

const assetValueTableCreate = `
    CREATE TABLE IF NOT EXISTS assetValue (
        assetValue_id   
            INTEGER  
            PRIMARY KEY
            NOT NULL
            UNIQUE,
        asset_id                 
            REFERENCES assets (asset_id) 
            NOT NULL,
        value           
            INTEGER  
            NOT NULL,
        amount          
            INTEGER  
            NOT NULL,
        dateTimeEntered 
            DATETIME 
            NOT NULL
    );`;
