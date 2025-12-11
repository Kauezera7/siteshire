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
        description: "A Shineray 200cc é uma motocicleta perfeita para quem busca economia, desempenho e conforto."
    },
    {
        id: 2,
        name: "Shineray 150cc",
        brand: "shineray",
        color: "preto",
        fuel: "gasolina",
        price: 8999.00,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Ideal para o dia a dia, com ótimo consumo e baixa manutenção."
    },
    {
        id: 3,
        name: "SBM Thunder",
        brand: "sbm",
        color: "azul",
        fuel: "gasolina",
        price: 14999.00,
        image: "https://images.unsplash.com/photo-1517846693594-1567da72af75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Potência e estilo em uma moto robusta para estrada."
    },
    {
        id: 4,
        name: "Shineray Electro",
        brand: "shineray",
        color: "branco",
        fuel: "eletrica",
        price: 16999.00,
        image: "https://images.unsplash.com/photo-1621330396175-92a4348e0a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Moto elétrica com autonomia de 120km e baixíssimo custo de manutenção."
    },
    {
        id: 5,
        name: "SBM City",
        brand: "sbm",
        color: "cinza",
        fuel: "gasolina",
        price: 10999.00,
        image: "https://images.unsplash.com/photo-1566891439633-e183f368493b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Perfeita para o trânsito urbano, ágil e econômica."
    },
    {
        id: 6,
        name: "Shineray Trail",
        brand: "shineray",
        color: "vermelho",
        fuel: "gasolina",
        price: 13999.00,
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Para quem gosta de aventura, com suspensão reforçada e pneus off-road."
    },
    {
        id: 7,
        name: "SBM Electro Pro",
        brand: "sbm",
        color: "preto",
        fuel: "eletrica",
        price: 18999.00,
        image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Alta performance elétrica com tecnologia de ponta."
    },
    {
        id: 8,
        name: "Shineray Custom",
        brand: "shineray",
        color: "azul",
        fuel: "gasolina",
        price: 15999.00,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Estilo custom com motor potente e acabamento premium."
    },
    {
        id: 9,
        name: "SBM Street",
        brand: "sbm",
        color: "branco",
        fuel: "gasolina",
        price: 11999.00,
        image: "https://images.unsplash.com/photo-1601758064224-c3c5ec910095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Design moderno e desempenho para o dia a dia."
    },
    {
        id: 10,
        name: "Shineray Scooter",
        brand: "shineray",
        color: "cinza",
        fuel: "gasolina",
        price: 7999.00,
        image: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Praticidade e economia em um scooter urbano."
    },
    {
        id: 11,
        name: "SBM Adventure",
        brand: "sbm",
        color: "vermelho",
        fuel: "gasolina",
        price: 17999.00,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Preparada para longas viagens com conforto e segurança."
    },
    {
        id: 12,
        name: "Shineray E-Trail",
        brand: "shineray",
        color: "preto",
        fuel: "eletrica",
        price: 19999.00,
        image: "https://images.unsplash.com/photo-1621330396140-8d8c6e7e6c3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Aventura off-road com motorização elétrica de alta performance."
    }
];

// Funções auxiliares
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

function getMotosData() {
    return motosData;
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
    
    // Adicionar event listeners para os cards
    addCardEventListeners();
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

// Adicionar event listeners para os cards
function addCardEventListeners() {
    const motoCards = document.querySelectorAll('.moto-card');
    
    motoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const motoId = this.dataset.id;
            
            // Em uma aplicação real, redirecionaria para a página da moto com o ID
            // Por enquanto, vamos apenas mostrar um alerta
            window.location.href = `moto.html?id=${motoId}`;
        });
    });
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

// Função para buscar parâmetros da URL
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(window.location.href);
    
    if (!results) return null;
    if (!results[2]) return '';
    
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}