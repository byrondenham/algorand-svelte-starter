<script>
  import { account, algodClient, algosdk } from "../store.js";

  $: balance = algodClient.accountInformation($account.addr).do();

  const reload = () => {
    balance = algodClient.accountInformation($account.addr).do();
  };
</script>

{#await balance}
  Fetching ...
{:then response}
  Account balance: {algosdk.microalgosToAlgos(response.amount)} Algos
{:catch error}
  {error}
{/await}
<button on:click={reload}>Reload</button>
