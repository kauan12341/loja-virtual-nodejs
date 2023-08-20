const db = require("./db");

const express = require("express");
const app = express();
const http = require("http")
const server = http.createServer(app);
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")
const readline = require("readline")

const port = process.env.PORT || 5000;
require("dotenv").config();

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")))

app.get("/",async (req,res)=>{
    const produto = await db.selectProdutos();
    res.render("index.ejs",{db:produto})
})

app.get("/produtos",async(req,res)=>{
    const produto = await db.selectProdutos();

    res.render("pesquisar-produto.ejs",{db:produto})
})

app.post("/produtos/resultados",async(req,res)=>{
    //let produtoPreco = req.body.valorcontado;
    let tipoRoupa = req.body.roupa;
    let tipoEstilo = req.body.estilo;
    let tamanho = req.body.tamanho;
    let generoRoupa = req.body.genero;
    const precoEspecifico = await db.selectProdutoPrecoEspecifico(tipoRoupa,tipoEstilo,tamanho,generoRoupa)
    
    res.render("pesquisar-produto.ejs",{db:precoEspecifico})
})

app.post("/produtos/pesquisados",async(req,res)=>{
    let searchInput = req.body.searchinput;
    const pesquisaItens = await db.selectProdutoPesquisadoEspecifico(searchInput,searchInput,searchInput,searchInput,searchInput)

    res.render("pesquisar-produto.ejs",{db:pesquisaItens})
})

app.post("/produtos/escolhido",async(req,res)=>{
    let produto = req.body.produto;

    const espProduto = await db.selectProdutoEspecifico(produto);
    res.render("produto-escolhido.ejs",{db:espProduto})
})

/*const teste = function(req,res,next){
    res.render("tela-login-adm.ejs")
    
    const email= req.body.email;
    const senha = req.body.senha;

    console.log(email+senha)


    if(email=="eu@loja.com" && senha=="123456"){
        next();
    }
    else{
        res.render("tela-login-adm.ejs")
    }
}

app.get("/adm-page",teste,async(req,res)=>{
    res.render("adm-page.ejs")
})
app.post("/awesome",async(req,res)=>{
    let imagemProduto = req.body.imagemProduto;
    let nomeProduto = req.body.nomeProduto;
    let tipoRoupa = req.body.tiporoupa;
    let estiloRoupa = req.body.estiloroupa;
    let tamanhoRoupa = req.body.tamanhoroupa;
    let descricaoProduto = req.body.descricaoProduto;
    let marcaProduto = req.body.marcaProduto;
    let precoProduto = req.body.precoProduto;
    let generoRoupa = req.body.generoroupa;
    let tipoTecido = req.body.tipodetecido;
    let precoParcelado = precoProduto/12;
    let linkAfiliados = req.body.afiliacaoProduto

    const inserirProduto = await db.inserirProduto(nomeProduto,precoProduto,tipoRoupa,marcaProduto,tamanhoRoupa,descricaoProduto,imagemProduto,estiloRoupa,generoRoupa,tipoTecido,precoParcelado,linkAfiliados);
    res.render("adm-page-cadastro-do-produto.ejs")
});
app.post("/awesome/file",function(req,res){
    let produtoArquivo = req.body.produtoaquivo;
    
    const line = readline.createInterface({
        input:fs.createReadStream(produtoArquivo),
    })

    line.on("line", async (data) => {
        
        let csv = data.split(";");
        
        let nomeProduto = csv[0];
        let precoProduto = csv[1];
        let preco = parseFloat(precoProduto)
        let tipoRoupa = csv[2];
        let marcaProduto = csv[3];
        let tamanhoRoupa = csv[4];
        let descricaoProduto = csv[5];
        let imagemProduto = csv[6];
        let estiloRoupa = csv[7];
        let generoRoupa = csv[8];
        let tipoTecido = csv[9];
        let precoParcelado = Math.floor(preco/12);
        let linkAfiliados = csv[10];

        inserirProdutoArquivo = await db.inserirProduto(nomeProduto,preco,tipoRoupa,marcaProduto,tamanhoRoupa,descricaoProduto,imagemProduto,estiloRoupa,generoRoupa,tipoTecido,precoParcelado,linkAfiliados);

        })
        
    res.render("adm-page-cadastro-do-produto.ejs")
})*/

server.listen(port, () => console.log("Aberto na porta "+port));