function verificarProduto(){

    var nome_produto = document.getElementById("idnome_Produto").value;

    if (nome_produto!=""){
        alert("Cadastro Confirmado.");
        document.getElementById("idnome_Produto").style.backgroundColor = "#00FA9A";

    }else{
        alert("Nome do Produto obrigatório.");
        document.getElementById("idnome_Produto").style.backgroundColor = "#FF0000";
    }
   

}