Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'torgeternity-babele-es',
			lang: 'es',
			dir: 'compendium'
		});
		
		//----logo image
    var logo = document.getElementById("logo");
    logo.style.position = "absolute";
    logo.setAttribute("src", "/modules/torgeternity-babele-es/images/fvtt-anvil-torg-es.webp");
    //----open links when click on logo
    logo.title = "external links"
    logo.addEventListener("click", function() {
        externalLinks.render(true)
    })
		
	}
});
