const express =  require('express')
const app = express()

// carregando arquivos estaticos
app.use(express.static(__dirname + '/dist/'))

// responder a requisição feita para o servidor web por meio da rota  get

app.get('/', function(req,res){
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(3000, function(){
    console.log('servidor web rodando com Express');
})