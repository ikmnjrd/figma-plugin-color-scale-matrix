<script lang="ts">
  import AddableList from './container/AddableList.svelte'
  // import ColorTable from './container/ColorTable.svelte'
  import Contrasts from './container/Contrasts.svelte'

  $: hexes = ['#E8A041', '#9400d3', '#00ffff', '#800000', '#2f4f4f', '#ff0000', '#fffaf0', '#00ff00']
</script>

<div style:height="500px">
  <AddableList bind:hexes />
  <Contrasts bind:hexes />
  <!-- <ColorTable bind:hexes /> -->
</div>

<style global>
  .figma-light {
    --md-sys-color-primary: rgb(136 82 28);
    --md-sys-color-surface-tint: rgb(136 82 28);
    --md-sys-color-on-primary: rgb(255 255 255);
    --md-sys-color-primary-container: rgb(255 220 193);
    --md-sys-color-on-primary-container: rgb(46 21 0);
    --md-sys-color-secondary: rgb(116 89 67);
    --md-sys-color-on-secondary: rgb(255 255 255);
    --md-sys-color-secondary-container: rgb(255 220 193);
    --md-sys-color-on-secondary-container: rgb(42 23 7);
    --md-sys-color-tertiary: rgb(91 98 55);
    --md-sys-color-on-tertiary: rgb(255 255 255);
    --md-sys-color-tertiary-container: rgb(224 231 177);
    --md-sys-color-on-tertiary-container: rgb(25 30 0);
    --md-sys-color-error: rgb(186 26 26);
    --md-sys-color-on-error: rgb(255 255 255);
    --md-sys-color-error-container: rgb(255 218 214);
    --md-sys-color-on-error-container: rgb(65 0 2);
    --md-sys-color-background: rgb(255 248 245);
    --md-sys-color-on-background: rgb(34 26 20);
    --md-sys-color-surface: rgb(255 248 245);
    --md-sys-color-on-surface: rgb(34 26 20);
    --md-sys-color-surface-variant: rgb(243 223 209);
    --md-sys-color-on-surface-variant: rgb(81 68 59);
    --md-sys-color-outline: rgb(131 116 105);
    --md-sys-color-outline-variant: rgb(214 195 182);
    --md-sys-color-shadow: rgb(0 0 0);
    --md-sys-color-scrim: rgb(0 0 0);
    --md-sys-color-inverse-surface: rgb(55 47 40);
    --md-sys-color-inverse-on-surface: rgb(254 238 228);
    --md-sys-color-inverse-primary: rgb(255 183 122);
    --md-sys-color-primary-fixed: rgb(255 220 193);
    --md-sys-color-on-primary-fixed: rgb(46 21 0);
    --md-sys-color-primary-fixed-dim: rgb(255 183 122);
    --md-sys-color-on-primary-fixed-variant: rgb(107 59 5);
    --md-sys-color-secondary-fixed: rgb(255 220 193);
    --md-sys-color-on-secondary-fixed: rgb(42 23 7);
    --md-sys-color-secondary-fixed-dim: rgb(227 192 165);
    --md-sys-color-on-secondary-fixed-variant: rgb(90 66 46);
    --md-sys-color-tertiary-fixed: rgb(224 231 177);
    --md-sys-color-on-tertiary-fixed: rgb(25 30 0);
    --md-sys-color-tertiary-fixed-dim: rgb(195 203 151);
    --md-sys-color-on-tertiary-fixed-variant: rgb(67 74 34);
    --md-sys-color-surface-dim: rgb(230 215 205);
    --md-sys-color-surface-bright: rgb(255 248 245);
    --md-sys-color-surface-container-lowest: rgb(255 255 255);
    --md-sys-color-surface-container-low: rgb(255 241 232);
    --md-sys-color-surface-container: rgb(251 235 225);
    --md-sys-color-surface-container-high: rgb(245 229 219);
    --md-sys-color-surface-container-highest: rgb(239 224 214);
  }

  .figma-dark {
    --md-sys-color-primary: rgb(255 183 122);
    --md-sys-color-surface-tint: rgb(255 183 122);
    --md-sys-color-on-primary: rgb(76 39 0);
    --md-sys-color-primary-container: rgb(107 59 5);
    --md-sys-color-on-primary-container: rgb(255 220 193);
    --md-sys-color-secondary: rgb(227 192 165);
    --md-sys-color-on-secondary: rgb(65 44 25);
    --md-sys-color-secondary-container: rgb(90 66 46);
    --md-sys-color-on-secondary-container: rgb(255 220 193);
    --md-sys-color-tertiary: rgb(195 203 151);
    --md-sys-color-on-tertiary: rgb(45 51 14);
    --md-sys-color-tertiary-container: rgb(67 74 34);
    --md-sys-color-on-tertiary-container: rgb(224 231 177);
    --md-sys-color-error: rgb(255 180 171);
    --md-sys-color-on-error: rgb(105 0 5);
    --md-sys-color-error-container: rgb(147 0 10);
    --md-sys-color-on-error-container: rgb(255 218 214);
    --md-sys-color-background: rgb(25 18 12);
    --md-sys-color-on-background: rgb(239 224 214);
    --md-sys-color-surface: rgb(25 18 12);
    --md-sys-color-on-surface: rgb(239 224 214);
    --md-sys-color-surface-variant: rgb(81 68 59);
    --md-sys-color-on-surface-variant: rgb(214 195 182);
    --md-sys-color-outline: rgb(158 142 130);
    --md-sys-color-outline-variant: rgb(81 68 59);
    --md-sys-color-shadow: rgb(0 0 0);
    --md-sys-color-scrim: rgb(0 0 0);
    --md-sys-color-inverse-surface: rgb(239 224 214);
    --md-sys-color-inverse-on-surface: rgb(55 47 40);
    --md-sys-color-inverse-primary: rgb(136 82 28);
    --md-sys-color-primary-fixed: rgb(255 220 193);
    --md-sys-color-on-primary-fixed: rgb(46 21 0);
    --md-sys-color-primary-fixed-dim: rgb(255 183 122);
    --md-sys-color-on-primary-fixed-variant: rgb(107 59 5);
    --md-sys-color-secondary-fixed: rgb(255 220 193);
    --md-sys-color-on-secondary-fixed: rgb(42 23 7);
    --md-sys-color-secondary-fixed-dim: rgb(227 192 165);
    --md-sys-color-on-secondary-fixed-variant: rgb(90 66 46);
    --md-sys-color-tertiary-fixed: rgb(224 231 177);
    --md-sys-color-on-tertiary-fixed: rgb(25 30 0);
    --md-sys-color-tertiary-fixed-dim: rgb(195 203 151);
    --md-sys-color-on-tertiary-fixed-variant: rgb(67 74 34);
    --md-sys-color-surface-dim: rgb(25 18 12);
    --md-sys-color-surface-bright: rgb(65 55 49);
    --md-sys-color-surface-container-lowest: rgb(20 13 8);
    --md-sys-color-surface-container-low: rgb(34 26 20);
    --md-sys-color-surface-container: rgb(38 30 24);
    --md-sys-color-surface-container-high: rgb(49 40 34);
    --md-sys-color-surface-container-highest: rgb(60 51 44);
  }
</style>
