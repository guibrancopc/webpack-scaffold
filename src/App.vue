<template>
  <div id="app" class="container">
    <nav class="nav">
      <router-link to="/">Home</router-link> | 
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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.nav a {
  color: #3F51B5;
}
</style>
