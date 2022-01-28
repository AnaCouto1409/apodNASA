//BOAS PRATICAS SEGUNDO A LEITURA DA DOCUMENTAÇÃO
function inicio(){
    location = "index.html"
}
function pesquisar(){
    location = "pesuisar.html"
}
function pesuisarData (){
const apikey = 'Sk0oacheSAeMtk6f8altpm2U0Y6OHOmxlOU4ncTU';

$.ajax({url:`https://apod.nasa.gov/apod/astropix.html${apikey}&data=${data}`,
success:function(resultado){
resultadoPesquisa(resultado);
},
error:function(){
    $(".mensagemErro").html("Data inválida").css({color:"red"})
}
});
}
function resultadoPesquisa(pesquisa){
    const data = $("#data");
    const midia = $("#midia");
    const titulo = $("#titulo");
    const autor = $("#autor");
    const legenda = $("#legenda");
    data.html(moment(pesquisa.date).format("DD,MMMM, YYYY"));
    titulo.html(psuisa.title);
    autor.html(`créditos: ${pesquisa.copyright}`);
    legenda.html(`sobre: ${pesquisa.explanation}`);
}




