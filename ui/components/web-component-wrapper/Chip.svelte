<script lang="ts">
  import '@material/web/chips/input-chip'

  export let text = 'text'
  export const hasIcon = false
</script>

<md-input-chip {...$$restProps} label={text} on:remove hasIcon={false}><slot name="icon" /></md-input-chip>
