<script lang="ts">
  import '@material/web/chips/input-chip'

  import { formatToHTMLStyleFromObject } from '../../utils/style'

  export let style = {}
  $: styleHtml = formatToHTMLStyleFromObject(style)

  export let text = 'text'
  export const hasIcon = false
</script>

<md-input-chip label={text} on:remove hasIcon={false} style={styleHtml}><slot name="icon" /></md-input-chip>
