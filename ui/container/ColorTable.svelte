<script lang="ts">
  import { argbFromHex, Hct, labFromArgb, TonalPalette } from '@material/material-color-utilities'

  import Square from '../components/Square.svelte'

  export let hexes: string[] = []
  const staticTones = [100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]

  $: labs = hexes
    // これはutilに移動
    .filter((hex) => {
      try {
        argbFromHex(hex)
        return true
      } catch {
        return false
      }
    })
    .map(argbFromHex)
    .map(Hct.fromInt)
    .map((hct) => TonalPalette.fromHct(hct))
    .map((tonal) => staticTones.map((tone) => tonal.tone(tone)))
    .map((hoge) => hoge.map(labFromArgb))

  $: labsStr = labs.map((colors) => colors.map(([l, a, b]) => `lab(${l} ${a} ${b})`))
  $: grayLabsStr = labs.map((colors) => colors.map(([l]) => `lab(${l} ${0} ${0})`))
</script>

<p class="caption" style:outline="red">パレット</p>
<div style:display="grid" style:grid-template-columns={`repeat(${staticTones.length}, 1fr`}>
  {#each labsStr as labs, i (labs.join(','))}
    {#each labs as hex, j (hex)}
      <Square
        width={`calc(${100 / staticTones.length}vw)`}
        color={hex}
        outlineColor={grayLabsStr.reverse()[i][staticTones.length - j]}
      ></Square>
    {/each}
  {/each}
</div>

<!-- <p class="caption">グレースケール</p>
<div style:display="grid" style:grid-template-columns={`repeat(${staticTones.length}, 1fr`}>
  {#each grayLabsStr as grayLabs, i (i)}
    {#each grayLabs as hex (hex)}
      <Square width={`calc(${100 / staticTones.length}vw)`} color={hex}></Square>
    {/each}
  {/each}
</div> -->

<style>
  .caption {
    color: var(--md-sys-color-on-background);
  }
</style>
