function calcula(){
    var altura = document.imc.altura.value;
    var peso = document.imc.peso.value;
    var quadrado = (altura * altura);
    var resultado = (peso/quadrado);
    var calculo = parseFloat(resultado.toFixed(1));

    if(calculo<18.9){
    alert("O seu IMC é de " + calculo + ", por isso você está muito abaixo do peso.");
    }
    else if(calculo>=17 && calculo<18.4){
    alert("O seu IMC é de " + calculo + ", por isso você está abaixo do peso");
    }
    else if(calculo>=18.5 && calculo<24.9) {
    alert("O seu IMC é de " + calculo + ", por isso você está no peso normal");
    }
    else if(calculo>=25 && calculo<29.9) {
    alert("O seu IMC é de " + calculo + ", por isso você está acima do peso");
    }
    else if(calculo>=30 && calculo<34.9) {
    alert("O seu IMC é de " + calculo + ", por isso você está com obesidade grau I");
    }
    else if(calculo>=35 && calculo<40) {
    alert("O seu IMC é de " + calculo + ", por isso você está com obesidade grau II");
    }
    else if (calculo>40)
    alert("O seu IMC é de " + calculo + ", por isso você está com obesidade grau III");
    }