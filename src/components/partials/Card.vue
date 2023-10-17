<script>
export default {
name:'Card',
props:{
  title: String,
  originalTitle: String,
  lenguage: String,
  voto: Number,
  image: String
}
}

</script>

<template>
  <div class="col-3 my-3">
    <div class="card">
        <h1>{{ title }}</h1>
        <h1>{{ originalTitle  }}</h1>
        <h1>Lingua: {{ lenguage }}</h1>
        <h1>Voto: {{ voto }}</h1>
    </div>
  </div>
</template>



<style>

</style>