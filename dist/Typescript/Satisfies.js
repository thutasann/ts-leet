"use strict";
const config = {
    host: 'db.myapp.com',
    port: 134,
    tryReconnect: () => true,
    poolSize: 12,
};
function start() {
    let { host, port, tryReconnect, poolSize } = config;
    createConnection(host, `${port}`, tryReconnect(), poolSize);
}
