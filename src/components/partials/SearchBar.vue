<script>
import { store } from '../../data/store';
export default {
name:'SearchBar',
data(){
  return{
    store
  }
}
}

</script>

<template>

  <div class="container my-3">

    <div class="row justify-content-around">
      <div class="col-3">
        <input type="text" class="form-control" placeholder="Inserisci un titolo">
      </div>

      <div class="col-3">
        <select class="form-select" aria-label="Default select example">
  <option selected>Seleziona il tipo di prodotto</option>
  <option value="Serie">Serie</option>
  <option value="Film">Film</option>
  <option value="All">All</option>
</select>
      </div>

      <div class="col-3">
        <button class="btn btn-success">Cerca</button>
      </div>
    </div>
    
  </div>

</template>



<style>

</style>