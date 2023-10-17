<script>
export default {
name:'Card',
props:{
  item: Object
}
}

</script>

<template>
  <div class="col-3 my-3">
    <div class="card">
        <h3>{{ item.title || item.name}}</h3>
        <h3>{{ item.original_title || item.original_name }}</h3>
        <h3>Lingua: {{ item.original_language }}</h3>
        <h3>Voto: {{ item.vote_average }}</h3>
        <div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
    </div>
  </div>
</template>



<style>

</style>