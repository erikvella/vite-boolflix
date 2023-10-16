<script>
import { store } from '../data/store';
import SearchBar from './partials/SearchBar.vue';
import Card from './partials/Card.vue';
export default {
components:{
SearchBar,
Card
  },

  data(){
    return{
      store
    }
  },
name:'Main'
}
</script>

<template>



  <main>
    <SearchBar />
    
    <div class="container">
      <div class="row">
        <Card v-for="card in store.moviesList"
        :key="card.id" />
        
      </div>
    </div>
   
  </main>


  
</template>



<style lang="scss" scoped>

</style>