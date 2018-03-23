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

        const obsession = document.querySelector('.parallax-obsession');

        if(obsession){
        
        const slideInAt = (window.scrollY + window.innerHeight) - obsession.height / 1;
        const obsessionTop = obsession.getBoundingClientRect().top + window.scrollY;
        const imageBottom = obsessionTop + obsession.height;
        const isHalfShown = slideInAt > obsessionTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        

        console.log(obsessionTop);
        console.log(imageBottom);

        if(isHalfShown && isNotScrolledPast){
            console.log("AY");
            let speed = obsession.getAttribute('data-speed');
            let yPosObs = -(slideInAt * speed / 6) - (obsessionTop / 6);
            console.log(yPosObs);
            obsession.setAttribute('style', 'transform: translateX(' + yPosObs + 'px)');
        }else{
            // do nothing
        }

        
        }


        
        // next step: check height of certain selected element
        // only start parallax effect at that height 
    }

    // to do: images come into page on scroll 

    const init = () => {
        document.addEventListener("scroll", handleScroll);
    }
    
    init();
}