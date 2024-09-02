<script lang="ts">
  import ChipWithColor from '../components/ChipWithColor.svelte'
  import Button from '../components/web-component-wrapper/Button.svelte'
  import ChipSet from '../components/web-component-wrapper/ChipSet.svelte'
  import Input from '../components/web-component-wrapper/Input.svelte'

  export let hexes: string[] = []
  let value = '#e6e6fa'

  function add() {
    hexes = [...hexes, value]
    value = ''
  }

  function remove(targetHex: string) {
    hexes = hexes.filter((hex) => hex !== targetHex)
  }
</script>

<div>
  <Input bind:value style={{ 'padding-bottom': '10px' }} />
  <Button text="追加" on:click={add} style={{ 'margin-top': '8px' }} />

  <ChipSet style={{ 'padding-bottom': '10px' }} >
    {#each hexes as hex (hex)}
      <ChipWithColor text={hex.toUpperCase()} on:remove={() => remove(hex)} />
    {/each}
  </ChipSet>
</div>
