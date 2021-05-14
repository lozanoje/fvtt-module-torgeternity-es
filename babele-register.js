Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'torgeternity-babele-es',
			lang: 'es',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/torgeternity-babele-es/img/fvtt-anvil-torg-es.png";
		
	}
});
