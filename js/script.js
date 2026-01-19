// Dados das motos
const motosData = [
    {
        id: 1,
        name: "Shineray 200cc",
        brand: "shineray",
        color: "vermelho",
        fuel: "gasolina",
        price: 12499.00,
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "A Shineray 200cc é uma motocicleta perfeita para quem busca economia, desempenho e conforto. Com um motor 200cc de alta eficiência, oferece baixo consumo de combustível sem abrir mão da potência. Ideal para uso urbano e viagens curtas.",
        features: [
            "Motor 200cc",
            "Transmissão 5 marchas",
            "Partida elétrica e pedal",
            "Painel digital",
            "Freio a disco dianteiro e traseiro",
            "Suspensão dianteira telescópica",
            "Tanque de 12 litros",
            "Peso: 140kg"
        ]
    },
    {
        id: 2,
        name: "Shineray 150cc",
        brand: "shineray",
        color: "preto",
        fuel: "gasolina",
        price: 8999.00,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Ideal para o dia a dia, com ótimo consumo e baixa manutenção. A Shineray 150cc é perfeita para quem busca praticidade e economia no trânsito urbano.",
        features: [
            "Motor 150cc",
            "Transmissão 5 marchas",
            "Partida elétrica",
            "Painel analógico",
            "Freio a disco dianteiro",
            "Suspensão convencional",
            "Tanque de 10 litros",
            "Peso: 120kg"
        ]
    },
    {
        id: 3,
        name: "SBM Thunder",
        brand: "sbm",
        color: "azul",
        fuel: "gasolina",
        price: 14999.00,
        image: "https://images.unsplash.com/photo-1517846693594-1567da72af75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Potência e estilo em uma moto robusta para estrada. A SBM Thunder oferece desempenho excepcional para quem gosta de aventuras nas estradas.",
        features: [
            "Motor 250cc",
            "Transmissão 6 marchas",
            "Partida elétrica",
            "Painel digital completo",
            "Freio ABS",
            "Suspensão invertida",
            "Tanque de 15 litros",
            "Peso: 160kg"
        ]
    },
    {
        id: 4,
        name: "Shineray Electro",
        brand: "shineray",
        color: "branco",
        fuel: "eletrica",
        price: 16999.00,
        image: "https://images.unsplash.com/photo-1621330396175-92a4348e0a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Moto elétrica com autonomia de 120km e baixíssimo custo de manutenção. Perfeita para quem busca sustentabilidade e economia.",
        features: [
            "Motor elétrico 3000W",
            "Autonomia: 120km",
            "Bateria de lítio",
            "Recarga em 4 horas",
            "Velocidade máxima: 100km/h",
            "Freio regenerativo",
            "Painel digital touch",
            "Peso: 110kg"
        ]
    },
    {
        id: 5,
        name: "SBM City",
        brand: "sbm",
        color: "cinza",
        fuel: "gasolina",
        price: 10999.00,
        image: "https://images.unsplash.com/photo-1566891439633-e183f368493b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Perfeita para o trânsito urbano, ágil e econômica. A SBM City foi desenvolvida para quem precisa de praticidade no dia a dia.",
        features: [
            "Motor 125cc",
            "Transmissão 4 marchas",
            "Partida elétrica",
            "Painel digital",
            "Freio a disco dianteiro",
            "Suspensão ajustável",
            "Tanque de 8 litros",
            "Peso: 105kg"
        ]
    },
    {
        id: 6,
        name: "Shineray Trail",
        brand: "shineray",
        color: "vermelho",
        fuel: "gasolina",
        price: 13999.00,
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Para quem gosta de aventura, com suspensão reforçada e pneus off-road. A Shineray Trail é ideal para trilhas e estradas de terra.",
        features: [
            "Motor 200cc",
            "Transmissão 5 marchas",
            "Partida elétrica",
            "Painel à prova d'água",
            "Freio a disco duplo",
            "Suspensão longa viagem",
            "Tanque de 14 litros",
            "Peso: 145kg"
        ]
    },
    {
        id: 7,
        name: "SBM Electro Pro",
        brand: "sbm",
        color: "preto",
        fuel: "eletrica",
        price: 18999.00,
        image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Alta performance elétrica com tecnologia de ponta. A SBM Electro Pro oferece o melhor da mobilidade elétrica com design moderno.",
        features: [
            "Motor elétrico 5000W",
            "Autonomia: 150km",
            "Bateria de lítio removível",
            "Recarga rápida (2h)",
            "Velocidade máxima: 120km/h",
            "Freio ABS",
            "Conectividade Bluetooth",
            "Peso: 125kg"
        ]
    },
    {
        id: 8,
        name: "Shineray Custom",
        brand: "shineray",
        color: "azul",
        fuel: "gasolina",
        price: 15999.00,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Estilo custom com motor potente e acabamento premium. Para quem busca personalidade e performance nas estradas.",
        features: [
            "Motor 250cc",
            "Transmissão 5 marchas",
            "Partida elétrica",
            "Painel estilo vintage",
            "Freio a disco duplo",
            "Suspensão traseira softail",
            "Tanque de 13 litros",
            "Peso: 155kg"
        ]
    },
    {
        id: 9,
        name: "SBM Street",
        brand: "sbm",
        color: "branco",
        fuel: "gasolina",
        price: 11999.00,
        image: "https://images.unsplash.com/photo-1601758064224-c3c5ec910095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Design moderno e desempenho para o dia a dia. A SBM Street combina estilo urbano com eficiência no consumo.",
        features: [
            "Motor 150cc",
            "Transmissão 5 marchas",
            "Partida elétrica",
            "Painel digital LED",
            "Freio a disco dianteiro",
            "Suspensão esportiva",
            "Tanque de 11 litros",
            "Peso: 115kg"
        ]
    },
    {
        id: 10,
        name: "Shineray Scooter",
        brand: "shineray",
        color: "cinza",
        fuel: "gasolina",
        price: 7999.00,
        image: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Praticidade e economia em um scooter urbano. Ideal para deslocamentos rápidos na cidade com baixo custo.",
        features: [
            "Motor 125cc",
            "Transmissão automática",
            "Partida elétrica",
            "Painel digital",
            "Freio a disco dianteiro",
            "Suspensão confort",
            "Tanque de 6 litros",
            "Peso: 95kg"
        ]
    },
    {
        id: 11,
        name: "SBM Adventure",
        brand: "sbm",
        color: "vermelho",
        fuel: "gasolina",
        price: 17999.00,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Preparada para longas viagens com conforto e segurança. A SBM Adventure é a escolha perfeita para explorar novos horizontes.",
        features: [
            "Motor 300cc",
            "Transmissão 6 marchas",
            "Partida elétrica",
            "Painel TFT colorido",
            "Freio ABS duplo",
            "Suspensão ajustável",
            "Tanque de 18 litros",
            "Peso: 175kg"
        ]
    },
    {
        id: 12,
        name: "Shineray E-Trail",
        brand: "shineray",
        color: "preto",
        fuel: "eletrica",
        price: 19999.00,
        image: "https://images.unsplash.com/photo-1621330396140-8d8c6e7e6c3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Aventura off-road com motorização elétrica de alta performance. Conquiste qualquer terreno com sustentabilidade.",
        features: [
            "Motor elétrico 6000W",
            "Autonomia: 100km",
            "Bateria de lítio reforçada",
            "Recarga em 5 horas",
            "Velocidade máxima: 90km/h",
            "Freio a disco hidráulico",
            "Suspensão off-road",
            "Peso: 130kg"
        ]
    }
];

