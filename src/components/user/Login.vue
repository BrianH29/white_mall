<template>
  <div>
    <Modal>
      <div slot="header" class="login__header">
        <span>LOGIN</span>
        <span @click="memberRegister">REGISTER</span>
      </div>

      <div slot="body">
        <form @submit.prevent="submitForm">
          <InputHandler :inputType="email"></InputHandler>
          <InputHandler :inputType="password"></InputHandler>
          <button class="loginBtn">LOGIN</button>
        </form>

        <div class="login__identifier">
          <span>FIND ID</span>
          <span>FIND PWD</span>
        </div>
      </div>

      <div slot="footer">
        <button>KAKAO</button>
        <button>NAVER</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/views/Modal.vue';
import InputHandler from '@/components/input/InputHandler';

export default {
  components: {
    Modal,
    InputHandler,
  },
  data() {
    return {
      email: 'email',
      password: 'password',
    };
  },
  methods: {
    submitForm() {
      console.log('submitForm : success');
    },
    memberRegister() {
      this.$router.push('/register');
    },
  },
};
</script>

<style lang="scss" scoped>
.login__header {
  display: flex;
  justify-content: space-between;
  font-size: map-get($font-size, xsmall);
  padding-bottom: 0.25em;
  border-bottom: 1px solid map-get($basic-color, lightDark);

  span:nth-child(2) {
    color: map-get($basic-color, lightDark);
    cursor: pointer;
  }
}

.loginBtn {
  @include common-btn();
  font-size: map-get($font-size, xsmall);
  width: 100%;
}

.loginBtn:hover {
  background-color: map-get($basic-color, lightDark);
}

.login__identifier {
  display: flex;
  padding-top: 2em;
  font-size: 12px;

  span:nth-child(1) {
    padding-right: 1em;
  }
}
</style>
