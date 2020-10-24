// dados por estados
// https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstado

function geral(categoriaDado, tipoDado, idCampo, frase){
	var url = 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi';
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4){
			var dados = JSON.parse(xhr.responseText);
			var valor = parseInt((dados[categoriaDado][tipoDado]), 10).toLocaleString('pt-BR');
			document.getElementById(idCampo).innerHTML = valor + frase;
		}
	};
	xhr.open('GET', url);
	xhr.send();
}

geral('confirmados', 'acompanhamento', 'dadoAcompanhamento', ' em monitoramento.');
geral('confirmados', 'recuperados', 'dadoRecuperado', ' já se recuperaram.');
geral('confirmados', 'novos', 'dadoNovos', ' novos casos.');
geral('confirmados', 'total', 'dadoConfirmadoTotal', ' total notificados.');
geral('obitos', 'novos', 'dadoObitosNovos', ' óbitos nas últimas 24h');
geral('obitos', 'total', 'dadoObitosTotal', ' infelizmente vieram a óbito.');
geral('obitos', 'letalidade', 'dadosLetalidade', '% Taxa de Letalidade.');

console.log('Feito por Cirino, durante as lives no canal https://twitch.tv/CasaDoDev');
