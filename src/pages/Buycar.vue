<template>
  <div class="buycar">
    
    <h3>buycar</h3>
    <h3>buycar</h3>
    <h3>buycar</h3>
    <h3>buycar</h3>
    <h3>buycar</h3>
    
    <li
      v-for="(item,index) of buycar"
      :key="item._id"
    >
     {{item}}/{{index}}
      <button @click="changeItem({_id:item._id,num:1})">+</button>
      <button @click="changeItem({_id:item._id,num:-1})">-</button>
      <button @click="removeItem({_id:item._id})">×</button>
    </li>
    
    <button @click="clearBuycar" v-show="buycar.length>0">清空购物车</button>
    
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex';
  export default {
    name: 'buycar',
    props: {},
    components: {},
    mounted() {},
    updated() {},
    methods:mapActions('buycar',['changeItem','clearBuycar','removeItem']),
    computed:mapState('buycar',['buycar'])
  }
</script>

<style scoped>
  .buycar {}
</style>
