<template>
  <section class="common-padding">
    <NewArrival></NewArrival>
  </section>
</template>

<script>
import bus from '@/utils/bus';
import NewArrival from '@/components/main/NewArrival';

export default {
  components: { NewArrival },
  mounted() {
    bus.$emit('off:loading');
  },
};
</script>

<style lang="scss" scoped>
.common-padding {
  height: 100vh;
}
</style>
