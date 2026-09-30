
        const products = [
            {
                id: 1,
                name: "Pano de Prato Decorado",
                price: "R$ 19,99",
                shortDesc: "Panos de alta absorção com barrados exclusivos.",
                fullDesc: "Confeccionados com tecido de excelente qualidade, barrados delicados em tricoline e acabamento caprichado em renda. Perfeitos para decorar a cozinha ou presentear.",
                image: "assets/pano-de-prato.jpg",
                detailImage: "assets/pano-de-prato-detalhe.jpg"
            },
            {
                id: 2,
                name: "Bate-mão (Toalhinha)",
                price: "R$ 19,99",
                shortDesc: "Praticidade e charme pendurados no seu fogão ou pia.",
                fullDesc: "Bate-mão estruturado com suporte prático para pendurar, combinando estampas alegres e alta capacidade de secagem.",
                image: "assets/bate-mao-center.jpg",
                detailImage: "assets/bate-mao-detalhe.jpg"
            },
            {
                id: 3,
                name: "Puxa-saco (Bolsa de Sacos)",
                price: "R$ 24,99",
                shortDesc: "Mantenha suas sacolas organizadas com estilo.",
                fullDesc: "Puxa-saco espaçoso, com acabamento impecável, elásticos nas aberturas e presilha reforçada para pendurar. Deixa a cozinha organizada e muito mais charmosa.",
                image: "assets/puxa-saco-center.jpg",
                detailImage: "assets/puxa-saco-detalhe.jpg"
            },
            /*{
                id: 4,
                name: "Kit Cozinha Especial",
                price: "R$ 59,90",
                shortDesc: "Conjunto combinando para transformar o ambiente.",
                fullDesc: "Kit composto por peças selecionadas com harmonia de estampas (contém panos de prato e acessórios coordinados). Excelente opção de presente!",
                image: "Kit Cozinha Completo",
                detailImage: "assets/bate-mao-detalhe.jpg"
            }*/
        ];

        // Elementos do DOM
        const catalogSection = document.getElementById('catalog-section');
        const aboutSection = document.getElementById('about-section');
        const detailSection = document.getElementById('detail-section');
        const productsGrid = document.getElementById('products-grid');
        const backBtn = document.getElementById('back-btn');

        const detailImg = document.getElementById('detail-img');
        const detailTitle = document.getElementById('detail-title');
        const detailPrice = document.getElementById('detail-price');
        const detailDesc = document.getElementById('detail-desc');
        const detailWhatsappBtn = document.getElementById('detail-whatsapp-btn');

        // Renderizar os produtos na tela principal
        function renderProducts() {
            productsGrid.innerHTML = "";
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-img" style="background-image: url('${product.image}')"></div>
                    <div class="product-info">
                        <div>
                            <h3>${product.name}</h3>
                            <p>${product.shortDesc}</p>
                        </div>
                        <div>
                            <div class="product-price">${product.price}</div>
                            <button class="btn">Ver Detalhes</button>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => showDetails(product));
                productsGrid.appendChild(card);
            });
        }

        // Mostrar tela de detalhes do produto
        function showDetails(product) {
            aboutSection.classList.add('hidden')
            catalogSection.classList.add('hidden');
            detailSection.classList.remove('hidden');

            detailImg.style.backgroundImage = `url('${product.detailImage || product.image}')`;
            detailTitle.textContent = product.name;
            detailTitle.textContent = product.name;
            detailPrice.textContent = product.price;
            detailDesc.textContent = product.fullDesc;

            // Mensagem personalizada para o WhatsApp do produto específico
            const message = encodeURIComponent(`Olá! Gostaria de encomendar o produto: *${product.name}* (${product.price}). Tem disponível?`);
            detailWhatsappBtn.href = `https://wa.me/5511913453871?text=${message}`;

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Voltar para o catálogo
        backBtn.addEventListener('click', () => {
            detailSection.classList.add('hidden');
            aboutSection.classList.remove('hidden')
            catalogSection.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Inicializar a aplicação
        renderProducts();