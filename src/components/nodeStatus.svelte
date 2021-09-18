<script>
  import { algodClient } from "../utils.js";

  $: status = algodClient.status().do();

  const reload = () => {
    status = algodClient.status().do();
  };
</script>

{#await status}
  Fetching ...
{:then response}
  Node status:
  <code>{JSON.stringify(response)}</code>
{:catch error}
  {error}
{/await}
<button on:click={reload}>Reload</button>
