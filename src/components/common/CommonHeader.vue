<template>
  <nav>
    <div class="left_nav">
      <router-link to="/main">
        <img src="@/assets/logo.png" alt="logo" />
      </router-link>
      <router-link to="/men">Men</router-link>
      <router-link to="/women"></router-link>
      <router-link to="/electronic">Electronic</router-link>
      <router-link to="/jewelery">Jewelery</router-link>
    </div>
    <div>
      <router-link to="/login">로그인</router-link>
      <router-link to="/cart">
        <i class="fas fa-shopping-bag"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables';
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: map-get($font-color, dark);
}
</style>
