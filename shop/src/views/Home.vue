<template>
  <div class="home">
      home page
      <SlideBanner />
  </div>
</template>

<script>
import SlideBanner from '@/components/home/SlideBanner.vue';

export default {
  name: 'Home',
  components: {
      SlideBanner
  }
}
</script>