// Funções auxiliares
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

function calculateInstallment(price, installments = 12) {
    const installmentValue = price / installments;
    return formatPrice(installmentValue);
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Carregar catálogo se estiver na página de catálogo
    if (document.querySelector('#moto-list')) {
        loadMotos();
        setupFilters();
    }
    
    // Configurar links do WhatsApp
    setupWhatsAppLinks();

    // Carrossel de motos
    if (document.querySelector('.moto-carousel')) {
        const swiperWrapper = document.querySelector('.moto-carousel .swiper-wrapper');
        if (swiperWrapper) {
            // Take first 3 motos for the carousel
            motosData.slice(0, 3).forEach(moto => {
                const slide = `
                    <div class="swiper-slide">
                        <a href="moto.html?id=${moto.id}" class="slide-link">
                            <img src="${moto.image}" alt="${moto.name}">
                            <div class="moto-info">
                                <h3>${moto.name}</h3>
                                <p>${formatPrice(moto.price)}</p>
                            </div>
                        </a>
                    </div>
                `;
                swiperWrapper.insertAdjacentHTML('beforeend', slide);
            });

            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                }
            });
        }
    }
    
    // Carregar detalhes da moto se estiver na página moto.html
    if (document.querySelector('.moto-detail')) {
        loadMotoDetails();
    }
});

// Carregar motos no catálogo
function loadMotos(filteredMotos = motosData) {
    const motoList = document.getElementById('moto-list');
    const countElement = document.getElementById('count');
    
    if (!motoList) return;
    
    // Limpar lista
    motoList.innerHTML = '';
    
    // Atualizar contador
    if (countElement) {
        countElement.textContent = filteredMotos.length;
    }
    
    // Adicionar motos
    filteredMotos.forEach(moto => {
        const motoCard = createMotoCard(moto);
        motoList.appendChild(motoCard);
    });
}

