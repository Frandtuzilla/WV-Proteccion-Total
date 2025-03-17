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
            // Solo inicializa si hay slides
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
            if (this.dots.length > 0) {
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        this.showSlide(index);
                    });
                });
            }
            
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
            if (this.dots.length > 0) {
                this.dots.forEach(dot => {
                    dot.classList.remove('active');
                });
            }
            
            // Mostrar la slide actual
            this.slides[index].classList.add('active');
            
            // Actualizar dot activo
            if (this.dots.length > 0 && this.dots[index]) {
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
            // Solo inicializa si hay items
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
            if (this.dots.length > 0) {
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        this.showSlide(index);
                    });
                });
            }
            
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
            if (this.dots.length > 0) {
                this.dots.forEach(dot => {
                    dot.classList.remove('active');
                });
            }
            
            // Mostrar el item actual
            this.items[index].classList.add('active');
            
            // Actualizar dot activo
            if (this.dots.length > 0 && this.dots[index]) {
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

    // Partners Carousel
    const partnersCarousel = {
        slides: document.querySelectorAll('.partner-logo-slide'),
        indicators: document.querySelectorAll('.carousel-indicators .indicator'),
        prevBtn: document.querySelector('.carousel-controls .carousel-control.prev'),
        nextBtn: document.querySelector('.carousel-controls .carousel-control.next'),
        currentIndex: 0,
        interval: null,
        
        init: function() {
            // Solo inicializa si hay slides
            if (this.slides.length === 0) return;
            
            // Configurar inicialmente todos los slides excepto el primero
            this.slides.forEach((slide, index) => {
                if (index !== 0) {
                    slide.style.display = 'none';
                }
            });
            
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
            
            // Configurar indicadores
            if (this.indicators.length > 0) {
                this.indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => {
                        this.showSlide(index);
                    });
                });
            }
            
            // Iniciar carousel automático
            this.startAutoplay();
            
            // Pausar/reanudar el carousel al pasar el mouse
            const carouselContainer = document.querySelector('.partners-carousel-container');
            if (carouselContainer) {
                carouselContainer.addEventListener('mouseenter', () => this.stopAutoplay());
                carouselContainer.addEventListener('mouseleave', () => this.startAutoplay());
            }
        },
        
        showSlide: function(index) {
            // Ajustar el índice si está fuera de rango
            if (index < 0) {
                index = this.slides.length - 1;
            } else if (index >= this.slides.length) {
                index = 0;
            }
            
            // Ocultar todos los slides
            this.slides.forEach(slide => {
                slide.style.display = 'none';
            });
            
            // Quitar clase active de todos los indicadores
            if (this.indicators.length > 0) {
                this.indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                });
            }
            
            // Mostrar el slide actual
            this.slides[index].style.display = 'flex';
            
            // Actualizar indicador activo
            if (this.indicators.length > 0 && this.indicators[index]) {
                this.indicators[index].classList.add('active');
            }
            
            // Actualizar índice actual
            this.currentIndex = index;
        },
        
        startAutoplay: function() {
            this.stopAutoplay(); // Evitar múltiples intervalos
            this.interval = setInterval(() => {
                this.showSlide(this.currentIndex + 1);
            }, 4000); // Cambiar slide cada 4 segundos
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
    partnersCarousel.init();
    
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
    
    // Manejo de menú desplegable en móvil
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Solo prevenir comportamiento por defecto en móvil
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = this.parentNode;
                parent.classList.toggle('active'); // Añadido para rotar el icono
                const submenu = parent.querySelector('.submenu');
                if (submenu) {
                    // Alternar visibilidad del submenu
                    if (submenu.style.height === 'auto' || submenu.style.height === '') {
                        submenu.style.height = '0';
                    } else {
                        submenu.style.height = 'auto';
                    }
                }
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
    
    if (elementsToAnimate.length > 0) {
        elementsToAnimate.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Activar la animación inicial y en scroll
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);
    }
    
    // =========== MEJORAS AL FORMULARIO DE COTIZACIÓN ===========
    
    // Selección de tipo de seguro
    const insuranceOptions = document.querySelectorAll('.insurance-option');
    const quotationForm = document.getElementById('quotationForm');
    const coverageRadios = document.querySelectorAll('input[name="cobertura"]');
    
    // Secciones específicas de formulario
    const specificSections = {
        'terceros': document.querySelector('.terceros-fields'),
        'todo-riesgo': document.querySelector('.todo-riesgo-fields'),
        'motos-flotas': document.querySelector('.motos-flotas-fields'),
        'franquicia': document.querySelector('.franquicia-fields')
    };
    
    // Campos condicionales adicionales
    const accesoriosSelect = document.getElementById('accesorios');
    const accesoriosAdicionales = document.querySelector('.accesorios-adicionales');
    
    const franquiciaSelect = document.getElementById('franquiciaPreferida');
    const montoFijoFranquicia = document.querySelector('.monto-fijo-franquicia');
    
    const tipoVehiculoSelect = document.getElementById('tipoVehiculo');
    const motoFields = document.getElementById('motoFields');
    const flotaFields = document.getElementById('flotaFields');
    
    // Función para mostrar los campos específicos del tipo de seguro seleccionado
    const mostrarCamposEspecificos = function(tipoSeguro) {
        // Ocultar todas las secciones específicas
        Object.values(specificSections).forEach(section => {
            if (section) section.classList.remove('active');
        });
        
        // Mostrar la sección específica correspondiente
        if (specificSections[tipoSeguro]) {
            specificSections[tipoSeguro].classList.add('active');
            
            // Activar campos requeridos para la sección activa
            activarCamposRequeridos(tipoSeguro);
        }
        
        // Mostrar/ocultar campos condicionales para Motos y Flotas
        if (tipoSeguro === 'motos-flotas' && tipoVehiculoSelect) {
            manejarCamposMotoFlota(tipoVehiculoSelect.value);
        }
    };
    
    // Función para activar/desactivar atributos required según la sección activa
    const activarCamposRequeridos = function(tipoSeguro) {
        // Desactivar todos los campos requeridos específicos
        document.querySelectorAll('.specific-fields [required]').forEach(field => {
            field.removeAttribute('required');
        });
        
        // Activar campos requeridos para la sección activa
        if (specificSections[tipoSeguro]) {
            specificSections[tipoSeguro].querySelectorAll('input, select').forEach(field => {
                if (field.hasAttribute('data-required') || field.id.includes('valor') || 
                    field.id === 'limiteRc' || field.id === 'historialSiniestros' || 
                    field.id === 'franquiciaPreferida' || field.id === 'infoAdicionalFranquicia' ||
                    field.id === 'coberturaCristales' || field.id === 'vehiculoReemplazo') {
                    field.setAttribute('required', '');
                }
            });
        }
    };
    
    // Función para manejar campos específicos de motos o flotas
    const manejarCamposMotoFlota = function(tipoVehiculo) {
        if (!motoFields || !flotaFields) return;
        
        if (tipoVehiculo === 'moto') {
            motoFields.style.display = 'grid';
            flotaFields.style.display = 'none';
            
            // Activar campos requeridos para motos
            document.getElementById('cilindrada')?.setAttribute('required', '');
            document.getElementById('tipoMoto')?.setAttribute('required', '');
            document.getElementById('cantidadVehiculos')?.removeAttribute('required');
            document.getElementById('tipoFlota')?.removeAttribute('required');
            
        } else if (tipoVehiculo === 'comercial' || (tipoVehiculo && document.getElementById('uso')?.value === 'flota')) {
            motoFields.style.display = 'none';
            flotaFields.style.display = 'grid';
            
            // Activar campos requeridos para flotas
            document.getElementById('cilindrada')?.removeAttribute('required');
            document.getElementById('tipoMoto')?.removeAttribute('required');
            document.getElementById('cantidadVehiculos')?.setAttribute('required', '');
            document.getElementById('tipoFlota')?.setAttribute('required', '');
            
        } else {
            motoFields.style.display = 'none';
            flotaFields.style.display = 'none';
            
            // Desactivar todos los campos específicos
            document.getElementById('cilindrada')?.removeAttribute('required');
            document.getElementById('tipoMoto')?.removeAttribute('required');
            document.getElementById('cantidadVehiculos')?.removeAttribute('required');
            document.getElementById('tipoFlota')?.removeAttribute('required');
        }
    };
    
    // Control de campos adicionales condicionales
    if (accesoriosSelect) {
        accesoriosSelect.addEventListener('change', function() {
            if (this.value === 'si' && accesoriosAdicionales) {
                accesoriosAdicionales.classList.add('active');
                document.getElementById('valorAccesorios')?.setAttribute('required', '');
                document.getElementById('detalleAccesorios')?.setAttribute('required', '');
            } else {
                accesoriosAdicionales.classList.remove('active');
                document.getElementById('valorAccesorios')?.removeAttribute('required');
                document.getElementById('detalleAccesorios')?.removeAttribute('required');
            }
        });
    }
    
    if (franquiciaSelect) {
        franquiciaSelect.addEventListener('change', function() {
            if (this.value === 'monto-fijo' && montoFijoFranquicia) {
                montoFijoFranquicia.classList.add('active');
                document.getElementById('montoFijoFranquicia')?.setAttribute('required', '');
            } else {
                montoFijoFranquicia.classList.remove('active');
                document.getElementById('montoFijoFranquicia')?.removeAttribute('required');
            }
        });
    }
    
    if (tipoVehiculoSelect) {
        tipoVehiculoSelect.addEventListener('change', function() {
            // Solo aplicar si estamos en la sección de Motos y Flotas
            if (specificSections['motos-flotas']?.classList.contains('active')) {
                manejarCamposMotoFlota(this.value);
            }
        });
    }
    
    // Función para seleccionar un tipo de seguro y sincronizar los elementos
    const selectInsurance = function(tipoSeguro) {
        // Actualizar opciones visuales 
        insuranceOptions.forEach(option => {
            if (option.dataset.insurance === tipoSeguro) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
        
        // Sincronizar con opciones de radio
        coverageRadios.forEach(radio => {
            if (radio.value === tipoSeguro) {
                radio.checked = true;
            } else {
                radio.checked = false;
            }
        });
        
        // Mostrar campos específicos
        mostrarCamposEspecificos(tipoSeguro);
        
        // Mostrar el formulario
        if (quotationForm) {
            quotationForm.style.display = 'block';
            
            // Scroll suave hacia el formulario
            setTimeout(() => {
                document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    };
    
    // Eventos para las opciones de seguro
    if (insuranceOptions.length > 0) {
        // Verificar si viene un tipo de seguro en la URL
        const urlParams = new URLSearchParams(window.location.search);
        const planParam = urlParams.get('plan');
        
        // Asignar evento click a las opciones visuales
        insuranceOptions.forEach(option => {
            option.addEventListener('click', function() {
                selectInsurance(this.dataset.insurance);
            });
        });
        
        // Asignar evento change a los radio buttons
        coverageRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.checked) {
                    selectInsurance(this.value);
                }
            });
        });
        
        // Si hay un tipo de seguro en la URL, seleccionarlo automáticamente
        if (planParam && Object.keys(specificSections).includes(planParam)) {
            selectInsurance(planParam);
        }
    }
    
    // Validación de formulario
    if (quotationForm) {
        // Validación en tiempo real
        const validateField = function(field) {
            const parent = field.parentElement;
            
            if (field.value.trim() === '') {
                parent.classList.remove('valid-field');
                if (field.hasAttribute('required')) {
                    parent.classList.add('invalid-field');
                    return false;
                }
            } else {
                parent.classList.remove('invalid-field');
                parent.classList.add('valid-field');
                return true;
            }
            
            return true;
        };
        
        // Validar campos al cambiar
        quotationForm.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('change', function() {
                validateField(this);
            });
        });
        
        // Validación al enviar el formulario
        quotationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const activeFields = document.querySelectorAll('.form-section:not([style*="display: none"]) [required], .specific-fields.active [required]');
            
            activeFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                    field.focus();
                }
            });
            
            if (isValid) {
                // Simulación de envío exitoso
                alert('¡Gracias por solicitar una cotización! Te contactaremos a la brevedad.');
                // Opcionalmente, limpiar el formulario
                this.reset();
                
                // Resetear clases de validación
                this.querySelectorAll('.valid-field, .invalid-field').forEach(el => {
                    el.classList.remove('valid-field', 'invalid-field');
                });
                
                // Ocultar todas las secciones específicas
                Object.values(specificSections).forEach(section => {
                    if (section) section.classList.remove('active');
                });
                
                // Ocultar campos condicionales
                if (accesoriosAdicionales) accesoriosAdicionales.classList.remove('active');
                if (montoFijoFranquicia) montoFijoFranquicia.classList.remove('active');
                
                // Quitar selección de opciones de seguro
                insuranceOptions.forEach(option => {
                    option.classList.remove('selected');
                });
            } else {
                alert('Por favor, completa todos los campos requeridos correctamente.');
            }
        });
    }
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Validación básica
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('invalid');
                } else {
                    field.classList.remove('invalid');
                }
            });
            
            if (isValid) {
                // Simulación de envío exitoso
                alert('¡Gracias por tu mensaje! Te responderemos a la brevedad.');
                // Opcionalmente, limpiar el formulario
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos requeridos.');
            }
        });
    }
    
    // Animación suave al hacer click en los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return; // Si es solo "#", no hacer nada
            
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
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
    
    // Inicialización del mapa de Google en la página de contacto
    if (document.getElementById('googleMap')) {
        // Verificar si ya existe la función initMap global
        if (typeof window.initMap !== 'function') {
            window.initMap = function() {
                try {
                    // Coordenadas de la ubicación (Av. de los Incas 4828)
                    var location = {lat: -34.573975, lng: -58.478653};
                    
                    // Crear mapa
                    var map = new google.maps.Map(
                        document.getElementById('googleMap'), {
                        zoom: 15,
                        center: location
                    });
                    
                    // Agregar marcador
                    var marker = new google.maps.Marker({
                        position: location,
                        map: map,
                        title: 'WV Protección Total'
                    });
                } catch (error) {
                    console.error('Error al inicializar el mapa:', error);
                    
                    // Solución alternativa: mostrar un mensaje o una imagen estática
                    const mapContainer = document.getElementById('googleMap');
                    if (mapContainer) {
                        mapContainer.innerHTML = '<div style="text-align:center;padding:50px;"><p>El mapa no está disponible en este momento.</p><p>Nos encontramos en: Av. de los Incas 4828, C1427DON CABA</p></div>';
                    }
                }
            };
        }
    }
    
    // Añadir clase CSS para la animación del botón de WhatsApp
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
});