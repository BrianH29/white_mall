<template>
  <div class="email__input">
    <label :for="inputType">{{ title }}</label>
    <input
      :id="inputType"
      :type="inputType"
      :maxlength="maxlength"
      :placeholder="placeholder"
      @input="handleInput"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: '',
      title: '',
      maxlength: '',
      onfocus: false,
      mask: '',
    };
  },
  props: {
    inputType: {
      type: String,
    },
    inputVal: {
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
        this.maxlength = '13';
        this.mask = "'XXX-XXX-XXX'";
        break;
      case 'password':
        this.placeholder = 'length 8~12';
        this.title = 'PASSWORD';
        break;
      default:
        break;
    }
  },
  methods: {
    handleInput($event) {
      this.$emit('input', $event.target.value);
    },
    // focusNext($event, nextRefName) {
    //   console.log('focusNext : ', $event);
    //   console.log('nextRefName : ', nextRefName);
    //
    //   const nextNode = this.$refs[nextRefName];
    //   console.log('nextNode : ', nextNode);
    //   this.$utils.next($event, nextNode);
    // },
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
