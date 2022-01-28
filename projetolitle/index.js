//codigo
$("#data").datepicker({
    onSelect: function(dateText) {
    arr=document.getElementById('data').value.split("/");
    data=`${arr[2]}-${arr[0]}-${arr[1]}`;
    pegar()
    }
});

$("#data").datepicker("setDate", new Date());

arr=document.getElementById('data').value.split("/");
data=`${arr[2]}-${arr[0]}-${arr[1]}`;

function expand(){
    imagem=document.getElementById("imagem")
    if(window.matchMedia("(min-width:800px)").matches){
    if(imagem.classList.contains("peq")){
        imagem.style.cssText="width:100%; margin-bottom:3%"
        imagem.classList.remove("peq")
    } else {
        imagem.style.cssText="width:50%; margin-bottom:0%"
        imagem.classList.add("peq")}}
}

window.onload = pegar()
function pegar(){
    $.ajax({url:`file:///C:/Users/Maria%20Ester/Desktop/Projetos/projetolitle/1100.jpg${data}`,
        success: function(param) {
        var img=param.url
        var hdimg=param.hdurl
            $('#imagem').attr('src', hdimg);
            $('#background').attr('src', img);
            $('#nome').text(param.title);
            $('#explanation').text(param.explanation);
            $('#copyName').text(param.copyright);
            
        if (param.media_type==="video"){
            document.getElementById('imagem').style.cssText="display:none"
            document.getElementById('video').style.cssText="display:block"
            document.getElementById('video').src=param.url;
            document.getElementById('background').src="file:///C:/Users/Maria%20Ester/Desktop/Projetos/projetolitle/1100.jpg"
        }

        if (param.media_type==="image"){
            document.getElementById('imagem').style.cssText="display:block"
            document.getElementById('video').style.cssText="display:none"
        }}})}