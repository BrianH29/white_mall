<template>
  <div>
    <transition name="fade">
      <div v-show="navShow" class="dim"></div>
    </transition>
    <transition name="slideY">
      <div v-if="navShow" class="nav-wrapper">
        <span>{{ test }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    navShow: {
      type: Boolean,
    },
  },
  data() {
    return {
      test: 'what are you doing',
    };
  },
};
</script>

<style lang="scss" scoped>
.dim {
  background: map-get($basic-color, 'white');
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: 100;
}

.nav-wrapper {
  position: fixed;
  background: map-get($basic-color, 'white');
  width: 100%;
  height: 5em;
  z-index: 101;
}
</style>
