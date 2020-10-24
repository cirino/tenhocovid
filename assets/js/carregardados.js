// dados por estados
// https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstado

(function(){
	const url = 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi';
	const dadosRequeridos = [
		['confirmados', 'acompanhamento', 'dadoAcompanhamento', ' em monitoramento.'],
		['confirmados', 'recuperados', 'dadoRecuperado', ' já se recuperaram.'],
		['confirmados', 'novos', 'dadoNovos', ' novos casos.'],
		['confirmados', 'total', 'dadoConfirmadoTotal', ' total notificados.'],
		['obitos', 'novos', 'dadoObitosNovos', ' óbitos nas últimas 24h'],
		['obitos', 'total', 'dadoObitosTotal', ' infelizmente vieram a óbito.'],
		['obitos', 'letalidade', 'dadosLetalidade', '% Taxa de Letalidade.']
	]

	fetch(url)
		.then(res => res.json())
		.then((out) => {
			for (i = 0; i < dadosRequeridos.length; i ++){
				var valor = parseInt((out[dadosRequeridos[i][0]][dadosRequeridos[i][1]]), 10).toLocaleString('pt-BR');
				document.getElementById(dadosRequeridos[i][2]).innerHTML = valor + dadosRequeridos[i][3]
			}
		})
		.catch(err => { throw err });
}());

console.log('Feito por Cirino, durante as lives no canal https://twitch.tv/CasaDoDev');
