<template>
  <div class="newArrival">
    <div>
      <img :src="require('@/assets/img/mainImg.jpeg')" alt="" />
    </div>
    <h1>NEW ARRIVAL</h1>
    <h3>새로운 무드를 더해 줄 최신 컬랙션</h3>
    <button>women arrival</button>
    <button>men arrival</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.newArrival {
  //background-image: url('../../assets/img/mainImg.jpeg');
  //background-size: 100%;
  //background-repeat: no-repeat;
  //height: 100%;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  //color: white;
  img {
    width: 100%;
  }

  h1 {
    font-size: map-get($font-size, 'xlarge');
    font-weight: 700;
    margin-bottom: 0.3em;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 0.3em;
  }

  button {
    @include common-btn('', 'white', 5vh, 20vw, '');
    margin-bottom: 0.3em;
  }
}
</style>
