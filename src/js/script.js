{
    const sliderImages = document.querySelectorAll('.slide-in');
    const contentcontainers = document.querySelectorAll('.content-container');

    const debounce = (func, wait = 20, immediate = true) => {
        let timeout;

        return function(){
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if(!immediate) func.apply(context, args);
            };

            const callNow = immediate && !timeout;
            clearTimeout(timeout);

            timeout = setTimeout(later, wait);
            if(callNow) func.apply(context, args);
        }
    }

    const checkSlide = e => {
        sliderImages.forEach(sliderImage => {
            const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
            const imageBottom = sliderImage.offsetTop + sliderImage.height;
            const isHalfShown = slideInAt > sliderImage.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;

            if(isHalfShown && isNotScrolledPast) {
                sliderImage.classList.add('active');
            }else{
                sliderImage.classList.remove('active');
            }
        });
    }

    const updateMenu = e => {
        
        
        const currentScroll = window.scrollY + window.innerHeight;
        // hoever er reeds is gescrolled

        let currentContainer;

        contentcontainers.forEach(container => {
            const position = container.offsetTop;

            if(position - 1 < currentScroll){
                currentContainer = container;
            }

            if(currentContainer){
            const id = currentContainer.getAttribute('id');

            const currentlyactive = document.querySelector('.active-section');
            if(currentlyactive){
                currentlyactive.classList.remove('active-section');
            }
            document.querySelector(`[href="#${id}"]`).classList.add('active-section');
            }
        })
    } 

    const handleScroll = e => {

        const top = window.pageYOffset;

		const layers = document.getElementsByClassName("parallax");
		let layer, speed, yPos;
		for (let i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
            let yPos = -(top * speed / 10);
			layer.setAttribute('style', 'left: ' + yPos + 'px');
        }

        debounce(checkSlide(e));
        debounce(updateMenu(e), 5);
        
        // next step: check height of certain selected element
        // only start parallax effect at that height 
    }

    // to do: images come into page on scroll 

    const init = () => {
        document.addEventListener("scroll", handleScroll);
    }
    
    init();
}