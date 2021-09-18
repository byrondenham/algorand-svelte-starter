import algosdk from "algosdk";
import { writable } from "svelte/store";

export { algosdk };

const server = "https://testnet-algorand.api.purestake.io/ps2";
const indexer = "https://testnet-algorand.api.purestake.io/idx2";
const token = { "X-API-Key": "ej3JZKiQax5w0b7ZT0mIe205ICyf9lB23WPUEoLn" };
const port = "";

export const algodClient = new algosdk.Algodv2(token, server, port);
export const indexerClient = new algosdk.Indexer(token, indexer, port);

export const account = writable();
