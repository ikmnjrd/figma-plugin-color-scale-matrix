<script lang="ts">
  export let color = '#000000'
  export let outlineColor = '#000000'
  export let width = '100px'
</script>

<div
  class="TooltipContainer"
  style:width
  style:aspect-ratio="1/1"
  style:background-color={color}
  style:outline={`${outlineColor}`}
>
  <span class="Tooltip -top" role="tooltip">
    <span class="Tooltip_Body">
      {color}
    </span></span
  >
</div>

<style>
  /* 参考元: https://www.codegrid.net/articles/2022-tooltip-1/ */
  .Tooltip {
    --_triangle-size: 5px;
    --_gap: 3px;

    position: absolute;
    z-index: 1;
    display: block;

    /* ツールチップのみため */
    width: max-content;
    max-width: 150px;
    padding: 10px;
    background-color: var(--md-sys-color-tertiary-container);
    color: var(--md-sys-color-on-tertiary-container);
    text-align: left;
    border-radius: 8px;
    font-size: 12px;

    /* 表示・非表示の指定 */
    visibility: hidden;
    opacity: 0;
  }

  /* ツールチップが上に表示される場合 */
  .Tooltip.-top {
    bottom: calc(100% + var(--_triangle-size) + var(--_gap));
    left: 50%;
    translate: -50% var(--_y, 0);
  }

  /*
  △を擬似要素で作成
*/
  .Tooltip::before {
    position: absolute;
    margin: auto;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }

  /* ツールチップが上に表示される場合の△ */
  .Tooltip.-top::before {
    bottom: calc(var(--_triangle-size) * -1);
    right: 0;
    left: 0;
    border-width: var(--_triangle-size) var(--_triangle-size) 0 var(--_triangle-size);
    border-color: var(--md-sys-color-tertiary-container) transparent transparent transparent;
  }

  /* 透明な要素を背面に敷くことでツールチップにマウスをのせやすくする */
  .Tooltip::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  /* ツールチップが上に表示される場合 */
  .Tooltip.-top::after {
    top: 100%;
    left: 0;
    height: calc(var(--_triangle-size) + var(--_gap));
  }

  /*
  ツールチップがあることを、支援技術に伝えるための非表示テキスト
*/
  .Tooltip_Body {
    display: block;
  }
  .Tooltip_Body::before {
    content: '。ツールチップあり：';
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
  }

  /*
  対象の要素の周囲に表示されるツールチップを上下左右に配置するために親要素をrelativeにする
  ※親要素のpositionの値を自身で調整したい場合は不要
*/
  .TooltipContainer {
    position: relative;
    display: inline-block;
  }

  /*
  ホバー、フォーカス、アクティブ時にツールチップを表示する
*/
  .TooltipContainer:is(:hover, :focus-visible, :focus-within, :active) > .Tooltip {
    visibility: visible;
    opacity: 1;
  }

  /*
  no-preferenceはprefers-reduced-motionの設定を行なっていない場合
  アニメーションさせる
*/
  @media (prefers-reduced-motion: no-preference) {
    /* フェードアウト用の指定 */
    .Tooltip {
      transition:
        visibility 0s linear 0.1s,
        opacity 0.1s,
        translate 0.1s;
    }
    /* フェードイン用の指定 */
    .TooltipContainer:is(:hover, :focus-visible, :focus-within, :active) > .Tooltip {
      transition:
        visibility 0s linear 0s,
        opacity 0.3s,
        translate 0.3s;
    }
    /*
    ホバー・フォーカス・アクティブ時にツールチップをCSS Transitionさせるため
    ホバー・フォーカス・アクティブ時でないときに、初期位置を指定する
  */
    .TooltipContainer:not(:is(:hover, :focus-visible, :focus-within, :active)) > .Tooltip.-top {
      --_y: var(--_gap);
    }
  }
</style>
