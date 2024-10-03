export function plotArrayOnCanvas($canvas: HTMLCanvasElement | null, array: number[]) {
  if (!$canvas) return
  const ctx = $canvas.getContext('2d')
  const width = $canvas.width
  const height = $canvas.height

  const padding = 40 // 軸のための余白
  const innerWidth = width - padding * 2
  const innerHeight = height - padding * 2

  if (!ctx) return
  // キャンバスのクリア
  ctx.clearRect(0, 0, width, height)

  // 配列の長さをキャンバスの横幅に合わせてスケーリング
  const step = innerWidth / array.length

  // 最大値と最小値をキャンバスの高さに合わせてスケーリング
  const maxValue = Math.max(...array)
  const minValue = Math.min(...array)

  // 軸の描画
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 1
  ctx.beginPath()
  // y軸
  ctx.moveTo(padding, padding)
  ctx.lineTo(padding, height - padding)
  // x軸
  ctx.moveTo(padding, height - padding)
  ctx.lineTo(width - padding, height - padding)
  ctx.stroke()

  // y軸の目盛り（10個に分ける）
  const yTicks = 10
  for (let i = 0; i <= yTicks; i++) {
    const y = padding + (innerHeight / yTicks) * i
    const value = maxValue - (maxValue - minValue) * (i / yTicks)
    ctx.fillText(value.toFixed(1), 15, y) // 数値ラベル
    ctx.beginPath()
    ctx.moveTo(padding - 5, y)
    ctx.lineTo(padding, y)
    ctx.stroke()
  }

  // x軸の目盛り（配列の長さに応じて目盛りをつける）
  for (let i = 0; i < array.length; i++) {
    const x = padding + i * step
    ctx.beginPath()
    ctx.moveTo(x, height - padding)
    ctx.lineTo(x, height - padding + 5)
    ctx.stroke()
    if (i % Math.floor(array.length / 5) === 0) {
      // 適当な間隔でラベル表示
      ctx.fillText(i.toString(), x, height - padding + 15)
    }
  }

  // グラフのプロット
  ctx.beginPath()
  ctx.moveTo(padding, height - padding - ((array[0] - minValue) / (maxValue - minValue)) * innerHeight)

  for (let i = 1; i < array.length; i++) {
    const x = padding + i * step
    const y = height - padding - ((array[i] - minValue) / (maxValue - minValue)) * innerHeight
    ctx.lineTo(x, y)
  }

  ctx.strokeStyle = 'blue'
  ctx.lineWidth = 2
  ctx.stroke()

  // X軸の凡例
  ctx.fillText('color code', width / 2, height - padding / 4) // X軸の中央に凡例を表示

  // Y軸の凡例
  ctx.save()
  ctx.translate(padding / 4, height / 2)
  ctx.rotate(-Math.PI / 2) // Y軸の凡例を90度回転させて表示
  ctx.fillText('tone', 0, 0)
  ctx.restore()
}
