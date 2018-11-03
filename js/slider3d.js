
/* images du slide */ 
var slides = ["img/bike-rental-1.jpg",
		"img/bike-rental-2.jpeg",
		"img/bike-rental-3.jpg",
		"img/bike-rental-4.jpg",
		"img/bike-rental-5.jpg",
		"img/bike-rental-6.jpg",
		"img/bike-rental-7.jpg"
	];

/* objet slider */

var globalSlider = {
	dom : {
		id : document.getElementById("#slider"),
		slide : document.getElementById("#slide"),
		prevBtn : document.getElementById("#prevBtn"),
		nextBtn : document.getElementById("#nextBtn"),
		pauseBtn : document.getElementById("#pauseBtn")
	},

	data : {
		imgNbre : 0,
		nbreSlide : slides.length,
		timer : true
	},

	methods: {
		init : function() {
			globalSlider.timer = setInterval(globalSlider.methods.autoSlide, 5000);
			globalSlider.methods.playPause();
			globalSlider.methods.prev();
			globalSlider.methods.next();
			globalSlider.methods.onKeydown();
		},

		autoSlide : function() {
			globalSlider.data.imgNbre = (globalSlider.data.imgNbre +=1) % globalSlider.nbreSlide;
			console.log(globalSlider.data.imgNbre);
			globalSlider.dom.slide.src = slides[globalSlider.nbreSlide];
			setInterval(globalSlider.methods.autoSlide, 5000);
		},

		playPause : function() {
			if(globalSlider.timer) {
				clearInterval(globalSlider.timer);
				globalSlider.timer = null;
				globalSlider.pauseBtn.className = "playBtn";
			}else{
				globalSlider.timer = setInterval(globalSlider.methods.autoSlide, 5000);
				globalSlider.pauseBtn.className = "pauseBtn";
			}
			return false;
		},

		prev : function() {
			--globalSlider.data.imgNbre;
			if(globalSlider.data.imgNbre < 0) {
				globalSlider.data.imgNbre = globalSlider.nbreSlide -=1;
			}
			$globalSlider.dom.slide.src = slides[globalSlider.data.imgNbre];
			return false;
		},

		next : function() {
			++globalSlider.data.imgNbre;
			if(globalSlider.data.imgNbre > (globalSlider.nbreSlide -=1)) {
				globalSlider.data.imgNbre = 0;
			}
			globalSlider.dom.slide.src = slides[globalSlider.data.imgNbre];
			return false;
		},

		onKeydown : function(){
			$("body").keydown(function(e) {
				switch(e.keyCode){
				  case 37: // left
					console.log("left");
					nextImage();
					break;
				  case 39: // right
					console.log("right");
					prevImage();
					break;
				  case 32: // space
					console.log(e.keyCode);
					setTimer();
					break;
				}
			});
		}
	}
};