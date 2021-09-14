<script>
  import { algosdk } from "../store.js";
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

<button on:click={createAccount}>Create Account</button>

{#if result}
  {@html result}
{/if}
