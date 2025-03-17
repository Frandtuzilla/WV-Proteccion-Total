// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const heroSlider = {
        slides: document.querySelectorAll('.hero-slider .slide'),
        dots: document.querySelectorAll('.hero-slider .dot'),
        prevBtn: document.querySelector('.hero-slider .slider-arrow.prev'),
        nextBtn: document.querySelector('.hero-slider .slider-arrow.next'),
        currentIndex: 0,
        interval: null,
        
        init: function() {
            if (this.slides.length === 0) return;
            
            // Configurar botones de navegación
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => {
                    this.showSlide(this.currentIndex - 1);
                });
            }
            
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => {
                    this.showSlide(this.currentIndex + 1);
                });
            }
            
            // Configurar puntos indicadores
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.showSlide(index);
                });
            });
            
            // Iniciar slider automático
            this.startAutoplay();
            
            // Pausar/reanudar el slider al pasar el mouse
            const sliderContainer = document.querySelector('.slider-container');
            if (sliderContainer) {
                sliderContainer.addEventListener('mouseenter', () => this.stopAutoplay());
                sliderContainer.addEventListener('mouseleave', () => this.startAutoplay());
            }
        },
        
        showSlide: function(index) {
            // Ajustar el índice si está fuera de rango
            if (index < 0) {
                index = this.slides.length - 1;
            } else if (index >= this.slides.length) {
                index = 0;
            }
            
            // Quitar clase active de todas las slides
            this.slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Quitar clase active de todos los dots
            this.dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Mostrar la slide actual
            this.slides[index].classList.add('active');
            
            // Actualizar dot activo
            if (this.dots[index]) {
                this.dots[index].classList.add('active');
            }
            
            // Actualizar índice actual
            this.currentIndex = index;
        },
        
        startAutoplay: function() {
            this.stopAutoplay(); // Evitar múltiples intervalos
            this.interval = setInterval(() => {
                this.showSlide(this.currentIndex + 1);
            }, 5000); // Cambiar slide cada 5 segundos
        },
        
        stopAutoplay: function() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        }
    };
    
    // Testimonial Slider
    const testimonialSlider = {
        items: document.querySelectorAll('.testimonial-item'),
        dots: document.querySelectorAll('.testimonial-dots .dot'),
        prevBtn: document.querySelector('.testimonial-arrow.prev'),
        nextBtn: document.querySelector('.testimonial-arrow.next'),
        currentIndex: 0,
        interval: null,
        
        init: function() {
            if (this.items.length === 0) return;
            
            // Configurar botones de navegación
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => {
                    this.showSlide(this.currentIndex - 1);
                });
            }
            
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => {
                    this.showSlide(this.currentIndex + 1);
                });
            }
            
            // Configurar puntos indicadores
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.showSlide(index);
                });
            });
            
            // Iniciar slider automático
            this.startAutoplay();
            
            // Pausar/reanudar el slider al pasar el mouse
            const sliderContainer = document.querySelector('.testimonial-slider');
            if (sliderContainer) {
                sliderContainer.addEventListener('mouseenter', () => this.stopAutoplay());
                sliderContainer.addEventListener('mouseleave', () => this.startAutoplay());
            }
        },
        
        showSlide: function(index) {
            // Ajustar el índice si está fuera de rango
            if (index < 0) {
                index = this.items.length - 1;
            } else if (index >= this.items.length) {
                index = 0;
            }
            
            // Quitar clase active de todos los items
            this.items.forEach(item => {
                item.classList.remove('active');
            });
            
            // Quitar clase active de todos los dots
            this.dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Mostrar el item actual
            this.items[index].classList.add('active');
            
            // Actualizar dot activo
            if (this.dots[index]) {
                this.dots[index].classList.add('active');
            }
            
            // Actualizar índice actual
            this.currentIndex = index;
        },
        
        startAutoplay: function() {
            this.stopAutoplay(); // Evitar múltiples intervalos
            this.interval = setInterval(() => {
                this.showSlide(this.currentIndex + 1);
            }, 7000); // Cambiar testimonio cada 7 segundos
        },
        
        stopAutoplay: function() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        }
    };
    // Inicializar los sliders
    heroSlider.init();
    testimonialSlider.init();
    
    // Menu de navegación responsive
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (en modo móvil)
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit-card, .partner-logo, .testimonial-card, .plan-content, .form-section');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            
            if (elementPosition < screenHeight - 150) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicialmente, establecer los elementos como invisibles
    const elementsToAnimate = document.querySelectorAll('.benefit-card, .partner-logo, .testimonial-card, .plan-content, .form-section');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Activar la animación inicial y en scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Selección de tipo de seguro
    const insuranceOptions = document.querySelectorAll('.insurance-option');
    const selectedInsuranceInput = document.getElementById('selectedInsurance');
    const quotationForm = document.getElementById('quotationForm');
    const formSections = document.querySelectorAll('.form-section');
    
    if (insuranceOptions.length > 0) {
        // Verificar si viene un tipo de seguro en la URL
        const urlParams = new URLSearchParams(window.location.search);
        const planParam = urlParams.get('plan');
        
        // Función para seleccionar un tipo de seguro
        const selectInsurance = (option) => {
            // Quitar selección de todas las opciones
            insuranceOptions.forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Seleccionar la opción actual
            option.classList.add('selected');
            
            // Actualizar el valor del input oculto
            if (selectedInsuranceInput) {
                selectedInsuranceInput.value = option.dataset.insurance;
            }
            
            // Mostrar el formulario
            if (quotationForm) {
                quotationForm.style.display = 'block';
                
                // Scroll suave hacia el formulario
                setTimeout(() => {
                    quotationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
            
            // Mostrar/ocultar campos según el tipo de seguro
            if (formSections) {
                const insuranceType = option.dataset.insurance;
                
                // Mostrar todos los campos comunes
                formSections.forEach(section => {
                    section.style.display = 'block';
                });
                
                // Mostrar/ocultar campos específicos
                const motosFlotasSection = document.getElementById('motosFlotasSection');
                const todoRiesgoSection = document.getElementById('todoRiesgoSection');
                
                if (motosFlotasSection) {
                    motosFlotasSection.style.display = insuranceType === 'motos-flotas' ? 'block' : 'none';
                }
                
                if (todoRiesgoSection) {
                    todoRiesgoSection.style.display = insuranceType === 'todo-riesgo' ? 'block' : 'none';
                }
            }
        };
        
        // Asignar evento click a las opciones
        insuranceOptions.forEach(option => {
            option.addEventListener('click', function() {
                selectInsurance(this);
            });
        });
        
        // Si hay un tipo de seguro en la URL, seleccionarlo automáticamente
        if (planParam) {
            const planOption = [...insuranceOptions].find(opt => opt.dataset.insurance === planParam);
            if (planOption) {
                selectInsurance(planOption);
            }
        }
    }
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Aquí iría la validación y el envío del formulario
            // Por ahora, simulamos una respuesta exitosa
            
            alert('¡Gracias por tu mensaje! Te responderemos a la brevedad.');
            
            // Opcionalmente, limpiar el formulario
            // contactForm.reset();
        });
    }
    
    // Animación suave al hacer click en los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto hover para los planes de seguro
    const planCards = document.querySelectorAll('.insurance-plan');
    
    planCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Botón de WhatsApp con efecto de pulsación
    const whatsappButton = document.querySelector('.whatsapp-float');
    
    if (whatsappButton) {
        setInterval(() => {
            whatsappButton.classList.add('pulse');
            
            setTimeout(() => {
                whatsappButton.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
    
    // Añadir clase CSS para la animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .pulse {
            animation: pulse 1s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Precargar imágenes para mejorar rendimiento
    const preloadImages = function() {
        const imagesToPreload = [
            'img/hero-bg.jpg',
            'img/banner-bg.jpg',
            'img/terceros.jpg',
            'img/todo-riesgo.jpg',
            'img/motos-flotas.jpg',
            'img/franquicia.jpg'
        ];
        
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };
    
    preloadImages();
});