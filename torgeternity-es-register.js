Hooks.once('init', () => {
	//----logo image
    var logo = document.getElementById("logo");
    logo.style.position = "absolute";
    logo.setAttribute("src", "/modules/fvtt-module-torgeternity-es/images/fvtt-torgeternity-es.webp");
    //----open links when click on logo
    logo.title = "external links"
    logo.addEventListener("click", function() {
        externalLinks.render(true)
    })
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