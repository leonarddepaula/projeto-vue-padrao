<template>
  <div>

    <h1  v-bind:class="classe">componente olá nundo {{ variavel }}</h1>
    <p>Link da API: {{ url_api }}</p>
    <p>Modo: {{ modo }}</p>
    <p>Token: {{ token }}</p>

  </div>
</template>

<script>
export default {
  data: () =>{
    return {
      variavel : process.env.VUE_APP_MINHA_VARIAVEL_DE_AMBIENTE,
      url_api: process.env.VUE_APP_API_URL,
      modo: process.env.VUE_APP_MODO,
      token: process.env.VUE_APP_TOKEN,
      classe: 'fundoVerde vermelho'
    }
  },
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .vermelho{
    color: red;
  }

  .fundoVerde {
    background-color: green;
  }
</style>
