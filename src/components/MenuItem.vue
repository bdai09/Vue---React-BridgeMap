
<template>
  <div 
  v-bind:title="bridge.name"
  @click="handleClick"
  v-html="bridge.nameEncoded">
  </div>
</template>

<style scoped>
div{
  background-color: #0b3954;
  color: #b5bec6;
  cursor: pointer;
  padding: 8px;
  /* Place a transparent border on all elements, so they don't change width on hover */
  border-left: 3px solid transparent;

  /* Instead of wrapping or cropping, show ... if the name is too long */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
div: hover{
     color: #C7DBE6;
  border-left: 3px solid #bfb1c1;
}
</style>

//exports an Object that defines a name, and accepts a prop from its parent, in this case a bridge Object.
//When the user clicks on the DOM element, we want to emit a custom event named 'click'
// However, our MenuItem's click event will be a higher-level than a DOM click event,
// in that we'll also include the bridge that this MenuItem represents.
<script>
export default{
    name:'MenuItem',
    props:['bridge'],
    methods:{
        handleClick:function(){
            this.$emit('click',this.bridge);
        }
    }
}
</script>