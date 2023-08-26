type Connection = {};
declare function createConnection(host: string, port: string, reconnect: boolean, poolSize: number): Connection;
type Config = {
    host: string;
    port: string | number;
    tryReconnect: boolean | (() => boolean);
    poolSize?: number;
};
declare const config: {
    host: string;
    port: number;
    tryReconnect: () => true;
    poolSize: number;
};
declare function start(): void;
