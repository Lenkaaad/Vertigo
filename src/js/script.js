{
    const handleParallax = e => {
        console.log(window.pageYOffset);

        const top = window.pageYOffset;

		const layers = document.getElementsByClassName("parallax");
		let layer, speed, yPos;
		for (let i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
            let yPos = -(top * speed / 10);
            console.log("yPos: " +yPos)
			layer.setAttribute('style', 'left: ' + yPos + 'px');
        }
        
        // next step: check height of certain selected element
        // only start parallax effect at that height 
    }

    // to do: images come into page on scroll 

    const init = () => {
        document.addEventListener("scroll", handleParallax);
    }
    
    init();
}