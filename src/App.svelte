<script>
  import { account } from "./store.js";
  import CreateAccount from "./components/createAccount.svelte";
  import Balance from "./components/balance.svelte";

  let accounts = [];
</script>

<main>
  <h1>Hello</h1>
  <br />
  <CreateAccount bind:accounts />

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
        accounts.splice(index, 1);
        accounts = accounts;
      }}>Remove</button
    >
  {/each}

  {#if $account}
    <Balance />
  {:else}
    Please select an account
  {/if}
</main>

<style>
</style>
