<template>
  <div class="listView common-padding">
    <div
      v-for="(item, index) in productList"
      :key="index"
      class="listView__column"
    >
      <img :src="item.image" alt="" />
      <span class="title">{{ item.title }}</span>
      <span>${{ item.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    productList() {
      return this.$store.state.products.categoryProduct;
    },
  },
};
</script>

<style lang="scss" scoped>
.listView {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  #{&}__column {
    display: flex;
    flex-direction: column;
    justify-content: end;

    img {
      align-self: center;
      width: 100%;
    }

    span {
      margin-top: 0.5rem;
      font-size: 12px;
      color: map-get($basic-color, 'lightDark');
    }
  }
}

.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

@media screen and (max-width: 700px) {
  .listView {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    #{&}__column {
      img {
        align-self: center;
        width: 80%;
      }
    }
  }
}
</style>
