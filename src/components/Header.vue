<script>
import { store } from '../data/store';
export default {
name:'Header',
data(){
  return{
    store
  }
}
}
</script>

<template>
  <header>
    <div class="top-bar text-center py-4 ">
      <img src="logo-boolflix.png" alt="logo">
    </div>

    <!-- inizio della search bar -->

    <div class="container my-3">

<div class="row justify-content-around">
  <div class="col-3">
    <input v-model.trim="store.apiParams.query" type="text" class="form-control" placeholder="Inserisci un titolo">
  </div>




  <div class="col-3">
    <select v-model="store.type" class="form-select" aria-label="Default select example">
<option selected>Seleziona il tipo di prodotto</option>
<option value="tv">Serie</option>
<option value="movie">Film</option>
<option value="">All</option>
</select>
  </div>

  <div class="col-3">
    <button @click="$emit('startSearch')" class="btn btn-danger">Cerca</button>
  </div>
</div>

</div>
  </header>
</template>



<style lang="scss" scoped>
header{
  width: 100vw;
  height: 210px;
  background-color: rgb(37, 36, 36);
}

img{
  height: 60px;
}
</style>