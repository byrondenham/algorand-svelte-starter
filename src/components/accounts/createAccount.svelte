<script>
  import { algosdk } from "../../utils.js";
  export let accounts;

  let result;
  const createAccount = () => {
    const account = algosdk.generateAccount();
    const passphrase = algosdk.secretKeyToMnemonic(account.sk);

    addAccount(account);

    result = `
      Account created.
      <ul>
        <li>Address: <b>${account.addr}</b></li>
        <li>Recovery passphrase: <code>${passphrase}</code></li>
      </ul>
    `;
  };

  const addAccount = (account) => {
    accounts.push(account);
    accounts = accounts;
  };
</script>

<div class="create-account">
  <h3>Create Account</h3>
  <button on:click={createAccount}>Create Account</button>

  {#if result}
    {@html result}
  {/if}
</div>

<style>
  .create-account {
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 1px solid #8c8c8c;
  }
</style>
