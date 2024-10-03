<script lang="ts">
  export let label: string = ''
  export let value: string = ''
</script>

<span class="input">
  <label>
    <span>{label}</span>
    <input type="text" name="name" bind:value />
  </label>
</span>

<style>
</style>
