export default function truncateDatabase(db) {
    db.transaction((tx) => {
        tx.executeSql(sqlTruncateDatabaseCommand, [], success, error);
    });
    console.log("Database truncated.");
}

//TODO do this better
function success() {}

function error(transaction, error) {
    alert(error);
}

const sqlTruncateDatabaseCommand = "DELETE FROM users;";
