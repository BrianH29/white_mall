<template>
  <div>
    <Modal>
      <div slot="header" class="login__header">
        <span>LOGIN</span>
        <span>REGISTER</span>
      </div>

      <div slot="body">
        <form @submit.prevent="submitForm">
          <div class="login__id">
            <label for="id">ID</label>
            <input id="id" type="text" />
          </div>
          <div class="login__pwd">
            <label for="pwd">PASSWORD</label>
            <input id="pwd" type="password" />
          </div>
          <button class="loginBtn">LOGIN</button>
        </form>

        <div>
          <span>FIND ID</span>
          <span>FIND PWD</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/views/Modal.vue';

export default {
  components: {
    Modal,
  },
  methods: {
    submitForm() {
      console.log('submitForm : success');
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
  }
}

.login__id,
.login__pwd {
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;

  label {
    padding-bottom: 0.25em;
  }

  input {
    background-color: map-get($basic-color, inputBg);
    border: none;
    height: 1.5em;
  }
}

.loginBtn {
  background-color: map-get($basic-color, dim-bg);
  color: map-get($basic-color, light);
  font-size: map-get($font-size, xsmall);
  width: 100%;
  height: 2em;
  border: none;
}
</style>
