import algosdk from "algosdk";
import { writable } from "svelte/store";

export { algosdk };

// Check that required environment variables are set
const checkEnvironmentVariables = (envVars) => {
  envVars.forEach((envVar) => {
    if (typeof process.env[envVar] !== "string") {
      // Throw error if variable is undefined
      throw new Error(`Environment variable "${envVar}" not set`);
    }
  });
};

const retrieveBaseConfig = () => {
  // Check environment variables are defined
  checkEnvironmentVariables(["ALGOD_TOKEN", "ALGOD_SERVER", "INDEXER_SERVER"]);

  // Structure config object
  const ALGOD_INSTANCE = {
    token: process.env.ALGOD_TOKEN,
    server: process.env.ALGOD_SERVER,
    port: provess.env.ALGOD_PORT && parseInt(process.env.ALGOD_PORT, 10),
  };

  // Test for invalid configuration
  if (
    typeof ALGOD_INSTANCE.token !== "string" &&
    typeof ALGOD_INSTANCE.server !== "string" &&
    Number.isNaN(ALGOD_INSTANCE.port)
  ) {
    throw new Error(
      "Invalid configuration. Environment variables not set correctly."
    );
  }

  return { ALGOD_INSTANCE };
};

const server = "https://testnet-algorand.api.purestake.io/ps2";
const indexer = "https://testnet-algorand.api.purestake.io/idx2";
const token = { "X-API-Token": "ej3JZKiQax5w0b7ZT0mIe205ICyf9lB23WPUEoLn" };
const port = "";

export const algodClient = new algosdk.Algodv2(token, server, port, {
  "Access-Control-Allow-Headers": "X-API-Token",
});
export const indexerClient = new algosdk.Indexer(token, indexer, port);

export const account = writable();
