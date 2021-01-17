const db  = require('./pool');

//POOL CONNECT
db.on('connect', () => {
    console.log('connected to database');
});

//CREATE USER TABLE
const createTaskTable = () => {
    const taskCreateQuery = `CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        description VARCHAR(3500),
        status BOOLEAN
    )`;
    db.query(taskCreateQuery)
    .then((res) => {
        console.log(res);
        db.end();
    })
    .catch((err) => {
        console.log(err);
        db.end();
    });
};

//DROP USER TABLE
const dropTaskTable = () => {
    const taskDropQuery = 'DROP TABLE IF EXISTS tasks';
    db.query(taskDropQuery)
    .then((res) => {
        console.log(res);
        db.end();
    })
    .catch((err) => {
        console.log(err);
        db.end();
    });
}

db.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});

//createTaskTable()
//dropTaskTable()
