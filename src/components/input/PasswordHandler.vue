<template>
  <div class="password__input">
    <label for="pwd">PASSWORD</label>
    <input id="pwd" type="password" placeholder="length 8~12" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.password__input {
  @include common-display();

  input {
    @include form-input();
  }
}
</style>
