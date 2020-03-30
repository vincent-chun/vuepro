<template>
  <div class="Column">
   <Cell
     v-for="item of $store.state.column.column"
     :key="item._id"
     :data="item"
     api-name="column"
     :isAdd="true"
     @add-item="addItem(item)"
   />
  </div>
</template>

<script>
  import Cell from '../components/Cell'
  import {mapActions} from 'vuex';
  export default {
    name:'Column',
    props:{},
    data(){
      return {
        column:[]
      }
    },
    components:{
      Cell
    },
    activated(){
      this.$store.dispatch('column/'+this.$types.COLUMN)
    },
    updated(){},
    methods:mapActions('buycar',['addItem'])
  }
</script>

<style scoped>
  .Column{
    margin-top: .6rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
</style>
