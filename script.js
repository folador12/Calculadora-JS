var cont =0;
function calculadora(tipo,valor){
    if(document.getElementById("display").value.length < 15){
        if(tipo === 'simbolo')
        {   
            //apaga tudo
            if(valor === 'C') 
            {
                document.getElementById("display").value = ''
            }
            //apaga o ultimo digito
            else if(valor === 'Ce') 
            {   
                let tamanho = document.getElementById("display").value.length;

                let valor2 = document.getElementById("display").value.slice(0,tamanho-1);
                
                document.getElementById("display").value = valor2;
            }
            //Parenteses
            else if(valor==='p1'){
                let texto = document.getElementById("display").value;
                if(texto.lastIndexOf("(") === -1){
                    document.getElementById("display").value += '('; 
                    cont++;
                }
                else if(texto.lastIndexOf("(") != -1 && texto.lastIndexOf(")") != -1 && cont != 1 ){
                    document.getElementById("display").value += '('; 
                    cont++;
                }
                else{
                    document.getElementById("display").value += ')'; 
                    cont = 0;
                }
                
            }
            //Calculo das contas
            else if(valor==='=')
            {
                var conta = eval(document.getElementById("display").value);
                if(conta!=undefined){
                document.getElementById("display").value=conta;
                }

            }
            else 
            {
                document.getElementById("display").value += valor;
            }
            
        }
        else if(tipo === 'valor'){
            document.getElementById("display").value += valor;
        }
    }
    else
    {
        if(valor === 'C') //apaga tudo
        {
            document.getElementById("display").value = ''
        }
        else if(valor === 'Ce') //apaga o ultimo digito
        {   
            let tamanho = document.getElementById("display").value.length;

            let valor2 = document.getElementById("display").value.slice(0,tamanho-1);
            
            document.getElementById("display").value = valor2;
        }
    }
}
