<script>
  import { account, algodClient, algosdk } from "../utils.js";

  $: balance = algodClient.accountInformation($account.addr).do();

  const reload = () => {
    balance = algodClient.accountInformation($account.addr).do();
  };
</script>

<div class="balance">
  Account balance:
  {#await balance}
    Fetching ...
  {:then response}
    {algosdk.microalgosToAlgos(response.amount)} Algos
  {:catch error}
    {error}
  {/await}

  <button on:click={reload}>Reload</button>
</div>

<style>
  .balance {
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 1px solid #8c8c8c;
  }
</style>
