<script lang="ts">
  import {
    argbFromHex,
    blueFromArgb,
    greenFromArgb,
    Hct,
    hexFromArgb,
    redFromArgb,
    TonalPalette,
  } from '@material/material-color-utilities'

  import Input from '../components/web-component-wrapper/Input.svelte'

  export let hexes: string[] = []

  let toContrastTone = '50'

  $: tonalPalettes = hexes
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

  $: toThreeContrast = (tonal: TonalPalette) => {
    const lower = tonal.tone(tonal.keyColor.tone + parseInt(toContrastTone))
    const origin = tonal.keyColor.toInt()
    const higher = tonal.tone(tonal.keyColor.tone - parseInt(toContrastTone))
    return [hexFromArgb(lower), hexFromArgb(origin), hexFromArgb(higher)]
  }

  $: contrasts = tonalPalettes.map((tonal) => toThreeContrast(tonal))
</script>

<Input bind:value={toContrastTone} style={{ 'padding-bottom': '10px' }} />
<div style:display="grid" style:grid-template-columns={`repeat(${3}, 1fr`}>
  {#each contrasts as labs, i (i)}
    {#each labs as hex, j (j)}
      <div style:height="20px" style:background-color={hex.toUpperCase()} />
    {/each}

    {#each labs as hex, j (j)}
      <div>{hex.toUpperCase()}</div>
    {/each}

    {#each labs as hex, j (j)}
      <div>
        <span>R:{redFromArgb(argbFromHex(hex))}</span><span>G:{greenFromArgb(argbFromHex(hex))}</span><span
          >B:{blueFromArgb(argbFromHex(hex))}</span
        >
      </div>
    {/each}
  {/each}
</div>
