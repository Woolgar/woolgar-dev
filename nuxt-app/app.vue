<template>
  <NuxtPage />
</template>

<script setup lang="ts">

  onNuxtReady(() => {
    useHead({
      script: [
        {
          id: 'plausible',
          src: 'https://analytics.tobiasfaucette.com/js/script.js',
          type: 'text/javascript',
          tagPosition: 'bodyClose',
          defer: true,
          'data-domain': 'woolgar.dev'
        },
      ],
    });
  });
</script>
