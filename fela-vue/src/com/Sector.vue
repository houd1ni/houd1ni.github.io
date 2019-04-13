<template>
  <div :class="f('root')">
    <div :class="f('left-col')">
      <slot name="left" />
    </div>
    <div :class="f('right-col')">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import { css } from 'fela-vue'

export default {
  computed: {
    style() {
      return css`
        .root {
          display flex
        }
        .left-col {
          width 50%
          background #faa
        }
        .right-col {
          width 50%
          background #aaf
        }
      `
    }
  }
}
</script>