<!-- JS App -->
<script>
/* Import package */
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

/* Import components */
import AppCard from './components/AppCard.vue';

export default {
  components: {
    AppCard,
  },

  data() {
    return {
      /* Richiama store per utilizzare il file store.js come state management */
      store,
    }
  },
  mounted() {
    /* All'avvio dell'app lancia tali funzioni */
    this.getBrewShop();
  },
  methods: {

    /* Funzione che interroga l'API e mostra il risultato data all'interno della console  */
    getBrewShop() {
      axios.get(this.store.brewApi).then(result => {
        console.log(result.data)
        this.store.brewShops = result.data
      });
    },

  }
}
</script>

<!-- HTML App -->
<template>
  <div class="container">
    <div class="brewShops">
      <!-- Per ogni shop nell'array mi genera un AppCard passandogli i dati con i props dall'array -->
      <AppCard v-for="brewSingleShop in this.store.brewShops" :shop="brewSingleShop" />
    </div>
  </div>
</template>

<!-- CSS App -->
<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
}

.brewShops {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
