import SQLiteDatabase, { Database } from 'better-sqlite3'

let database: Database
const connection = (): Promise<void> => {
    return new Promise((resolve) => {
        database = new SQLiteDatabase('data.db')
        loadDatabase(database)
        return resolve()
    })
}

const loadDatabase = (db: Database): void => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS colors
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            code VARCHAR2 NOT NULL,
            paletteId INTEGER NOT NULL,
            FOREIGN KEY (paletteId) REFERENCES palette(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS palette
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR2 NOT NULL
        );
    `);
}

export { connection, database }