// Criar card de moto
function createMotoCard(moto) {
    const motoCard = document.createElement('a');
    motoCard.href = `moto.html?id=${moto.id}`;
    motoCard.className = 'moto-card';
    motoCard.dataset.id = moto.id;
    
    // Converter nome da marca para exibição
    const brandDisplay = moto.brand === 'shineray' ? 'Shineray' : 'SBM';
    const fuelDisplay = moto.fuel === 'gasolina' ? 'Gasolina' : 'Elétrica';
    const colorDisplay = moto.color.charAt(0).toUpperCase() + moto.color.slice(1);
    
    motoCard.innerHTML = `
        <div class="moto-image">
            <img src="${moto.image}" alt="${moto.name}">
        </div>
        <div class="moto-info">
            <h3>${moto.name}</h3>
            <div class="moto-meta">
                <span class="moto-tag brand">${brandDisplay}</span>
                <span class="moto-tag color">${colorDisplay}</span>
                <span class="moto-tag fuel">${fuelDisplay}</span>
            </div>
            <div class="moto-price">${formatPrice(moto.price)}</div>
        </div>
    `;
    
    return motoCard;
}

// Configurar filtros
function setupFilters() {
    const colorFilter = document.getElementById('color-filter');
    const fuelFilter = document.getElementById('fuel-filter');
    const brandFilter = document.getElementById('brand-filter');
    const resetBtn = document.getElementById('reset-filters');
    
    if (!colorFilter || !fuelFilter || !brandFilter) return;
    
    // Aplicar filtros quando alterados
    [colorFilter, fuelFilter, brandFilter].forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
    
    // Resetar filtros
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
}

// Aplicar filtros
function applyFilters() {
    const colorValue = document.getElementById('color-filter').value;
    const fuelValue = document.getElementById('fuel-filter').value;
    const brandValue = document.getElementById('brand-filter').value;
    
    let filteredMotos = motosData;
    
    // Filtrar por cor
    if (colorValue !== 'all') {
        filteredMotos = filteredMotos.filter(moto => moto.color === colorValue);
    }
    
    // Filtrar por combustível
    if (fuelValue !== 'all') {
        filteredMotos = filteredMotos.filter(moto => moto.fuel === fuelValue);
    }
    
    // Filtrar por marca
    if (brandValue !== 'all') {
        filteredMotos = filteredMotos.filter(moto => moto.brand === brandValue);
    }
    
    // Carregar motos filtradas
    loadMotos(filteredMotos);
}

// Resetar filtros
function resetFilters() {
    document.getElementById('color-filter').value = 'all';
    document.getElementById('fuel-filter').value = 'all';
    document.getElementById('brand-filter').value = 'all';
    
    loadMotos(motosData);
}

// Configurar links do WhatsApp
function setupWhatsAppLinks() {
    const phoneNumber = '5511999998888';
    const defaultMessage = 'Olá! Gostaria de mais informações sobre as motos.';
    
    // Configurar todos os links do WhatsApp
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], .btn-whatsapp, .float-whatsapp');
    
    whatsappLinks.forEach(link => {
        // Verificar se já tem um href personalizado
        if (!link.href.includes('wa.me')) {
            const message = link.dataset.message || defaultMessage;
            const encodedMessage = encodeURIComponent(message);
            link.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        }
        
        // Abrir em nova aba
        link.target = '_blank';
    });
}

// Carregar detalhes da moto na página moto.html
function loadMotoDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const motoId = parseInt(urlParams.get('id'));
    const moto = motosData.find(m => m.id === motoId);

    if (moto) {
        document.title = `${moto.name} - MotoShop`;
        document.getElementById('moto-main-image').src = moto.image;
        document.getElementById('moto-main-image').alt = moto.name;
        document.getElementById('moto-name').textContent = moto.name;
        document.querySelector('.breadcrumb span').textContent = moto.name;
        document.getElementById('moto-brand').textContent = moto.brand.charAt(0).toUpperCase() + moto.brand.slice(1);
        document.getElementById('moto-color').textContent = moto.color.charAt(0).toUpperCase() + moto.color.slice(1);
        document.getElementById('moto-fuel').textContent = moto.fuel.charAt(0).toUpperCase() + moto.fuel.slice(1);
        document.getElementById('moto-description').textContent = moto.description;
        document.getElementById('moto-price').textContent = formatPrice(moto.price);
        document.getElementById('moto-installment').textContent = calculateInstallment(moto.price);

        const featuresList = document.getElementById('moto-features');
        featuresList.innerHTML = '';
        moto.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
            featuresList.appendChild(li);
        });

        // Update WhatsApp button with specific moto info
        const whatsappBtn = document.getElementById('whatsapp-contact-btn');
        if (whatsappBtn) {
            whatsappBtn.href = `https://wa.me/5511999998888?text=${encodeURIComponent(`Olá! Tenho interesse na moto ${moto.name} (${moto.brand}).`)}`;
        }

    } else {
        // Redirect to 404 or catalog page if moto not found
        window.location.href = 'catalogo.html'; 
    }
}

// Exportar funções e dados para uso em outras páginas (como moto.html)
window.motosData = motosData;
window.formatPrice = formatPrice;
window.calculateInstallment = calculateInstallment;
window.loadMotoDetails = loadMotoDetails;