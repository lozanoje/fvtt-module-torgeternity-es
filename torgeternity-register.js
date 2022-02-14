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

// Hooks.on("getMonarchHandComponents", (hand, components) => {
//     components.markers.push({
//         tooltip: "En la reserva",
//         class: "pool-marker",
//         icon: "fas fa-tags",
//         color: "#00BFFF",
//         show: (card) => card.getFlag("torgeternity", "pooled")
//     });
//     components.controls.push({
//         class: "pool-toggle",
//         tooltip: "Conmutar reserva",
//         icon: "fas fa-tags",
//         color: "#00BFFF",
//         onclick: (event, card) => card.setFlag("torgeternity", "pooled", !card.getFlag("torgeternity", "pooled"))
//     })
// });