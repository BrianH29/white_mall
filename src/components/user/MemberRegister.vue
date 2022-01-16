<template>
  <div class="register__form">
    <h1>REGISTER</h1>
    <form @submit.prevent="submitRegisterForm">
      <InputHandler :inputType="email"></InputHandler>
      <InputHandler :inputType="phone"></InputHandler>
      <InputHandler :inputType="password"></InputHandler>
      <InputHandler :inputType="password2"></InputHandler>
      <button>REGISTER MEMBER</button>
    </form>
  </div>
</template>

<script>
import bus from '@/utils/bus';
import InputHandler from '@/components/input/InputHandler';
// import { v4 as uuidv4 } from 'uuid';
// import { validate as uuidValidate } from 'uuid';

export default {
  components: {
    InputHandler,
  },
  data() {
    return {
      email: 'email',
      phone: 'phone',
      password: 'password',
      password2: 'password2',
    };
  },
  methods: {
    submitRegisterForm() {
      console.log('register button');
      // const name = 'brian';
      // const uuid = uuidv4(name);

      // const check = uuidValidate(this.uuid);

      this.$store.dispatch('LOGIN');
    },
  },
  mounted() {
    bus.$emit('off:loading');
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-weight: 700;
  margin-top: 50px;
}
form {
  @include common-display();
  margin: 50px 100px;
}

button {
  @include common-btn();
}

button:hover {
  background: map-get($basic-color, lightDark);
}
</style>
