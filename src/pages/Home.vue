<template>
  <div class="home">
    <LogoBlock />
    <MainDesc />
    <DetailDesc />
    <LatestNews />
  </div>
</template>

<script>
import LogoBlock from '../components/home/LogoBlock.vue';
import MainDesc from '../components/home/MainDesc.vue';
import DetailDesc from '../components/home/DetailDesc.vue';
import LatestNews from '../components/home/LatestNews.vue';

export default {
  name: 'Home',
  components: {
    LogoBlock,
    MainDesc,
    DetailDesc,
    LatestNews
  }
}
</script>