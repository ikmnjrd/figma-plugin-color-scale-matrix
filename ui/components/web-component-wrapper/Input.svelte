<script lang="ts">
  import '@material/web/textfield/filled-text-field'

  import { formatToHTMLStyleFromObject } from '../../utils/style'

  export let style = {}
  $: styleHtml = formatToHTMLStyleFromObject(style)

  import type { TextFieldType } from '@material/web/textfield/internal/text-field'

  export let type: TextFieldType = 'text'
  export let value = ''
</script>

<md-filled-field enabled {type} style={styleHtml}><input bind:value /></md-filled-field>
