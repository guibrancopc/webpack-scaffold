<template>
  <div>
    <h1>Webpack Scaffold</h1>
    <h3>A great way to organize your project without much abstraction.</h3>
    <div>
      <img class="webpack-logo rotating" :src="logo" alt="Webpack Logo">
    </div>
  </div>
</template>

<script>
import logo from './../../assets/images/webpack.svg';

export default {
  data() {
    return {
      logo,
    }
  }  
}
</script>

<style lang="scss">
.webpack-logo {
  max-width: 300px;
  margin: 30px;
}

-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 30s linear infinite;
  -moz-animation: rotating 30s linear infinite;
  -ms-animation: rotating 30s linear infinite;
  -o-animation: rotating 30s linear infinite;
  animation: rotating 30s linear infinite;
}
</style>