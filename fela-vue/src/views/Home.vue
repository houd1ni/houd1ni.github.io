<template>
  <div :class="f('root')">
    <p>
      This documentation currently is in development.
      <br />
      See more in the <a href="https://github.com/houd1ni/fela-vue">Repo.</a>
      <br />
      And
      <a href="https://github.com/houd1ni/houd1ni.github.io/tree/master/fela-vue">
        this site Repo
      </a>
      as a live example.
    </p>
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
        { code: `
          computed: {
            style() {
              return {
                root: {
                  marginLeft: 45
                }
              }
            }
          }
        `, docs: 'it\'s valid!' },
        {
          code: 'css`.root { margin-left: 45 }`',
          docs: 'it\'s also valid!'
        }
      ]
    }
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