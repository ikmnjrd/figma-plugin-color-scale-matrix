<script lang="ts">
  import '@material/web/button/outlined-button'

  export let text = 'this is button'
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<md-outlined-button on:click {...$$restProps}>{text}</md-outlined-button>
