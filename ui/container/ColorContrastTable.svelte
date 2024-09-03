<script lang="ts">
  import { argbFromHex, Contrast, Hct, hexFromArgb, TonalPalette } from '@material/material-color-utilities'

  import Input from '../components/web-component-wrapper/Input.svelte'

  // 本機能の下敷き: https://note.com/yotsukura/n/n89997b613d2f

  let hex: string = '#9b0100'

  let hexCache = ''
  function checkHex(_hex: string) {
    try {
      argbFromHex(_hex)
      hexCache = _hex
      return _hex
    } catch {
      return hexCache
    }
  }

  $: checkedHex = checkHex(hex)
  $: tonalPalette = TonalPalette.fromHct(Hct.fromInt(argbFromHex(checkedHex)))

  function findClosestNumber(arr: number[], target: number): number {
    return arr.reduce((prev, curr) => {
      return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
    })
  }

  function generateArrayWithSpecifiedVariance(mean: number, variance: number, size: number): number[] {
    const stdDev = Math.sqrt(variance) // 分散から標準偏差を計算
    const result = []

    // 配列の各要素を生成
    for (let i = 0; i < size; i++) {
      // 正規分布に基づいて等間隔に値を配置
      let value = mean + stdDev * ((i - (size - 1) / 2) / (size / 2))
      value = Math.min(Math.max(value, 0), 100) // 0から100の範囲に収める
      result.push(value)
    }

    return result
  }

  // 使用例
  const variance = 50 * 50 // 分散 (標準偏差15の2乗)
  const size = 20 // 要素数

  $: normalDistArray = generateArrayWithSpecifiedVariance(tonalPalette.keyColor.tone, variance, size).reverse()

  const CONTRAST_LABEL = Object.freeze({
    AAA: 'AAA',
    AA: 'AA',
    AA18: 'AA18',
    NO: '',
  })
  // 参考: https://waic.jp/translations/WCAG20/Overview.html
  function contrastLabel(contrastRatio: number): (typeof CONTRAST_LABEL)[keyof typeof CONTRAST_LABEL] {
    if (contrastRatio > 7.0) {
      return 'AAA'
    }
    if (contrastRatio > 4.5) {
      return 'AA'
    }
    if (contrastRatio > 3.0) {
      return 'AA18'
    }
    return ''
  }

  interface El {
    row: string
    bg: string
    text: string
    contrastRatio: number
    contrastLabel: string
  }
  interface Table {
    [key: string]: El[]
  }

  $: toTable = (tonal: TonalPalette): Table => {
    const closest = findClosestNumber(normalDistArray, tonal.keyColor.tone)
    const diff = closest - tonal.keyColor.tone

    const argbMap = new Set(
      normalDistArray.map((num) => {
        if (num === closest) {
          return tonal.keyColor.tone
        }
        const newNum = num + diff
        if (newNum >= 100) return 100
        if (newNum <= 0) return 0
        return newNum
      }),
    )

    const ret = {} as Table

    for (const i of argbMap) {
      const iArgb = tonal.tone(i)
      const iHex = hexFromArgb(iArgb)

      ret[iHex] = []

      for (const j of argbMap) {
        const jArgb = tonal.tone(j)
        const jHex = hexFromArgb(jArgb)
        const contrastRatio = Contrast.ratioOfTones(i, j)

        ret[iHex].push({
          row: jHex,
          bg: iHex,
          text: jHex,
          contrastRatio,
          contrastLabel: contrastLabel(contrastRatio),
        })
      }
    }

    return ret
  }

  $: table = toTable(tonalPalette)

  function getContrastYIQ(hex: string): string {
    // HEXコードをRGB値に変換
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    // YIQカラースペースで輝度を計算
    const yiq = (r * 299 + g * 587 + b * 114) / 1000

    // 輝度が128未満なら白、128以上なら黒を返す
    return yiq >= 128 ? 'black' : 'white'
  }
</script>

<Input bind:value={hex} />

<div
  style:display="grid"
  style:grid-template-columns={`repeat(${Object.keys(table).length + 1}, 1fr`}
  style:font-size="0.8rem"
>
  <div style:width="50px">bg\text</div>
  {#each Object.entries(table) as [text], i (i)}
    <div style:color={getContrastYIQ(text)} style:background-color={text}>{text}</div>
  {/each}
  {#each Object.entries(table) as [bg, texts], i (i)}
    <div style:color={getContrastYIQ(bg)} style:background-color={bg}>{bg}</div>
    {#each texts as el, j (j)}
      {#if el.contrastRatio > 3}
        <div style:height="20px" style:background-color={el.bg}>
          <span
            style:font-size="0.5rem"
            style:margin-left="3px"
            style:background-color={el.contrastLabel === CONTRAST_LABEL.AAA ? 'gold' : 'silver'}
            >{el.contrastLabel}</span
          >
          <span style:color={el.text}>{Math.round(el.contrastRatio * 10) / 10}</span>
        </div>
      {:else}
        <div />
      {/if}
    {/each}
  {/each}
</div>
