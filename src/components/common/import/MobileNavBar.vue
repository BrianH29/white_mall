<template>
  <div v-if="mobileNav">
    <transition name="fade">
      <div class="dim">
        <font-awesome-icon
          icon="fa-solid fa-x"
          class="close_nav"
          @click="closeNav"
        />
      </div>
    </transition>
    <transition>
      <!--      @mouseover="mouseOver" @mouseleave="mouseLeave"-->
      <!--      <font-awesome-icon icon="fa-solid fa-chevron-right" />-->
      <div class="mobile__nav c-space-between">
        <ul>
          <li>
            <router-link to="/men">Men</router-link>
          </li>
          <li>
            <router-link to="/women">Women</router-link>
          </li>
          <li>
            <router-link to="/jewelery">Jewelery</router-link>
          </li>
          <li>
            <router-link to="/electronic">Electronic</router-link>
          </li>
        </ul>

        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-store" /> Find Store
            <router-link to="#"> </router-link>
          </li>
          <li>
            <router-link to="#">
              <font-awesome-icon icon="fa-solid fa-circle-info" />
              Customer Service
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <font-awesome-icon icon="fa-solid fa-user" /> Login
            </router-link>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            Republic of Korea
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    mobileNav: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeNav() {
      this.$emit('clickEvent', 'closeNav');
    },
  },
};
</script>

<style lang="scss" scoped>
.close_nav {
  position: absolute;
  right: 32px;
  top: 50vh;
  color: white;
  font-size: 28px;
}

.mobile__nav {
  background: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 85vw;
  height: 100vh;
  animation: show-slide 1s ease-out;

  ul {
    flex-direction: column;
    margin-top: 50px;
    margin-left: 15px;
    li {
      margin-bottom: 10px;
      font-size: 22px;
    }
  }
}

.dim {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  height: 100vh;
}
</style>
