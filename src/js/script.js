{
    const sliderImages = document.querySelectorAll('.slide-in');
    const sliderImagesRight = document.querySelectorAll('.slide-in-right');
    const sliderImagesLeft = document.querySelectorAll('.slide-in-left');
    const wriggleImages = document.querySelectorAll('.wriggle');
    const contentcontainers = document.querySelectorAll('.content-container');
    const videoplayer = document.querySelector('.videoplayer');
    const playbutton = document.querySelector('.playbutton');


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

    const checkWriggle = e =>{
        wriggleImages.forEach(wriggleImage => {
            const wriggleAt = (window.scrollY + window.innerHeight) - wriggleImage.height +100;
            const imageBottom = wriggleImage.offsetTop + wriggleImage.height;
            const isHalfShown = wriggleAt > wriggleImage.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom - 200;

            if(isHalfShown && isNotScrolledPast) {
                wriggleImage.classList.add('active');
            }else{
                wriggleImage.classList.remove('active');
            }
        })
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
        debounce(checkWriggle(e));

        const obsession = document.querySelector('.parallax-obsession');

        if(obsession){
        
        const slideInAt = (window.scrollY + window.innerHeight) - obsession.height / 1;
        const obsessionTop = obsession.getBoundingClientRect().top + window.scrollY;
        const imageBottom = obsessionTop + obsession.height;
        const isHalfShown = slideInAt > obsessionTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        

        // console.log(obsessionTop);
        // console.log(imageBottom);

        if(isHalfShown && isNotScrolledPast){
            // console.log("AY");
            let speed = obsession.getAttribute('data-speed');
            let yPosObs = -(slideInAt * speed / 2.7) - (obsessionTop / 2.7);
            // console.log(yPosObs);
            obsession.setAttribute('style', 'transform: translateX(' + yPosObs + 'px)');
        }else{
            // do nothing
        }

        
        }


        
        // next step: check height of certain selected element
        // only start parallax effect at that height 
    }

    // to do: images come into page on scroll 

    const handlePlayback = e => {
        // console.log(e);

        if (videoplayer.paused) {
            videoplayer.play();
            playbutton.classList.add('hide');
        }else{
            videoplayer.pause();
            playbutton.classList.remove('hide');
        }

    }

    const init = () => {


        document.addEventListener("scroll", handleScroll);
        videoplayer.addEventListener("click", handlePlayback);
        playbutton.addEventListener("click", handlePlayback);

        // note to future self (milenka): ipv klassen te gebruiken voor left-right, niet beter om adhv data-elementen te gebruiken? in dat geval moet je maar 1 x de images selecteren en dan switch case gebruiken om juiste klasse toe te voegen

        sliderImagesRight.forEach(image => {
            image.classList.add('slide-in-right-script');
            image.classList.add('slide-in');
        });
        sliderImagesLeft.forEach(image => {
            image.classList.add('slide-in-right-script');
            image.classList.add('slide-in');
        });
    }
    
    init();
}