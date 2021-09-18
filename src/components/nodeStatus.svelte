<script>
  import { algodClient } from "../utils.js";

  $: status = algodClient.status().do();

  const reload = () => {
    status = algodClient.status().do();
  };
</script>

<div class="node-status">
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
<br />
<hr />
<br />

<style>
  .node-status {
    padding: 0.5rem;
  }
  .node-status-response {
    padding: 1rem;
  }
</style>
