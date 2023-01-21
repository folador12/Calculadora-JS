function calculadora(tipo,valor){
    if(document.getElementById("display").value.length < 15){
        if(tipo === 'simbolo')
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
            else if(valor === '/' || valor === '*' || valor === '+' || valor === '-' || valor === '.')
            {
                document.getElementById("display").value += valor;
            }
            else if(valor==='p1'){
                document.getElementById("display").value += '('; 
            }
            else if(valor==='p2'){
                document.getElementById("display").value += ')'; 
            }
            else if(valor==='=')
            {
                var conta = eval(document.getElementById("display").value);
                if(conta!=undefined){
                document.getElementById("display").value=conta;
                }

            }
            
        }
        else if(tipo === 'valor'){
            switch(valor)
            {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 0:
                    document.getElementById("display").value += valor;
                    break;
                default:
                    document.getElementById("display").value += 'Numero não reconhecido';
            }
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
