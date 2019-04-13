<template>
  <div :class="f('root')">
    <Sector v-for="{ code, docs } in data">
      <template #left>
        <div ref="cm" :class="f('code')" />
      </template>
      <template #right>
        <div :class="f('docs')" v-html="marked(docs)" />
      </template>
    </Sector>
  </div>
</template>

<script>
import { css } from 'fela-vue'
import Sector from '@/com/Sector'
import marked from 'marked'
import * as monaco from 'monaco-editor'

console.log({marked})

export default {
  props: {
    data: { type: Array, required: true },
    lang: { type: String, default: 'javascript' }
  },
  components: {
    Sector
  },
  data: () => ({
    marked
  }),
  async mounted() {
    this.$refs.cm.forEach((cm, i) => {
      monaco.editor.create(cm, {
        value: this.data[i].code,
        language: this.data[i].lang || this.lang
      })
    })
  },
  computed: {
    style() {
      return css`
        .code {
          min-height 200
        }
        .docs {
          
        }
      `
    }
  }
}
</script>