import { reactive } from 'vue';

export const store = reactive({
  apiUrl:'https://api.themoviedb.org/3/search/movie',
  apiKey: '9962f1aa715593ba3aaac38a4bb5036b',
  fullApi: 'https://api.themoviedb.org/3/search/movie?api_key=9962f1aa715593ba3aaac38a4bb5036b&query=barbie',
  titleToSearch:'',
  tipesOfProduct: ['All' , 'Serie' , 'Film'],
  moviesList:[]
})