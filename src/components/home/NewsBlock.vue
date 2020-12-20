<template>
  <div class="newsBlock">
    <img :src="`/imgs/home/latestNews/${imgName}`" alt="" />
    <div class="content">{{ content }}</div>
    <div class="readMoreBtn">READ MORE</div>
  </div>
</template>

<script>
export default {
  name: "NewsBlock",
  props: {
    content: String,
    imgName: String
  }
};
</script>