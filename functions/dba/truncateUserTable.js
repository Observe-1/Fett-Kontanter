export default function truncateUserTable(db) {
    db.transaction((tx) => {
        tx.executeSql(sqlTruncateDatabaseCommand, [], success, error);
    });
    console.log("User table truncated.");
}

//TODO do this better
function success() {}

function error(transaction, error) {
    alert(error);
}

const sqlTruncateDatabaseCommand = "DELETE FROM users;";
