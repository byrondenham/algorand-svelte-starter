<script>
  import { account } from "./utils.js";
  import NodeStatus from "./components/nodeStatus.svelte";
  import RecoverAccount from "./components/accounts/recoverAccount.svelte";
  import CreateAccount from "./components/accounts/createAccount.svelte";
  import Accounts from "./components/accounts.svelte";
  import Balance from "./components/balance.svelte";
  import Assets from "./components/assets.svelte";
  import Transactions from "./components/transactions.svelte";
  import CreateTransaction from "./components/transactions/createTransaction.svelte";

  let accounts = [];
</script>

<main>
  <NodeStatus />
  <RecoverAccount bind:accounts />
  <CreateAccount bind:accounts />

  <div class="select-account">
    <Accounts bind:accounts />
    {#if $account}
      <Balance />
      <Assets />
      <Transactions />
      <CreateTransaction />
    {:else}
      Please select an account
    {/if}
  </div>
</main>

<style>
  .select-account {
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 1px solid #8c8c8c;
  }
</style>
