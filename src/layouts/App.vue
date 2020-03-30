<template>
  <div id="app">
    <loading v-if="$store.state.bLoading"/>
    <Header v-if="$store.state.bNav"/>
    <transition
      enter-active-class = "animated bounceInLeft"
      leave-active-class = "animated bounceOutRight"
    >
      <keep-alive>
        <router-view style="position: absolute;left:0;top:0"></router-view>
      </keep-alive>
    </transition>
    
    <Footer v-show="$store.state.bFoot"/>
  </div>
</template>

<script>
  
import Header from './Header.vue';
import Footer from './Footer.vue';
import loading from '../components/loading.vue';

export default {
  name: 'App',
  components: {
    Header,Footer,loading
  },
  watch:{
  	$route:{//路由监听，属性检测
      handler(nextValue,PrevValue){
        console.log('路由变化了',nextValue);
        
        let path = nextValue.path;
        
        if(/home|follow|column/.test(path)){//home follow column
          // this.$root.bNav=this.$root.bFoot=true;
          this.$store.commit('UPDATE_NAV',true)
          this.$store.commit('UPDATE_FOOT',true)
        }
        
        if(/detail|login|reg/.test(path)){//detial login reg
          // this.$root.bNav=this.$root.bFoot=false;
          this.$store.commit('UPDATE_NAV',false)
          this.$store.commit('UPDATE_FOOT',false)
        }
        
        if(path.includes('/user')){//user
          // this.$root.bNav=false;
          // this.$root.bFoot=true;
          this.$store.commit('UPDATE_NAV',false)
          this.$store.commit('UPDATE_FOOT',true)
        }
        
      },
      immediate:true
    }
  }
}
</script>

<style>

</style>
