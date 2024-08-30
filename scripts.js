let botaoCalcular = document.getElementById(btn_calcular);
function calculandoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value/100;
    let resultado = document.getElementById("resultado")
    if(altura !== "" && peso !==""){
        let imc = (peso / (altura*altura)).toFixed(2);
        let mensagem = "";
        if(imc < 18.5){ mensagem = "Abaixo do peso!"
        }else if(imc < 25){ ensagem = "Você está com o peso ideal!
        }else if(imc < 30){ mensagem = "Você está levemente acima do peso!"
<<<<<<< HEAD
        }else if(imc < 35){ mensagem = "Cuidado! Obesidade grau I"
        }else if(imc < 40){mensagem = "Cuidado! Obesidade grau II"
=======
        }else if(imc > 35){ mensagem = "Cuidado! Obesidade grau I"
        }else if(imc > 40){mensagem = "Cuidado! Obesidade grau II"
>>>>>>> a33a4e40c669784f0ad16b3861b65bced4088e31
        }else { mensagem = "Cuidado! Obesidade grau III"
        }
        resultado.textContent = `Seu IMC é ${imc}! ${mensagem}`;      
    }else{ resultado.textContent = "Preencha todos os campos!!!" }
} btn_calcular.addEventListener('click', calculandoIMC);
