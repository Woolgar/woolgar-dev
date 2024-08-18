<template>
  <NuxtPage />
</template>

<script setup lang="ts">

  onNuxtReady(() => {
    useHead({
      script: [
        {
          id: 'plausible',
          src: 'https://plausible-kk8cscg0c0cgcgw8wgoc0sck.woolgar.dev/js/script.js',
          type: 'text/javascript',
          tagPosition: 'bodyClose',
          defer: true,
        },
      ],
    });
  });
</script>
