<script>
  import { account } from "../utils.js";
  export let accounts = [];
</script>

{#if accounts.length > 0}
  <h3>Select account:</h3>
{:else}
  <h3>No accounts found.</h3>
{/if}
<ul>
  {#each accounts as ac, index (ac.addr)}
    <li>
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
    </li>
  {/each}
</ul>
