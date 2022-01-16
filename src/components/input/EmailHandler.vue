<template>
  <div class="email__input">
    <label for="email">EMAIL</label>
    <input id="email" type="email" placeholder="vue@whitemall.com" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.email__input {
  @include common-display();

  input {
    @include form-input();
  }
}
</style>
