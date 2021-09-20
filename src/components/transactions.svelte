<script>
  import { account, algodClient, algosdk, indexerClient } from "../utils.js";

  $: transactions = indexerClient.lookupAccountTransactions($account.addr).do();
  const reload = () => {
    transactions = indexerClient.lookupAccountTransactions($account.addr).do();
  };
</script>

<div class="transactions">
  Transactions:
  {#await transactions}
    Fetching...
  {:then response}
    {#each response.transactions as transaction}
      <div class="transaction">
        <div>
          Transaction ID: {transaction.id}
        </div>
        <div>
          Sender: {transaction.sender}
        </div>
        <div>
          Receiver: {transaction["payment-transaction"].receiver}
        </div>
        <div>
          Amount: {algosdk.microalgosToAlgos(
            transaction["payment-transaction"].amount
          )} Algos
        </div>
      </div>
    {/each}
  {:catch error}
    {error}
  {/await}
  <button on:click={reload}>Reload</button>
</div>

<style>
  .transactions {
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 1px solid #8c8c8c;
  }

  .transactions .transaction {
    margin: 0.25rem;
    padding: 0.25rem;
  }

  .transactions .transaction:nth-child(2) {
    background: #eee;
  }
</style>
