/*
==============================
DECLARAÇÃO DE VARIÁVEIS GLOBAIS
==============================
*/
// Estas variáveis são declaradas aqui para serem acessíveis globalmente,
// mas só recebem seus valores após o carregamento completo da página.
let quizContainer;
let chatMessagesContainer;
let chatOptionsContainer;

let quizHistory = [];
let currentQuizStepData = null;
let userChatResponses = {};
let currentChatStep = 'start';
let chatbotInitialized = false;

/*
==============================
FUNÇÕES PRINCIPAIS
==============================
*/

// FUNÇÕES PARA O MENU HAMBÚRGUER
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
}

// INJEÇÃO DE CONTEÚDO REUTILIZÁVEL (HEADER/FOOTER)
function injectHeaderAndFooter() {
    const headerHTML = `
        <header id="header">
            <div class="container">
                <nav>
                    <div class="logo">
                        <a href="index.html" title="Voltar para a página inicial">
                            <img src="${siteData.logos.main}" alt="Nexus Innova Logo" class="logo-main">
                            <img src="${siteData.logos.scrolled}" alt="Nexus Innova Logo" class="logo-scrolled">
                        </a>
                    </div>
                    <ul class="nav-links" id="navLinks">
                        ${siteData.navigation.map(item => `<li><a href="${item.link}" onclick="closeMenu()">${item.name}</a></li>`).join('')}
                    </ul>
                    <div class="menu-toggle" onclick="toggleMenu()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    `;

    const footerHTML = `
        <footer>
            <div class="container footer-grid">
                <div class="footer-col">
                    <div class="logo">
                        <img src="${siteData.logos.scrolled}" alt="Nexus Innova Logo">
                    </div>
                    <p class="tagline">${siteData.footer.tagline}</p>
                    <div class="social-links">
                        <a href="${siteData.footer.social.linkedin}" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                        <a href="${siteData.footer.social.instagram}" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                        <a href="${siteData.footer.social.facebook}" title="Facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://wa.me/${siteData.footer.social.whatsapp}" title="WhatsApp" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>Navegação</h3>
                    <ul>
                        ${siteData.navigation.map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join('')}
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Serviços</h3>
                    <ul>
                        ${siteData.services.map(service => `<li><a href="index.html#services">${service.title}</a></li>`).join('')}
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Contato</h3>
                    <p><a href="mailto:${siteData.footer.email}" title="Enviar Email" target="_blank"><strong>Email:</strong> ${siteData.footer.email}</a></p>
                    <p><a href="tel:${siteData.footer.phone.replace(/\D/g, '')}" title="Ligar para Nexus" target="_blank"><strong>Telefone:</strong> ${siteData.footer.phone}</a></p>
                    <p><a href="https://wa.me/${siteData.footer.social.whatsapp}" title="Falar no WhatsApp" target="_blank"><strong>Endereço:</strong> ${siteData.footer.address}</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Nexus Innova. Todos os direitos reservados.</p>
            </div>
        </footer>
    `;

    const whatsappFloatHTML = `
        <a href="https://wa.me/${siteData.footer.social.whatsapp}?text=Olá! Gostaria de falar com a Nexus Innova sobre um projeto." class="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i>
            <span class="whatsapp-text">Fale Conosco</span>
        </a>
    `;

    document.getElementById('header-container').innerHTML = headerHTML;
    document.getElementById('footer-container').innerHTML = footerHTML;
    document.getElementById('whatsapp-float-container').innerHTML = whatsappFloatHTML;
}

