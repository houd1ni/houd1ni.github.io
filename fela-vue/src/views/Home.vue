<template>
  <div :class="f('root')">
    <DocSectors :data="sectors" />
  </div>
</template>

<script>
import { css } from 'fela-vue'
import DocSectors from '@/com/DocSectors'
import * as monaco from 'monaco-editor'

export default {
  components: {
    DocSectors
  },
  data() {
    return {
      sectors: [
        { code: 'alert(5)', docs: 'shit!' }
      ]
    }
  },
  async mounted() {
    //  monaco.editor.create(this.$refs.cm, {
    //    value: [
    //      'function x() {',
    //      '\tconsole.log("Hello world!");',
    //      '}'
    //    ].join('\n'),
    //    language: 'javascript'
    //  });
  },
  computed: {
    style() {
      return css`
        .code {
          min-height 200
        }
      `
    }
  }
}
</script>