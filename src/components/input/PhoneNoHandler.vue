<template>
  <div class="phone__input">
    <label for="phone">PHONE NO.</label>
    <input id="phone" type="text" placeholder="010-4332-0987" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.phone__input {
  @include common-display();

  input {
    @include form-input();
  }
}
</style>