// --- Funções de Renderização de Conteúdo Dinâmico ---
function renderServicesSection() {
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = siteData.services.map((service, index) => `
            <div class="service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="service-icon"><i class="${service.icon}"></i></div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    }
}

function renderHomePageBlogPosts(limit = 3) {
    const blogPostsContainer = document.getElementById('blog-posts-container');
    if (blogPostsContainer) {
        const postsToRender = siteData.blogPosts.slice(0, limit);
        blogPostsContainer.innerHTML = postsToRender.map(post => `
            <article class="blog-post" data-aos="fade-up">
                <img src="${post.image}" alt="${post.title}">
                <div class="post-content">
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <a href="blog/post.html?id=${post.id}" class="read-more">Leia Mais <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `).join('');
    }
}

function renderBlogPosts(posts = siteData.blogPosts) {
    const blogPostsContainer = document.getElementById('blog-posts-container');
    if (blogPostsContainer) {
        if (posts.length === 0) {
            blogPostsContainer.innerHTML = "<p>Nenhum post encontrado.</p>";
            return;
        }
        blogPostsContainer.innerHTML = posts.map(post => `
            <article class="blog-post" data-aos="fade-up">
                <img src="${post.image}" alt="${post.title}">
                <div class="post-content">
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <a href="blog/post.html?id=${post.id}" class="read-more">Leia Mais <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `).join('');
    }
}

function renderBlogPostContent() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
    const post = siteData.blogPosts.find(p => p.id === postId);

    if (post) {
        document.title = `${post.title} - Blog Nexus Innova`;
        const postContentContainer = document.getElementById('post-content');
        // Corrigindo o caminho da imagem para ser relativo à página do post
        const imagePath = `../${post.image}`;
        postContentContainer.innerHTML = `
            <img src="${imagePath}" alt="${post.title}" class="post-image">
            <h1>${post.title}</h1>
            <div class="post-meta">
                <span><i class="fas fa-calendar-alt"></i> ${post.date}</span>
                <span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>
            </div>
            ${post.content}
        `;
        const breadcrumbsContainer = document.getElementById('breadcrumbs-container');
        breadcrumbsContainer.innerHTML = `<div class="breadcrumbs"><a href="../index.html">Início</a> > <a href="../blog.html">Blog</a> > <span>${post.title}</span></div>`;
        renderRelatedPosts(post.tags, post.id);
    } else {
        const postContentContainer = document.getElementById('post-content');
        if (postContentContainer) {
            postContentContainer.innerHTML = `<h1>Post não encontrado</h1><p>O artigo que você procura não existe.</p>`;
        }
    }
}

function renderRelatedPosts(currentPostTags, currentPostId) {
    const relatedPostsContainer = document.getElementById('related-posts');
    if (!relatedPostsContainer) return;
    const relatedPosts = siteData.blogPosts
        .filter(post => post.id !== currentPostId && post.tags.some(tag => currentPostTags.includes(tag)))
        .slice(0, 3);
    if (relatedPosts.length > 0) {
        relatedPostsContainer.innerHTML = `
            <h3>Artigos Relacionados</h3>
            <div class="related-posts-grid">
                ${relatedPosts.map(post => `
                    <article class="blog-post">
                        <img src="../${post.image}" alt="${post.title}">
                        <div class="post-content">
                            <h3>${post.title}</h3>
                            <p>${post.description}</p>
                            <a href="post.html?id=${post.id}" class="read-more">Leia Mais <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;
    }
}

function renderProcessSection() {
    const processGrid = document.getElementById('process-grid');
    if (processGrid) {
        processGrid.innerHTML = siteData.processSteps.map((step, index) => `
            <div class="process-step" data-aos="fade-up" data-aos-delay="${index * 150}">
                <div class="step-number">${index + 1}</div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `).join('');
    }
}

function renderTeamSection() {
    const teamGrid = document.getElementById('team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = siteData.teamMembers.map((member, index) => `
            <div class="team-card" data-aos="fade-up" data-aos-delay="${index * 150}">
                <img src="${member.photo}" alt="${member.name}" class="team-photo">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
                <div class="social-links-team">
                    <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    <a href="${member.instagram}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        `).join('');
    }
}

function renderHighlightedProjects() {
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid) {
        projectGrid.innerHTML = siteData.highlightedProjects.map((project, index) => {
            const statusClass = project.status.toLowerCase().replace(/\s+/g, '-');
            return `
            <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 150}">
                <div class="project-image-container">
                    <span class="project-status ${statusClass}">${project.status}</span>
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <a href="projetos/projeto.html?id=${project.id}" class="cta-button">Conheça o projeto</a>
                </div>
            </div>`;
        }).join('');
    }
}

function renderProjectDetails() {
    const projectDetailsContainer = document.getElementById('project-details');
    if (!projectDetailsContainer) return;

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const project = siteData.highlightedProjects.find(p => p.id === projectId);

    if (project && project.details) {
        document.title = `${project.title} - Nexus Innova`;

        const liveProjectButton = project.details.liveUrl
            ? `<a href="${project.details.liveUrl}" class="cta-button" target="_blank" rel="noopener noreferrer">Visualizar Projeto</a>`
            : '';

        const githubButton = project.details.githubUrl
            ? `<a href="${project.details.githubUrl}" class="cta-button secondary" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Verificar Projeto</a>`
            : '';

        projectDetailsContainer.innerHTML = `
            <img src="${project.details.projectImage}" alt="${project.title}" class="project-page-image">
            <h1>${project.title}</h1>
            <p class="project-intro">${project.description}</p>
            
            <h2>Desafio</h2>
            <p>${project.details.challenge}</p>
            
            <h2>Nossa Solução</h2>
            <p>${project.details.solution}</p>
            
            <h2>Resultados</h2>
            <p>${project.details.results}</p>

            <div class="project-links">
                ${liveProjectButton}
                ${githubButton}
                <a href="../index.html#projects" class="read-more-back"><i class="fas fa-arrow-left"></i> Voltar para Projetos</a>
            </div>

            <div class="project-contact">
                <h3>Interessado neste projeto?</h3>
                <p>Deixe seu contato e um de nossos especialistas retornará para você.</p>
                <form id="project-contact-form">
                    <input type="hidden" name="projeto_id" value="${project.id}">
                    <div class="form-group">
                        <input type="text" name="nome" placeholder="Seu nome" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Seu e-mail" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" name="telefone" placeholder="Seu telefone (opcional)">
                    </div>
                    <button type="submit" class="cta-button">Enviar Contato</button>
                </form>
                <div id="form-message"></div>
            </div>
        `;

        const breadcrumbsContainer = document.getElementById('breadcrumbs-container');
        if (breadcrumbsContainer) {
            breadcrumbsContainer.innerHTML = `<div class="breadcrumbs"><a href="../index.html">Início</a> > <a href="../index.html#projects">Projetos</a> > <span>${project.title}</span></div>`;
        }

        // Adiciona o event listener para o novo formulário, passando a URL do projeto ao vivo
        setupProjectContactForm(project.details.liveUrl); // <-- MUDANÇA IMPORTANTE AQUI

    } else {
        projectDetailsContainer.innerHTML = `<h1>Projeto não encontrado</h1>`;
    }
}

// Função para configurar o formulário de contato do projeto
function setupProjectContactForm(liveUrl) { // <-- MUDANÇA IMPORTANTE AQUI
    const form = document.getElementById('project-contact-form');
    const messageDiv = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o recarregamento da página

            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            
            messageDiv.textContent = 'Enviando...';
            messageDiv.className = '';
            submitButton.disabled = true; // Desabilita o botão durante o envio

            fetch('../salvar_contato.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    messageDiv.textContent = data.message;
                    messageDiv.className = 'form-success';
                    form.reset();

                    // --- LÓGICA DO REDIRECIONAMENTO ---
                    // Verifica se existe uma URL para redirecionar
                    if (liveUrl) {
                        messageDiv.textContent += " Você será redirecionado em 3 segundos...";
                        // Espera 3 segundos e então redireciona
                        setTimeout(() => {
                            window.location.href = liveUrl;
                        }, 3000);
                    }
                } else {
                    messageDiv.textContent = data.message;
                    messageDiv.className = 'form-error';
                    submitButton.disabled = false; // Habilita o botão novamente em caso de erro
                }
            })
            .catch(error => {
                messageDiv.textContent = 'Erro de conexão. Tente novamente.';
                messageDiv.className = 'form-error';
                console.error('Error:', error);
                submitButton.disabled = false; // Habilita o botão novamente em caso de erro
            });
        });
    }
}

function handleBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    if (!searchInput) return;
    searchInput.addEventListener('keyup', (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredPosts = siteData.blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchText) ||
            post.description.toLowerCase().includes(searchText) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchText))
        );
        renderBlogPosts(filteredPosts);
    });
}

/*
==============================
Lógica do Quiz (na seção de Contato)
==============================
*/
function renderQuizStep(stepData) {
    if (!quizContainer) return;
    currentQuizStepData = stepData;
    quizContainer.innerHTML = '';
    const quizStepDiv = document.createElement('div');
    quizStepDiv.className = 'quiz-step';
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    const questionLabel = document.createElement('label');
    questionLabel.textContent = stepData.question;
    formGroup.appendChild(questionLabel);
    if (stepData.type === 'select') {
        const select = document.createElement('select');
        select.name = stepData.name;
        select.innerHTML = '<option value="" disabled selected>Selecione uma opção</option>';
        stepData.options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            select.appendChild(opt);
        });
        select.addEventListener('change', handleQuizSelectChange);
        formGroup.appendChild(select);
    } else if (stepData.type === 'textarea') {
        const textarea = document.createElement('textarea');
        textarea.name = stepData.name;
        textarea.placeholder = 'Digite aqui...';
        textarea.required = true;
        formGroup.appendChild(textarea);
    }
    const quizControlsDiv = document.createElement('div');
    quizControlsDiv.className = 'quiz-controls';
    const backBtn = document.createElement('button');
    backBtn.type = 'button';
    backBtn.className = 'submit-btn';
    backBtn.textContent = 'Voltar';
    backBtn.disabled = quizHistory.length === 0;
    backBtn.addEventListener('click', handleQuizBackStep);
    quizControlsDiv.appendChild(backBtn);
    if (stepData.type === 'textarea') {
        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.className = 'submit-btn';
        submitBtn.textContent = 'Enviar Mensagem';
        submitBtn.addEventListener('click', handleQuizNextStep);
        quizControlsDiv.appendChild(submitBtn);
    }
    quizStepDiv.appendChild(formGroup);
    quizStepDiv.appendChild(quizControlsDiv);
    quizContainer.appendChild(quizStepDiv);
}

