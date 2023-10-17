<script>
import { store } from '../data/store';
import Card from './partials/Card.vue';
export default {
  name:'Main',
  props:{
    title: String,
    type: String
  },
components:{
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
    
    <h1 class="text-center my-3 ">{{ title }}</h1>
    <div class="container">
      <div class="row">
        <Card v-for="item in store[type]"
        :key="item.id" 
        :item="item" 
        />
        
      </div>
    </div>
   
  </main>


  
</template>



<style lang="scss" scoped>

</style>