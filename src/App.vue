<template>
  <div>
    <CommonHeader></CommonHeader>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue';
export default {
  components: {
    CommonHeader,
  },
};
</script>

<style lang="scss" scoped></style>