function handleQuizSelectChange(event) {
    const selectedValue = event.target.value;
    if (currentQuizStepData.next && currentQuizStepData.next[selectedValue]) {
        const nextStepData = currentQuizStepData.next[selectedValue];
        quizHistory.push(currentQuizStepData);
        renderQuizStep(nextStepData);
    } else if (currentQuizStepData.options) {
        const option = currentQuizStepData.options.find(opt => opt.value === selectedValue);
        if (option && option.whatsapp) {
            const whatsappUrl = `https://wa.me/${option.whatsapp}?text=${encodeURIComponent(option.message)}`;
            window.open(whatsappUrl, '_blank');
        }
    }
}

function handleQuizNextStep() {
    const currentInput = quizContainer.querySelector('textarea');
    if (currentInput && currentInput.value.trim() !== '') {
        const whatsappUrl = `https://wa.me/${currentQuizStepData.whatsapp}?text=${encodeURIComponent(currentQuizStepData.message + currentInput.value.trim())}`;
        window.open(whatsappUrl, '_blank');
    } else if (currentInput) {
        alert("Por favor, descreva sua necessidade.");
    }
}

function handleQuizBackStep() {
    if (quizHistory.length > 0) {
        const prevStepData = quizHistory.pop();
        renderQuizStep(prevStepData);
    }
}

