<script>
  import { algodClient } from "../utils.js";

  $: status = algodClient.status().do();

  const reload = () => {
    status = algodClient.status().do();
  };
</script>

<div class="node-status">
  <h3>Node Status:</h3>
  {#await status}
    Fetching ...
  {:then response}
    <div class="node-status-response">
      <code
        >last-round: {response["last-round"]}<br /> next-version-round: {response[
          "next-version-round"
        ]}</code
      >
    </div>
  {:catch error}
    {error}
  {/await}
  <button class="reload node-status-reload" on:click={reload}>Reload</button>
</div>

<style>
  .node-status {
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 1px solid #8c8c8c;
  }

  .node-status-response {
    margin: 0.5rem;
  }

  .node-status-reload {
    margin-top: 0.5rem;
  }
</style>
