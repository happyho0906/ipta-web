<template>
  <nav id="nav">
    <div class="container">
      <div class="logo">
        <img src="../assets/imgs/mainLogo.svg" alt="" />
      </div>
      <NavOptions />
    </div>
  </nav>
</template>

<script>
import NavOptions from './NavOptions.vue';
export default {
  name: 'Header',
  components: {
    NavOptions
  }
}
</script>