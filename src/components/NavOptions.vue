<template>
  <div class="navOptions">
    <router-link to="/"><span @click="toTop">Home</span></router-link>
    <span>招生</span>
    <span>最新消息</span>
    <router-link to="/bachelorClass"><span @click="toTop">學士班</span></router-link>
    <span>師資</span>
    <span>科藝賞析</span>
    <span>聯絡</span>
  </div>
</template>

<script>
export default {
  name: 'NavOption',
  methods: {
    toTop: () => window.scrollTo({ top: 0 })
  }
}
</script>