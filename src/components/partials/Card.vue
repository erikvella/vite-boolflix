<script>
import Stars from './Stars.vue'
export default {

name:'Card',

components:{
  Stars
},

data(){
  return{
    flags:['en' , 'it']
  }
},
methods:{
  getImagePath(img){
    return new URL (`../../assets/${img}.png` , import.meta.url).href
  }
},
props:{
  item: Object
}
}

</script>

<template>
  <div class="col-3 my-3">
    <div class="card">
    <div class="poster">
        <div v-if="item.poster_path" class="box-img text-center">
           <img :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`" :alt=" item.title || item.name">
      </div>
      
      <div v-else class="text-center">
           <h3>Titolo: {{ item.title || item.name}}</h3>
           <img src="-no-image-gallery.png" alt="no image">
      </div>
    </div>
     <div class="info">
      <h3 class="m-10">{{ item.title || item.name}}</h3>
        <h3 class="m-10">{{ item.original_title || item.original_name }}</h3>
        <img class="leng m-10" v-if="flags.includes(item.original_language)" :src="getImagePath(item.original_language)" alt="">
        <p v-else>Lingua: {{ item.original_language }}</p>
        
        <!-- <h3>Voto: {{ item.vote_average }}</h3> -->
       <Stars class="m-10" :vote="item.vote_average" />

       <p>Sinossi : {{ item.overview }}</p>
     </div>
        
    </div>
  </div>
</template>



<style lang="scss" scoped>

  .card{
    min-height: 450px;
  }
.leng{
  height: 40px;
  width: 80px;
  
}
.m-10{
  margin: 10px;
}

.poster{
  display: block;
  position: relative;
}
.info{
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
  max-height: 450px;
}
.card:hover .poster{
  display: none;
}

.card:hover .info{
  display: block;
}
</style>