<script>
  import { account } from "./utils.js";
  import CreateAccount from "./components/createAccount.svelte";
  import NodeStatus from "./components/nodeStatus.svelte";
  import Balance from "./components/balance.svelte";
  import Assets from "./components/assets.svelte";

  let accounts = [];
</script>

<main>
  <h1>Hello</h1>
  <CreateAccount bind:accounts />
  <h3>Node Status:</h3>
  <NodeStatus />
  {#if accounts.length > 0}
    <h3>Select account:</h3>
  {:else}
    <h3>No accounts found.</h3>
  {/if}
  {#each accounts as ac, index (ac.addr)}
    <b>{ac.addr}</b>
    <button
      disabled={$account === ac}
      on:click={() => {
        $account = ac;
      }}>Use</button
    >
    <button
      on:click={() => {
        if ($account === ac) $account = null;
        accounts.splice(index, 1);
        accounts = accounts;
      }}>Remove</button
    >
    <br />
  {/each}
  <br />
  <hr />
  <br />
  {#if $account}
    <Balance />
    <Assets />
  {:else}
    Please select an account
  {/if}
</main>

<style>
  h3 {
    margin: 0;
  }
</style>
