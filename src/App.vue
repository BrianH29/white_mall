<template>
  <div>
    <LoadSpinner :loading="loadingStatus"></LoadSpinner>
    <CommonHeader></CommonHeader>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue';
import LoadSpinner from '@/components/LoadSpinner';
import bus from '@/utils/bus';

export default {
  components: {
    LoadSpinner,
    CommonHeader,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  created() {
    bus.$on('on:loading', this.startLoading);
    bus.$on('off:loading', this.endLoading);
  },
  methods: {
    startLoading() {
      this.loadingStatus = true;
    },
    endLoading() {
      this.loadingStatus = false;
    },
  },
  beforeDestroy() {
    bus.$off('on:loading', this.startLoading);
    bus.$off('off:loading', this.endLoading);
  },
};
</script>

<style lang="scss" scoped></style>
