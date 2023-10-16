<script>
export default {
name:'Card',
props:{
  title: String,
  originalTitle: String,
  lenguage: String,
  Voto: Number
}
}

</script>

<template>
  <div class="col-3 my-3">
    <div class="card">
        <h1>Titolo</h1>
        <h1>Titolo originale</h1>
        <h1>Lingua</h1>
        <h1>Voto</h1>
    </div>
  </div>
</template>



<style>

</style>