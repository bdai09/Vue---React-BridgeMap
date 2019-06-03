<template>
  <div id="app">
    <nav id="menu">
    menu goes here....
    </nav>
    <div id="bridge-info">
    Bridge info goes here....
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return{};
  }
}
</script>

<style>
html,
body,
main {
  height: 100%;
  max-height: 100%;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
}

main {
  display: flex;
  flex-direction: column;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

@media screen and (max-width: 400px) {
  #app {
    flex-direction: column;
  }
}

#menu {
  flex: 1;
  overflow: auto;
}

#bridge-info {
  flex: 2;
}
</style>
