/////////////////////////////ENCRIPTAR CÓDIGO/////////////////
         function encriptarCodigo(){
             var str = document.getElementById("encriptador").value;
             var reemplazo = str.split("")
                 for(var i =0; i <reemplazo.length; i++){
                     reemplazo[i] = reemplazar(reemplazo[i])
                 }
             document.getElementById("secreto").value =reemplazo.join("");
         } 

    var boton = document.getElementById("btn-Encriptador");
  
    boton.onclick = encriptarCodigo;
////////////////////// REEMPLAZAR LAS VOCALES/////////////////
         function reemplazar(valor1){
             var find = ["a", "e", "i", "o", "u"];
             var replace =["ai", "enter", "imes", "ober", "ufat"]
                 for(var x = 0; x <find.length ; x++){
                     if(find[x] == valor1){
                         return  replace[x];
                     }
                 }
             return valor1 
         }
/////////////////////DETECTAR nros,mayúscula,caract.espec.///////////////
     let texto = document.getElementById("encriptador");
     texto.onkeypress = detectar;
         function detectar(e){
              if(e.keyCode>47 && e.keyCode<58) {
                  e.preventDefault();
                  alert("¡No se permiten números!");
              } else if(e.keyCode >32 && e.keyCode < 48 || e.keyCode >57 && e.keyCode < 65 ||e.keyCode> 90 && e.keyCode<97 || e.keyCode>122 && e.keyCode<127){
                  e.preventDefault();
                  alert("No se permiten caracteres especiales");
              }else if (e.keyCode>64 && e.keyCode<91){
                e.preventDefault();
                alert("No se permiten letras mayúsculas.")
              }else if(e.keyCode >127 && e.keyCode <256){
                  e.preventDefault();
                  alert("No se permiten estas teclas.")
              }
      }
///////////////////// DESENCRIPTAR CÓDIGO/////////////////////
         function desencriptarCode(){
             var enc = [/imes/g, /ai/g, /enter/g, /ober/g, /ufat/g];
             var str = document.getElementById("encriptador").value;
             var desc= ["i", "a", "e", "o", "u"];
             for(var x= 1; x <=str.length; x++){
                 for(var i=0; i <enc.length; i++ ){
                    str = str.replace(enc[i],desc[i]);
                 }
             }
             document.getElementById("secreto").value = str;
         }
     var buton = document.getElementById("btn-Desencriptador");
     buton.onclick =desencriptarCode;

/////////////////// BOTÓN DE COPIAR/////////////////////////////   
var button = document.getElementById("copy"),
input = document.getElementById("secreto"); 
     button.onclick = function(e){
        e.preventDefault();
        input.disabled = false;
        input.focus();
        input.select();
        document.execCommand("copy");
        texto.focus()
        input.disabled = true;
     }