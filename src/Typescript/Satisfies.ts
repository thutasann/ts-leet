// ------------ lib.ts
type Connection = {};

declare function createConnection(
  host: string,
  port: string,
  reconnect: boolean,
  poolSize: number,
): Connection;

// ------------ app.ts
type Config = {
  host: string;
  port: string | number;
  tryReconnect: boolean | (() => boolean);
  poolSize?: number;
};

const config = {
  host: 'db.myapp.com',
  port: 134,
  tryReconnect: () => true,
  poolSize: 12,
} satisfies Config;

function start() {
  let { host, port, tryReconnect, poolSize }: Config = config;
  createConnection(host, `${port}`, tryReconnect(), poolSize);
}
