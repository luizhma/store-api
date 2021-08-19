import pg from "pg";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }
    
    const pool = new pg.Pool({
        connectionString: "postgres://vpnaohne:1nPA4gLTNlPNjCBtjMSOivE8fG07FBit@batyr.db.elephantsql.com/vpnaohne"
    });
    global.connection = pool;
    return pool.connect();
};


export{
    connect
} 