<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default { name: 'App' }
</script>


<style>
html {
  font-size: 50px;
}
body {
  font-size: 14px;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
p {
  margin: 0;
}
button {
  border: none;
}
input {
  border: none;
}
</style>
