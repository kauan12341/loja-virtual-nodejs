const configs = document.querySelector(".configs");

const novosProdutos = document.querySelector(".novos-produtos")
const recuperacaoDados = document.querySelector(".recuperacao-dados")

let itemConfig = `
<div class="welcome">
<h1>Ola! seja muito bem vindo a pagina do administrador da loja!</h1>
<br>
<p>Acesse nossas configurações para alterar algumas coisas da loja</p>
</div>`;

let alterarNovoProduto=`
<div class="container-produto-cadastro">
    <form action="/awesome" method="POST" class="produto-configuracao-manual">
        <input type="text" name="afiliacaoProduto" placeholder="Coloque o link de afiliado do produto" required>
        <input type="text" name="imagemProduto" placeholder="Coloque aqui a URL da imagem" required>
        <input type="text" name="nomeProduto" placeholder="Nome da roupa" required>
        <p>O que é a roupa?</p>
        <select name="tiporoupa" required>
            <option value="calcao">Calção</option>
            <option value="calca">Calça</option>
            <option value="camisa">Camisa</option>
            <option value="camiseta" selected>Camiseta</option>
            <option value="regata">Regata</option>
            <option value="saia">Saia</option>
            <option value="vestido">Vestido</option>
            <option value="bone">Boné</option>
            <option value="pulsera">Pulsera</option>
            <option value="colar">Colar</option>
            <option value="anel">Anel</option>
            <option value="brinco">Brinco</option>
            <option value="cueca">Cueca</option>
            <option value="calcinha">Calcinha</option>
            <option value="sutia">Sutiã</option>
            <option value="bikini">Bikini</option>
            <option value="tenis">Tênis</option>
            <option value="sandalia">Sandalia</option>
            <option value="sapatilha">Sapatilha</option>
            <option value="sapato">Sapato</option>
            <option value="gravata">Gravata</option>
            <option value="terno">Terno</option>
            <option value="chapeu">Chapéu</option>
            <option value="gorro">Gorro</option>
            <option value="casaco">Casaco</option>
            <option value="jaqueta">Jaqueta</option>
            <option value="blusinha">Blusinha</option>
            <option value="conjunto">Conjunto (mais de uma roupa)</option>
        </select>
        <p>Estilo</p>
        <select name="estiloroupa" required>
            <option value="passeio">Passeio</option>
            <option value="trabalho">Trabalho</option>
            <option value="praia">Praia</option>
            <option value="nevasca">Nevasca</option>
            <option value="caminhada">Caminhada</option>
            <option value="rodeio">Rodeio</option>
            <option value="rasgado">Meio Rasgado</option>
        </select>
        <p>Gênero</p>
        <select name="generoroupa" required>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
        </select>
        <p>Tamanho</p>
        <select name="tamanhoroupa" required>
            <option value="PP">PP</option>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G" selected>G</option>
            <option value="GG">GG</option>
            <option value="XGG">XGG</option>
        </select>
        <p>Qual é o tipo do tecido?</p>
        <select name="tipodetecido" required>
            <option value="algodao">Algodão</option>
            <option value="la">Lã</option>
            <option value="la batida">Lã batida</option>
            <option value="la acrilica">Lã acrílica</option>
            <option value="seda">Seda</option>
            <option value="veludo">Veludo</option>
            <option value="cetin">Cetin</option>
            <option value="viscose">Viscose</option>
            <option value="malha">Malha</option>
            <option value="renda">Renda</option>
            <option value="linho">Linho</option>
            <option value="lurex">Lurex</option>
            <option value="tweed">Tweed</option>
            <option value="cashmere">Cashmere</option>
            <option value="boucle">Bouclé</option>
            <option value="fleece">FLEECE</option>
            <option value="nylon">Nylon</option>
            <option value="tencel">Tencel</option>
            <option value="crepe">Crepe</option>
        </select>
        <input type="text" name="marcaProduto" placeholder="Marca da roupa" required>
        <textarea name="descricaoProduto" placeholder="Descrição da roupa" required></textarea>
        <p>Qual seria o preço dessa roupa?</p>
        <br>
        <div style="display: flex;">
            <div style="display: flex;flex-direction:column; justify-content: center;margin-right: 10px;">
                <h3>R$</h3>
            </div>
            <input type="text" id="preco-produto" name="precoProduto" placeholder="Preço" required>
        </div>
        <br><br>
        <div style="display: flex;justify-content: center;">
            <input type="submit" class="publicarProduto" value="Enviar">
        </div>
    </form>
    <form action="/awesome/file" method="POST" class="produto-configuracao-automatica">
        <div style="display: flex;justify-content: center;width: 100%;">
            <h3>Envie para nós um arquivo CSV dos produtos da loja</h3>
        </div>
        <div style="display: flex;justify-content: center;width: 100%;"></div>
            <input type="file" name="produtoaquivo" required>
            <br><br>
            <div style="display: flex;justify-content: center;">
                <input type="submit" class="publicarProduto" value="Enviar">
            </div>
            <br><br>
            <p style="text-align:left">Obs: As colunas de sua tabela tem que ser em uma sequencia especifica, Como:</p>
            <ul style="text-align:left">
                <li>nome do produto</li>
                <li>preço</li>
                <li>tipo da roupa</li>
                <li>marca de roupa</li>
                <li>tamanho(letra em maiusculo)</li>
                <li>descrição do produto</li>
                <li>imagem do produto(link da imagem)</li>
                <li>estilo</li>
                <li>genero</li>
                <li>tecido do produto</li>
                <li>Link de afiliados(opcional)</li>
            </ul>
        </div>
    </form>
</div>
`
let configurarContas = `
<h2>ainda estamos desenvolvendo isso então, por favor aguarde</h2>
`


configs.innerHTML = itemConfig;
novosProdutos.addEventListener("click",function(){configs.innerHTML = alterarNovoProduto});
recuperacaoDados.addEventListener("click",function(){configs.innerHTML = configurarContas});
