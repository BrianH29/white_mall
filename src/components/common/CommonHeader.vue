<template>
  <div>
    <nav>
      <div class="left_nav">
        <router-link to="/main">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
        <div @mouseover="mouseOver" @mouseleave="mouseLeave">
          <router-link to="/men">Men</router-link>
        </div>
        <div @mouseover="mouseOver" @mouseleave="mouseLeave">
          <router-link to="/women">Women</router-link>
        </div>
        <div @mouseover="mouseOver" @mouseleave="mouseLeave">
          <router-link to="/jewelery">Jewelery</router-link>
        </div>
        <div @mouseover="mouseOver" @mouseleave="mouseLeave">
          <router-link to="/electronic">Electronic</router-link>
        </div>
      </div>
      <div>
        <router-link to="/login">로그인</router-link>
        <router-link to="/cart">
          <i class="fas fa-shopping-cart"></i>
        </router-link>
      </div>
    </nav>

    <NavBar :navShow="navStatus"></NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/import/NavBar.vue';
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navStatus: false,
    };
  },
  methods: {
    mouseOver() {
      this.navStatus = true;
    },
    mouseLeave() {
      this.navStatus = false;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px 10px 10px;
}

.left_nav {
  display: flex;
  align-items: center;
}

img {
  width: 40px;
  height: 40px;
}

a {
  margin-right: 10px;
  text-decoration: black;
  color: map-get($basic-color, dark);
}

a:hover {
}
</style>
