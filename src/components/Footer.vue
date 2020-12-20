<template>
  <div class="footer">
    <div class="container">
      <span class="logo">國立清華大學</span>
      <NavOptions />
    </div>
  </div>
</template>

<script>
import NavOptions from "./NavOptions.vue";
export default {
  name: "Footer",
  components: {
    NavOptions
  }
};
</script>