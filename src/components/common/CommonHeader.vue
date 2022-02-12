<template>
  <div class="header-nav">
    <nav class="common-padding navBar">
      <div class="navBar__left">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          class="hamburg_icon"
          @click="showMenu"
        />
        <router-link to="/main">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
      </div>

      <!--      @mouseover="mouseOver" @mouseleave="mouseLeave"-->
      <!--      <font-awesome-icon icon="fa-solid fa-chevron-right" />-->
      <div class="navBar__center">
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
      </div>

      <div class="navBar__service">
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

      <div class="navBar__right">
        <router-link to="/login">로그인</router-link>
        <router-link to="/cart">
          <font-awesome-icon icon="fa-solid fa-basket-shopping" />
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
    showMenu() {
      document.querySelector('.navBar__center').style.display = 'flex';
      document.querySelector('.navBar__service').style.display = 'flex';
    },
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  position: sticky;
  top: 0;
  background: map-get($basic-color, 'white');
}

.navBar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  #{&}__left {
    display: flex;
    align-items: center;

    .hamburg_icon {
      display: none;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }

  #{&}__service {
    display: none;
  }

  #{&}__center {
    ul {
      display: flex;
    }
  }
}

a {
  margin-right: 10px;
  text-decoration: black;
  color: map-get($basic-color, 'dark');
}

a:hover {
}

@media screen and (max-width: 700px) {
  .navBar {
    #{&}__left {
      flex: 1 1 55%;
      justify-content: space-between;

      a {
        margin: 0;
      }

      .hamburg_icon {
        display: block;
        font-size: 24px;
      }
    }

    #{&}__center {
      display: none;
      background: white;
      position: absolute;
      left: 0;
      top: 0;
      width: 85vw;
      height: 70vh;
      animation: show-slide 2s ease-out;

      ul {
        flex-direction: column;
        margin-top: 50px;
        margin-left: 15px;
        li {
          margin-bottom: 10px;
        }
      }
    }

    #{&}__service {
      display: none;
      background: white;
      flex-direction: row;
      position: absolute;
      left: 0;
      top: 70vh;
      width: 85vw;
      animation: show-slide 2s ease-out;

      ul {
        flex-direction: column;
        margin-top: 50px;
        margin-left: 15px;
        li {
          margin-bottom: 10px;
        }
      }
    }

    #{&}__right {
      display: flex;
      flex: 1 1 45%;
      justify-content: flex-end;
    }
  }
}

@keyframes show-slide {
  from {
    left: -400px;
    opacity: 0;
  }
  to {
    right: 200px;
    opacity: 1;
  }
}
</style>
