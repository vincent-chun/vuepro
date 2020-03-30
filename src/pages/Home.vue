<template>
  <div class="Home">
    
    <swiper
      :data="$store.state.banner.banner"
      apiName="banner"
    />
    
    <div class="home-m-l-r">
      <!-- <Cell :data="{_id:2342343,title:'啥地方',des:'撒打发斯蒂芬'}"/> -->
      <!-- <Cell :index="0" :data="{_id:2342343,title:'啥地方',des:'撒打发斯蒂芬'}"/> -->
      <Cell
        v-for="(item,index) of $store.state.home.home"
        :key="item._id"
        :data="item"
        :index="index"
        api-name="home"
      />
    </div>
    
    
  </div>
</template>

<script>
  import swiper from '../components/swiper.vue'
  import Cell from '../components/Cell.vue'
  export default {
    name:'Home',
    props:{},

    components:{
      swiper,Cell
    },
    activated(){
      
      this.$store.dispatch(`home/${this.$types.HOME}`)
      this.$store.dispatch(`banner/${this.$types.BANNER}`)
      
    },
    updated(){
      console.log('home updated');
    },
    methods:{}
  }
</script>

<style scoped>
  .Home{
    /* background: #999999; */
  }
  .home-m-l-r{
    margin: 0 0.4rem;
  }
</style>
