<script lang="ts">
  import Chip from '../components/web-component-wrapper/Chip.svelte'

  export let text: string = ''
</script>

<Chip {text} on:remove>
  <span slot="icon" style:width="15px" style:background-color={text} />
</Chip>
