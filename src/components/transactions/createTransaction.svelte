<script>
  import { account, algodClient, algosdk } from "../../utils.js";
  const encode = (input) => new TextEncoder().encode(input);

  let reciever;
  let amount;
  let signedTxn;
  let mn;
  let result;
  let note;

  const create = async () => {
    let params = await algodClient.getTransactionParams().do();
    let transaction = {
      from: $account.addr,
      to: reciever,
      amount: algosdk.algosToMicroalgos(amount),
      fee: params.fee,
      firstRound: params.firstRound,
      lastRound: params.lastRound,
      genesisID: params.genesisID,
      genesisHash: params.genesisHash,
      note: encode(note),
    };

    signedTxn = algosdk.signTransaction(
      transaction,
      algosdk.mnemonicToSecretKey(mn)
    );

    const sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do();
    result = `Transaction sent. ID: ${sendTx.txId}`;
    waitForConfirmation(sendTx.txId);
  };

  const waitForConfirmation = async (id) => {
    let lastround = (await algodClient.status().do())["last-round"];
    while (true) {
      const pendingInfo = await algodClient
        .pendingTransactionInformation(id)
        .do();
      if (
        pendingInfo["confirmed-round"] !== null &&
        pendingInfo["confirmed-round"] > 0
      ) {
        result = `Confirmed. Round: ${pending["confirmed-round"]}`;
        break;
      }
      lastround++;
      await algodClient.statusAfterBlock(lastround).do();
    }
  };
</script>

<div class="create-transaction">
  <h3>Create Transaction</h3>
  <form on:submit|preventDefault>
    <input bind:value={reciever} placeholder="To" />
    <input bind:value={amount} placeholder="Amount (Algos)" />
    <!-- <input bind:value={note} placeholder="Note" /> -->
    <input bind:value={mn} placeholder="Passphrase" />
    <button on:click={create}>Create Transaction</button>
  </form>

  {#if result}
    {@html result}
  {/if}
</div>
