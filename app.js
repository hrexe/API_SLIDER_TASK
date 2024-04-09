

                document.addEventListener("DOMContentLoaded", function () {
                    const slider = document.querySelector(".slider");
                    const prevButton = document.querySelector(".prev");
                    const nextButton = document.querySelector(".next");
        
                    let counter = 0;
                    const slideWidth = 400;
                    
        
                    fetch('https://fakestoreapi.com/products/')
                        .then(res => res.json())
                        .then(data => {
                            let images = data.map(product => product.image); 
                            images.forEach(image => {
                                let img = document.createElement("img"); 
                                img.src = image; 
                                slider.appendChild(img); 
                            });
                        });
                    function autoSlide() {
                        counter++;
                        const slides = document.querySelectorAll(".slider img");
                        if (counter === slides.length) {
                            counter = 0;
                        }
                        slider.style.transform = `translateX(-${counter * slideWidth}px)`;
                    }
        
                   
                    const interval = setInterval(autoSlide, 2000);

                    prevButton.addEventListener("click", () => {
                        counter--;
                        const slides = document.querySelectorAll(".slider img");
                        if (counter < 0) {
                            counter = slides.length - 1;
                        }
                        slider.style.transform = `translateX(-${counter * slideWidth}px)`;
                    });

                    nextButton.addEventListener("click", () => {
                        counter++;
                        const slides = document.querySelectorAll(".slider img");
                        if (counter === slides.length) {
                            counter = 0;
                        }
                        slider.style.transform = `translateX(-${counter * slideWidth}px)`;
                    });
                });
            

