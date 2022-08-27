<template>
  <footer class="">
    <div class="social-links">
      <a href="https://www.linkedin.com/in/tobias-faucette/" rel="noopener noreferrer" target="_blank">
        <i class="fab fa-linkedin-in"> </i>
      </a>
      <a href="https://www.instagram.com/tobiasfaucette/" rel="noopener noreferrer" target="_blank">
        <i class="fab fa-instagram"> </i>
      </a>
      <a href="https://github.com/Woolgar" rel="noopener noreferrer" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <div class="">
      <p>
        Copyright &copy;
        {{ currentYear }}
        Tobias Faucette.
      </p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
const currentYear = new Date().getFullYear();

</script>
<style lang="">
  
</style>