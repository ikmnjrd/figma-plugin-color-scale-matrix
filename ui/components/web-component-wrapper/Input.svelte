<script lang="ts">
  import '@material/web/textfield/filled-text-field'

  import type { TextFieldType } from '@material/web/textfield/internal/text-field'

  export let type: TextFieldType = 'text'
  export let value = ''
</script>

<!-- FIXME: slotに<input>を指定しないと表示もされない。表示されてもオプションがほぼ効かない。ex labelを指定するとinputの値すら変えられなくなる -->
<md-filled-field enabled {...$$restProps} {type}><input bind:value /></md-filled-field>
