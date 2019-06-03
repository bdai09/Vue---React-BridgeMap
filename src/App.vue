<template>
  <div id="app">
    <nav id="menu">
    <bridge-menu @change="bridgeSelected" />
    </nav>
    <div id="bridge-info">
    <p v-if="bridge" v-html="bridge.nameEncoded"></p>
    <p v-else>Bridge info goes here...</p>
    </div>
  </div>
</template>

<script>
import BridgeMenu from './components/BridgeMenu.vue';

export default {
  name: 'App',
  data: function(){
    return{
      bridge:null
    };
  },
  components:{
    BridgeMenu
  },
  methods:{
    bridgeSelected:function(bridge){
      this.bridge=bridge;
    }
  }
};
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
