<script>
export default {
name:'Card',
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
      <div v-if="item.poster_path" class="box-img text-center">
           <img :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`" :alt=" item.title || item.name">
      </div>
      <div class="text-center" v-else>
           <h3>{{ item.title || item.name}}</h3>
           <img src="-no-image-gallery.png" alt="no image">
      </div>
        <h3>{{ item.title || item.name}}</h3>
        <h3>{{ item.original_title || item.original_name }}</h3>
        <img class="leng" v-if="flags.includes(item.original_language)" :src="getImagePath(item.original_language)" alt="">
        <p v-else>Lingua: {{ item.original_language }}</p>
        <h3>Voto: {{ item.vote_average }}</h3>
        <div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

  .card{
    min-height: 450px;
  }
.leng{
  height: 80px;
  
}

</style>