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
    store,
    message: 'Effettuare una ricerca'
  }
},

methods:{
  getApi(type , isPopular = false){

    const apiUrl = !isPopular ? store.apiUrl + type : 'https://api.themoviedb.org/3/movie/popular';

    axios.get(apiUrl  ,

    {
      params: store.apiParams
    })
    .then(res => {
      store[type] = res.data.results;
      console.log(store.movie);
      if(store.movie.length === 0){
      this.message = 'Film non disponibile!'
      }
    })
    .catch(err =>{
      console.log(err);
    })
  },
  startSearch(){
    store.movie = [],
    store.tv = []
    if(store.type === ''){
    this.getApi('movie')
    this.getApi('tv')
    }else{
      this.getApi(store.type)
    }
    
  }
},
mounted(){
  this.getApi('movie' , true )
}
}
</script>

<!-- inizio del template -->
<template>
  

  <Header @startSearch="startSearch" />
  <Main title="Film" type="movie"
  v-if="store.movie.length > 0" />
  <Main title="Serie TV" type="tv"
  v-if="store.tv.length > 0" />

    <h1 class="text-center" v-else>{{ message }}</h1>


  
</template>


<style lang="scss">

@use './scss/main.scss';


</style>