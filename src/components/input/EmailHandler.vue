<template>
  <div class="email__input">
    <label :for="inputType">{{ inputType }}</label>
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
