<template>
  <div class="newsBlock">
    <div class="content">{{ content }}</div>
    <div class="readMoreBtn">READ MORE</div>
  </div>
</template>

<script>
export default {
  name: 'NewsBlock',
  props: {
    content: String
  },
}
</script>