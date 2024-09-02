<script lang="ts">
  import '@material/web/button/outlined-button'

  import { formatToHTMLStyleFromObject } from '../../utils/style'

  export let style = {}
  $: styleHtml = formatToHTMLStyleFromObject(style)

  export let text = 'this is button'
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<md-outlined-button on:click style={styleHtml}>{text}</md-outlined-button>
