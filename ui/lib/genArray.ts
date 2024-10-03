export function to1p5Array(tone: number, _size: number = 16): number[] {
  let size = _size
  // 配列の長さを2以上の偶数に丸める
  if (size < 2) {
    size = 2 // 最小の値を2に設定
  }
  if (size % 2 !== 0) {
    size = Math.floor(size / 2) * 2 // 偶数に丸める（偶数未満の最大値）
  }

  const half = size / 2
  const result: number[] = []
  const minValue = 0.01 // 0に近いが含まれない最小値
  const maxValue = 99.99 // 100に近いが含まれない最大値

  // 左側の値を生成（minValueからaに向かう） - 基準値付近で多くの数字を生成
  for (let i = 0; i < half; i++) {
    // 正規化されたiを使って、2次関数的に集中させる
    const t = i / (half - 1) // 0から1までの正規化された値
    const value = minValue + (tone - minValue) * Math.pow(t, 1.5) // tの1.5乗で基準値付近に集中させる
    result.push(value)
  }

  // 右側の値を生成（aからmaxValueに向かう） - 基準値付近で多くの数字を生成
  for (let i = 0; i < half; i++) {
    // 正規化されたiを使って、2次関数的に集中させる
    const t = i / (half - 1) // 0から1までの正規化された値
    const value = tone + (maxValue - tone) * Math.pow(t, 1.5) // tの1.5乗で基準値付近に集中させる
    result.push(value)
  }

  return result
}

export function toLogArray(tone: number, _size: number = 16): number[] {
  let size = _size
  // 配列の長さを2以上の偶数に丸める
  if (size < 2) {
    size = 2 // 最小の値を2に設定
  }
  if (size % 2 !== 0) {
    size = Math.floor(size / 2) * 2 // 偶数に丸める（偶数未満の最大値）
  }

  const half = size / 2
  const result: number[] = []
  const minValue = 0.01 // 0に近いが含まれない最小値
  const maxValue = 99.99 // 100に近いが含まれない最大値

  // log(x)を使って値を生成
  function logInterpolation(t: number, min: number, max: number): number {
    const logMin = Math.log(min)
    const logMax = Math.log(max)
    const logValue = logMin + (logMax - logMin) * t
    return Math.exp(logValue)
  }

  // 左側の値を生成（minValueからtoneに向かう）
  for (let i = 0; i < half; i++) {
    const t = i / (half - 1) // 0から1までの正規化された値
    const value = logInterpolation(t, minValue, tone)
    result.push(value)
  }

  // 右側の値を生成（toneからmaxValueに向かう）
  for (let i = 0; i < half; i++) {
    const t = i / (half - 1) // 0から1までの正規化された値
    const value = logInterpolation(t, tone, maxValue)
    result.push(value)
  }

  return result
}

export function toExpArray(tone: number, _size: number = 16): number[] {
  let size = _size
  // 配列の長さを2以上の偶数に丸める
  if (size < 2) {
    size = 2 // 最小の値を2に設定
  }
  if (size % 2 !== 0) {
    size = Math.floor(size / 2) * 2 // 偶数に丸める（偶数未満の最大値）
  }

  const half = size / 2
  const result: number[] = []
  const minValue = 0.01 // 0に近いが含まれない最小値
  const maxValue = 99.99 // 100に近いが含まれない最大値

  // exp(x)を使って値を生成
  function expInterpolation(t: number, min: number, max: number): number {
    return min * Math.pow(max / min, t)
  }

  // 左側の値を生成（minValueからtoneに向かう）
  for (let i = 0; i < half; i++) {
    const t = i / (half - 1) // 0から1までの正規化された値
    const value = expInterpolation(t, minValue, tone)
    result.push(value)
  }

  // 右側の値を生成（toneからmaxValueに向かう）
  for (let i = 0; i < half; i++) {
    const t = i / (half - 1) // 0から1までの正規化された値
    const value = expInterpolation(t, tone, maxValue)
    result.push(value)
  }

  return result
}

export function toLinerArray(tone: number, _size: number = 16): number[] {
  let size = _size
  // 配列の長さを2以上の偶数に丸める
  if (size < 2) {
    size = 2 // 最小の値を2に設定
  }
  if (size % 2 !== 0) {
    size = Math.floor(size / 2) * 2 // 偶数に丸める（偶数未満の最大値）
  }

  const half = size / 2
  const result: number[] = []
  const minValue = 0.01 // 0に近いが含まれない最小値
  const maxValue = 99.99 // 100に近いが含まれない最大値

  // 線形補間を使って値を生成
  function linearInterpolation(t: number, min: number, max: number): number {
    return min + t * (max - min)
  }

  // 左側の値を生成（minValueからtoneに向かう）
  for (let i = 0; i < half; i++) {
    const t = i / (half - 1) // 0から1までの正規化された値
    const value = linearInterpolation(t, minValue, tone)
    result.push(value)
  }

  // 右側の値を生成（toneからmaxValueに向かう）
  for (let i = 0; i < half; i++) {
    const t = i / (half - 1) // 0から1までの正規化された値
    const value = linearInterpolation(t, tone, maxValue)
    result.push(value)
  }

  return result
}
