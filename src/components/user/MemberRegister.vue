<template>
  <div class="register__form">
    <h1>REGISTER</h1>
    <form @submit.prevent="submitRegisterForm">
      <InputHandler :inputType="email.type" v-model="email.val"></InputHandler>
      <InputHandler
        :inputType="phone.type"
        maxlength="13"
        v-model="phone.val"
        v-mask="'XXX-XXXX-XXXX'"
        @keypress="focusNext($event, 'password')"
      ></InputHandler>
      <InputHandler
        :inputType="password.type"
        ref="password"
        v-model="password.val"
      ></InputHandler>
      <!--      <input-->
      <!--        type="text"-->
      <!--        id="phone"-->
      <!--        ref="phone"-->
      <!--        v-model="phone.val"-->
      <!--        v-mask="'XXX-XXXX-XXXX'"-->
      <!--        maxlength="13"-->
      <!--        @keypress="focusNext($event, 'password')"-->
      <!--      />-->
      <!--      <input-->
      <!--        type="password"-->
      <!--        id="password"-->
      <!--        ref="password"-->
      <!--        v-model="password.val"-->
      <!--      />-->
      <button>REGISTER MEMBER</button>
    </form>
  </div>
</template>

<script>
import bus from '@/utils/bus';
import InputHandler from '@/components/input/InputHandler';
import { mask } from 'vue-the-mask';

export default {
  directives: {
    mask,
  },
  components: {
    InputHandler,
  },
  data() {
    return {
      email: {
        type: 'email',
        val: '',
      },
      phone: {
        type: 'phone',
        val: '',
        onfocus: false,
      },
      password: {
        type: 'password',
        val: '',
        onfocus: false,
      },
    };
  },
  methods: {
    async submitRegisterForm() {
      console.log('register button');
      bus.$emit('on:loading');

      try {
        const userData = {
          email: this.email,
          phone: this.phone,
          pwd: this.password,
        };
        await this.$store.dispatch('registerMember', userData);
        bus.$emit('off:loading');
      } catch (error) {
        console.log(error.response.data);
      } finally {
        this.initForm();
      }
    },
    focusNext($event, nextRefName) {
      console.log('listener : ', this.$refs);
      console.log('listener : ', this.$listeners);

      console.log('focusNext : ', $event);
      console.log('nextRefName : ', nextRefName);
      const nextNode = this.$refs[nextRefName];
      console.log('nextNode : ', nextNode);
      this.$utils.next($event, nextNode);
    },
    initForm() {},
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
