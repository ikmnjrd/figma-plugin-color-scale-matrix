<script lang="ts">
  import '@material/web/chips/chip-set'
  import { formatToHTMLStyleFromObject } from '../../utils/style'

  export let style = {}
  $: styleHtml = formatToHTMLStyleFromObject(style)
</script>

<md-chip-set style={styleHtml}><slot /></md-chip-set>
