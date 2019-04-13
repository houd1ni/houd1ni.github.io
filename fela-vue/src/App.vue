<template>
  <div :class="f('root')">
    <div :class="f('wrapper')">
      <div :class="f('nav')">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <div :class="f('body')">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    style() {
      return {
        root: {
          display: 'flex',
          justifyContent: 'center',
          padding: '32px 64px',
          '@media(max-width: 600px)': {
            padding: '16px 0'
          }
        },
        wrapper: {
          width: 1000,
          maxWidth: '100%'
        },
        body: {
          marginTop: 16
        }
      }
    }
  }
}
</script>