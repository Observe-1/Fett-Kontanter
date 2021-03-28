export default function createDatabase(db) {
    console.log("Creating database.");
    db.transaction((tx) => {
        tx.executeSql(sqlCreateDatabaseCommand, [], success, error);
    });
    console.log("Database created.");
}

//TODO do this better
function success() {}

function error(transaction, error) {
    alert(error);
}

//This is a copy of __dir/schema/fettKontanter.sql as react-native-fs was not working
const sqlCreateDatabaseCommand =
    "CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY UNIQUE NOT NULL, name TEXT, currency TEXT DEFAULT 'GDP' NOT NULL);";
