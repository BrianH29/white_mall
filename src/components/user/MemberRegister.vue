<template>
  <div class="register__form">
    <h1>REGISTER</h1>
    <form @submit.prevent="submitRegisterForm">
      <EmailHandler :inputType="email"></EmailHandler>
      <PhoneNoHandler></PhoneNoHandler>
      <PasswordHandler></PasswordHandler>
      <PasswordHandler></PasswordHandler>
      <button>REGISTER MEMBER</button>
    </form>
  </div>
</template>

<script>
import bus from '@/utils/bus';
import EmailHandler from '@/components/input/EmailHandler';
import PhoneNoHandler from '@/components/input/PhoneNoHandler';
import PasswordHandler from '@/components/input/PasswordHandler';

export default {
  components: {
    PasswordHandler,
    PhoneNoHandler,
    EmailHandler,
  },
  data() {
    return {
      email: 'email',
    };
  },
  methods: {
    submitRegisterForm() {
      console.log('register button');
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
