<template>
  <div class="email__input">
    <label :for="inputType">{{ title }}</label>
    <input :id="inputType" :type="inputType" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: '',
      title: '',
    };
  },
  props: {
    inputType: {
      type: String,
    },
  },
  created() {
    switch (this.inputType) {
      case 'email':
        this.placeholder = 'vue@whitemall.com';
        this.title = 'EMAIL';
        break;
      case 'phone':
        this.placeholder = '010-4332-0987';
        this.title = 'PHONE NO.';
        break;
      case 'password':
        this.placeholder = 'length 8~12';
        this.title = 'PASSWORD';
        break;
      case 'password2':
        this.placeholder = 'length 8~12';
        this.title = 'RECHECK PASSWORD';
        break;
      default:
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
.email__input {
  @include common-display();

  input {
    @include form-input();
  }
}
</style>