/*
==============================
Lógica do Chatbot Flutuante
==============================
*/
function addBotMessage(message) {
    if (!chatMessagesContainer) return;
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message bot-message';
    messageElement.innerHTML = message;
    chatMessagesContainer.appendChild(messageElement);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function addUserMessage(message) {
    if (!chatMessagesContainer) return;
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message user-message';
    messageElement.textContent = message;
    chatMessagesContainer.appendChild(messageElement);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function handleChatOptionClick(option) {
    if (currentChatStep === 'ask_service') userChatResponses['servico'] = option.text;
    else userChatResponses[`passo_${Object.keys(userChatResponses).length}`] = option.text;
    addUserMessage(option.text);
    chatOptionsContainer.innerHTML = '';
    if (option.whatsapp) {
        setTimeout(() => {
            addBotMessage("Perfeito! Juntei todas as suas respostas. Estou te redirecionando para um especialista no WhatsApp que já receberá este resumo.");
            let finalMessage = `Olá! Meu nome é ${userChatResponses.nome} e meu e-mail é ${userChatResponses.email}.\n\nResumo da minha necessidade:\n- Serviço: ${userChatResponses.servico}\n- Detalhes: ${Object.values(userChatResponses).slice(2).join(', ')}\n\n---\n\n${option.message}`;
            if (option.pdfLink) {
                finalMessage += `\n\nEnquanto aguarda, veja nossa apresentação sobre este serviço: ${option.pdfLink}`;
            }
            const whatsappUrl = `https://wa.me/${option.whatsapp}?text=${encodeURIComponent(finalMessage)}`;
            window.open(whatsappUrl, '_blank');
            setTimeout(resetChatbot, 2000);
        }, 1000);
    } else if (option.nextStep) {
        currentChatStep = option.nextStep;
        setTimeout(() => renderChatStep(currentChatStep), 500);
    }
}

function handleTextInputSubmit(inputElement, stepData) {
    const value = inputElement.value.trim();
    if (value === "") {
        alert("Por favor, preencha o campo.");
        return;
    }
    if (currentChatStep === 'start') userChatResponses['nome'] = value;
    else if (currentChatStep === 'ask_email') userChatResponses['email'] = value;
    addUserMessage(value);
    chatOptionsContainer.innerHTML = '';
    currentChatStep = stepData.nextStep;
    setTimeout(() => renderChatStep(currentChatStep), 500);
}

function renderChatStep(stepKey) {
    const stepData = siteData.chatBotData[stepKey];
    if (!stepData || !chatOptionsContainer) return;
    let message = stepData.message;
    if (userChatResponses.nome) {
        message = message.replace('{nome}', userChatResponses.nome);
    }
    addBotMessage(message);
    chatOptionsContainer.innerHTML = '';
    if (stepData.options) {
        stepData.options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.className = 'chat-option-btn';
            optionButton.textContent = option.text;
            optionButton.addEventListener('click', () => handleChatOptionClick(option));
            chatOptionsContainer.appendChild(optionButton);
        });
    } else if (stepData.type === 'text_input') {
        const input = document.createElement('input');
        input.type = (stepKey === 'ask_email') ? 'email' : 'text';
        input.className = 'chat-text-input';
        input.placeholder = 'Digite aqui...';
        const submitButton = document.createElement('button');
        submitButton.className = 'chat-submit-btn';
        submitButton.textContent = 'Enviar';
        const inputContainer = document.createElement('div');
        inputContainer.className = 'chat-input-container';
        inputContainer.appendChild(input);
        inputContainer.appendChild(submitButton);
        submitButton.addEventListener('click', () => handleTextInputSubmit(input, stepData));
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleTextInputSubmit(input, stepData);
        });
        chatOptionsContainer.appendChild(inputContainer);
        input.focus();
    }
}

function resetChatbot() {
    if (!chatMessagesContainer || !chatOptionsContainer) return;
    chatMessagesContainer.innerHTML = '';
    chatOptionsContainer.innerHTML = '';
    userChatResponses = {};
    chatbotInitialized = false;
    currentChatStep = 'start';
}

function setupChatbotFloat() {
    const chatbotBtn = document.getElementById('chatbot-float-button');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    if (chatbotBtn && chatbotWindow && chatbotCloseBtn) {
        chatbotBtn.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
            if (chatbotWindow.classList.contains('active') && !chatbotInitialized) {
                renderChatStep('start');
                chatbotInitialized = true;
            }
        });
        chatbotCloseBtn.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
            setTimeout(resetChatbot, 500);
        });
    }
}

/*
==============================
EVENT LISTENERS & INITIALIZATION
==============================
*/
document.addEventListener('DOMContentLoaded', () => {

    // Atribui os elementos do DOM às variáveis APÓS a página ter carregado
    quizContainer = document.getElementById('quiz-container');
    chatMessagesContainer = document.getElementById('chat-messages');
    chatOptionsContainer = document.getElementById('chat-options');

    injectHeaderAndFooter();
    setupChatbotFloat();

    const path = window.location.pathname;

    if (path.includes('post.html')) {
        renderBlogPostContent();
    } else if (path.includes('blog.html')) {
        renderBlogPosts();
        handleBlogSearch();
    } else if (path.includes('index.html') || path.endsWith('/')) {
        renderProcessSection();
        renderTeamSection();
        renderHighlightedProjects();
        renderHomePageBlogPosts(3);
        renderServicesSection();

        if (siteData.quizData) {
            renderQuizStep(siteData.quizData[0]);
        }
    } else if (path.includes('projeto.html')) {
        renderProjectDetails();
    }

    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
