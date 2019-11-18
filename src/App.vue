<template>
  <div id="app" class="container">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
.container {
  padding-top: 50px;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Sans Unicode', Verdana;
}

.nav a {
  color: #3F51B5;
}
</style>
