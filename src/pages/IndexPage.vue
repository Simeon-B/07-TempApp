<template>
  <q-page>
    <h1>Home</h1>
    <div class="q-logo">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
      >
      <span class="q-version">v {{ $q.version }}</span>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style scoped>
h1 {
  margin: 6.5% 6.5%;
  alignment: left;
}
.q-logo {
  width: 200px;
  height: 200px;
  margin: 0 0 0 38%;
}
.q-version {
  margin: 2% 36%;
}
</style>
