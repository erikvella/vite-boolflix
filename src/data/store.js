import { reactive } from 'vue';

export const store = reactive({
  // https://api.themoviedb.org/3/movie/popular
  apiUrl:'https://api.themoviedb.org/3/search/',
  apiParams:{
    api_key: '9962f1aa715593ba3aaac38a4bb5036b',
    query:'',
    language: 'it-IT',
   },
 
  movie:[],
  tv:[],
  type:''
})