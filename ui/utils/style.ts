export function formatToHTMLStyleFromObject(style: Record<PropertyKey, unknown>) {
  return Object.entries(style).reduce((acc, [key, value]) => `${acc} ${key}: ${value};`, '')
}
