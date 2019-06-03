<template>
  <div id="menu">
    <div v-if="status.errored">
    <p>Error: unable to load bridge</p>
    </div>
    <div v-else>
      <div v-if="status.loading">Loading...</div>
      <div v-else>
         <!-- use our MenuItem component, using HTML style kebab-case -->
         <!--:bridge="bridge", which will bind (v-bind) a 
         given bridge Object to this <menu-item>, passing it along as a prop. -->
        <menu-item
          v-for="bridge of bridges"
          :key="bridge.id"
          :bridge="bridge"
          @click="bridgeSelected"
          />
          <!--@click="bridgeSelected", which will register event listener for
         click event emitted by a MenuItem component. This is the other side of
          the event (the consumer) that we defined in MenuItem.vue.-->
      </div>
      </div>
    </div>
</template>

<style scoped>
#menu {
  height: 100%;
}
</style>

<script>
import MenuItem from './MenuItem.vue';
import getBridgeData from '../bridges.js';

export default {
  name: 'BridgeMenu',
  data:function(){
    return{
      status:{
        loading:false,
        errored:false
      },
      bridges:null
    }
  },
  components:{
    MenuItem
  },
  created: function(){
    this.loadBridges();
  },
  methods:{
    loadBridges:function(){
      this.status.loading=true;

      //use bridge.js to talk with REST API
      getBridgeData()
      .then(bridges=>{
        this.status.loading=false;
        this.bridges=bridges;
      })
      .catch(err=>{
        console.error('Cannot load bridge data',err.message);
        this.status.errored=true;
      });
    },
    bridgeSelected:function(bridge){
      // When the user clicks a menu item, emit a `change`
      // event for the menu control, along with bridge value
      this.$emit('change', bridge);
    }
  }
 
}
</script>
