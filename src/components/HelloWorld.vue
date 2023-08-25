<template>
  <div>

    <h1>componente olá nundo {{ variavel }}</h1>
    <p>Link da API: {{ url_api }}</p>
    <p>Modo: {{ modo }}</p>
    
  </div>
</template>

<script>
export default {
  data: () =>{
    return {
      variavel : process.env.VUE_APP_MINHA_VARIAVEL_DE_AMBIENTE,
      url_api: process.env.VUE_APP_API_URL,
      modo: process.env.VUE_APP_MODO
    }
  },
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
