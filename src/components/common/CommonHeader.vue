<template>
  <div class="header-nav">
    <nav class="common-padding navBar">
      <div class="navBar__left">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          class="hamburg_icon"
          @click="clickEvent"
        />
        <router-link to="/main">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
      </div>

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
            <router-link to="/electronics">Electronic</router-link>
          </li>
        </ul>
      </div>

      <div class="navBar__right d-flex">
        <router-link to="/login">로그인</router-link>
        <router-link to="/cart">
          <font-awesome-icon icon="fa-solid fa-basket-shopping" />
        </router-link>
      </div>
    </nav>

    <NavBar :navShow="navStatus"></NavBar>
    <MobileNavBar
      :mobileNav="mobileNav"
      @clickEvent="clickEvent"
    ></MobileNavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/import/NavBar.vue';
import MobileNavBar from '@/components/common/import/MobileNavBar';
export default {
  components: {
    MobileNavBar,
    NavBar,
  },
  data() {
    return {
      navStatus: false,
      mobileNav: false,
    };
  },
  methods: {
    mouseOver() {
      this.navStatus = true;
    },
    mouseLeave() {
      this.navStatus = false;
    },
    clickEvent(sort) {
      switch (sort) {
        case 'closeNav':
          this.mobileNav = false;
          break;
        default:
          // document.querySelector('.navBar__center').style.display = 'flex';
          // document.querySelector('.navBar__service').style.display = 'flex';
          this.mobileNav = true;
          break;
      }
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
    flex: 1 1 5%;
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
    flex: 1 1 80%;

    ul {
      display: flex;
    }
  }

  #{&}__right {
    flex: 1 1 15%;
    justify-content: flex-end;
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
    }

    #{&}__right {
      display: flex;
      flex: 1 1 45%;
      justify-content: flex-end;
    }
  }
}
</style>
