<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #e6ecf0;
  }

  button:focus {
    outline: none;
  }

  #app {
    text-align: center;
    display: flex;
    justify-content: center;
}
</style>
