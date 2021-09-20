<script>
  import { algosdk } from "../../utils.js";
  export let accounts;

  let mn, res;
  const recover = () => {
    let account;
    try {
      account = algosdk.mnemonicToSecretKey(mn);
      if (accounts.some((acc) => acc.addr === account.addr))
        throw new Error("Account already in list");
    } catch (err) {
      res = err;
      return;
    }

    addAccount(account);

    res = "Account recovered";
    mn = "";
  };

  const addAccount = (account) => {
    accounts.push(account);
    accounts = accounts;
  };
</script>

<div class="recover">
  <h3>Recover Account</h3>
  <form on:submit|preventDefault>
    <input bind:value={mn} placeholder="Passphrase" />
    <button on:click={recover}>Recover Account</button>
  </form>

  {#if res}
    {@html res}
  {/if}
</div>

<style>
  .recover {
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 1px solid #8c8c8c;
  }
</style>
