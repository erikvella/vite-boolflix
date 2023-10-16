<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';

export default {

components:{
     Header,
     Main
  },
name : 'App',

data(){
  return{
    store
  }
},

methods:{
  getApi(){
    axios.get(store.fullApi

    // {
    //   params:{
    //     title:store.titleToSearch
    //   }
    // }
    
    )
    .then(res => {
      store.moviesList = res.data.results
      console.log(store.moviesList);
    })
    .catch(err =>{
      console.log(err);
    })
  }
},
mounted(){
  this.getApi()
}
}
</script>

<!-- inizio del template -->
<template>
  

  <Header />
  <Main />


  
</template>


<style lang="scss">

@use './scss/main.scss';


</style>