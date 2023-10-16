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
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=9962f1aa715593ba3aaac38a4bb5036b&query=barbie'

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


<template>
  

  <Header />
  <Main />


  
</template>


<style lang="scss">

@use './scss/main.scss';


</style>