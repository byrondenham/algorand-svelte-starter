<script>
  import { account, algodClient, algosdk, indexerClient } from "../utils.js";
  // $: accountInfo = algodClient.accountInformation(account.do());
  $: assets = indexerClient.searchForAssets().creator($account.addr).do();
  const reload = () => {
    assets = indexerClient.searchForAssets().creator($account.addr).do();
  };
</script>

<div class="assets">
  Assets:
  {#await assets}
    Fetching...
  {:then response}
    {#each response.assets as asset}
      {asset}
    {/each}
  {:catch error}
    {error}
  {/await}
  <button on:click={reload}>Reload</button>
</div>

<style>
  .assets {
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 1px solid #8c8c8c;
  }
</style>
