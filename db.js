const { accessSync } = require("fs");

async function connect(){
    if(global.connection && global.connection.state !=="disconnected"){
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/produtos_da_loja_virtual")
    console.log("conectou no mysql!!!")
    global.connection = connection;
    return connection;
}
//nome_do_produto,FORMAT(preco,2,'de_DE'),tipos_de_roupa,marca_de_roupa,tamanho,descricao_do_produto,imagem_do_produto,estilo,genero,id
async function selectProdutos(){
    const conn =  await connect();
    const [rows] = await conn.query("SELECT * FROM produtos;");
    return rows;
}

async function selectProdutoEspecifico(id){
    const conn =  await connect();
    const [rows] = await conn.query("SELECT * FROM produtos WHERE id=?",[id])
    return rows;
}

async function selectProdutoPrecoEspecifico(tipo_de_roupa,estilo,tamanho,genero){
    const conn =  await connect();
    const [rows] = await conn.query("SELECT * FROM produtos WHERE (tipos_de_roupa=? AND estilo=? AND tamanho=? AND genero=?)",[tipo_de_roupa,estilo,tamanho,genero])
    return rows;
}

async function selectProdutoPesquisadoEspecifico(nome_do_produto,tipo_de_roupa,estilo,tipo_de_tecido,marca_de_roupa){
    const conn =  await connect();
    const [rows] = await conn.query("SELECT * FROM produtos WHERE ?=nome_do_produto OR ?=tipos_de_roupa OR ?=estilo OR ?=tipo_de_tecido OR ?=marca_de_roupa",[nome_do_produto,tipo_de_roupa,estilo,tipo_de_tecido,marca_de_roupa])
    return rows; 
}

async function inserirProduto(nome_do_produto,preco,tipos_de_roupa,marca_de_roupa,tamanho,descricao_do_produto,imagem_do_produto,estilo,genero,tipo_de_tecido,preco_parcelado,links_afiliados){
    const conn =  await connect();
    const sql = "INSERT INTO produtos(nome_do_produto,preco,tipos_de_roupa,marca_de_roupa,tamanho,descricao_do_produto,imagem_do_produto,estilo,genero,tipo_de_tecido,preco_parcelado,links_afiliados) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ";
    const values = [nome_do_produto,preco,tipos_de_roupa,marca_de_roupa,tamanho,descricao_do_produto,imagem_do_produto,estilo,genero,tipo_de_tecido,preco_parcelado,links_afiliados];
    return await conn.query(sql,values);
}

async function insertProdutoEscolhido(id){
    const conn =  await connect();
    const sql = "INSERT INTO id_produto(id) VALUES ?";
    const values = [id];
    return await conn.query(sql,values);
}

async function selectAdmUsuario(email,senha){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM adm_usuario")
    return rows;
}
module.exports = {
    selectProdutos,
    selectProdutoEspecifico,
    inserirProduto,
    insertProdutoEscolhido,
    selectProdutoPrecoEspecifico,
    selectProdutoPesquisadoEspecifico,
    selectAdmUsuario    
};