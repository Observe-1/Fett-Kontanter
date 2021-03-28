export default function createPrimaryUserDEBUG(db) {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO users (user_id, name) VALUES (0, 'TestUser');`,
            [],
            success,
            error,
        );
    });
}

//TODO do this better
function success() {}

function error(transaction, error) {
    alert(error);
}
