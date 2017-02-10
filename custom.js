
$('#cep').blur(function(){
	var requisicaocep=$.ajax({
		url: " http://api.postmon.com.br/v1/cep/"+$(this).val(),
		method: "GET"

	});

	requisicaocep.done(function(dados){
		console.log(dados);
		$("#end").val(dados.logradouro);
		$("#bairro").val(dados.bairro);
		$("#cidade").val(dados.cidade);
		$("#estado").val(dados.estado);
		
		
	});
	
	requisicaocep.fail(function(){
		console.log('nao funciona');
	});
});

function Validacao() {
    
    var Resto;
    var Soma = 0;
    var CPF = $('#cpf').val();
    var confirmacao = $('#confsenha').val();
    var senha = $('#senha').val();
    var telefone = $('#telefone').val(); 
    var objER = /^[0-9]{2}[0-9]{3}[0-9]{3}$/;
    var data = $('#data_nasc').val();
    var auxcep = $('#cep').val();
    

    /* Validar Senha*/

    if (senha[0] == " " || senha.length < 4){
        alert("Insira uma senha de no mínimo 4 dígitos!");
    } 
    
    if (confirmacao !=senha ){
        alert("Erro na confirmação da senha!");
    }
	        
    /* Validar Telefone*/ 
    if (telefone.length < 10 || telefone.length > 11){
            alert("Insira um telefone Valido!");
    }
    
   /* Validar cep*/

    if ( cep == "00000000"){       
         alert("Insira um Cep válido");
    }
    if (auxcep.length != 8) { 
        alert("Insira um cep válido");
    }


    /* Validar cpf*/
	
	if (cpf.length != 11) { 
        alert("Insira um CPF válido");
    }
    
	for (i=1; i<=9; i++) 
	Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ){  alert("Insira um CPF válido");;}
	
	Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    	Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ){
    	alert("Insira um CPF válido");
    }

    return false;    
};
