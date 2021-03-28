export default async function getPrimaryUser(db) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM users WHERE user_id=0;`,
                [],
                (_trans, ResultSet) => {
                    resolve(ResultSet.rows.item(0));
                },
                (_trans, error) => {
                    reject(error);
                },
            );
        });
    });
}
