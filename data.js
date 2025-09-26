// Arquivo de dados centralizado
const siteData = {
    // Dados para o Header e Footer
    navigation: [
        { name: "Início", link: "index.html#home" },
        { name: "Sobre", link: "index.html#about" },
        { name: "Serviços", link: "index.html#services" },
        { name: "Projetos", link: "index.html#projects" },
        { name: "Blog", link: "blog.html" },
        { name: "Contato", link: "index.html#contact" },
    ],
    logos: {
        main: "images/logo.png",
        scrolled: "images/logo-nexus-white.png"
    },
    footer: {
        tagline: "Inovação digital para o seu negócio.",
        address: "Atendimento remoto para todo o Brasil e o mundo.",
        email: "contato@nexusinnova.com.br",
        phone: "+55 (85) 9 9826-1414",
        social: {
            linkedin: "https://www.linkedin.com/in/felipesalvim/",
            instagram: "https://www.instagram.com/nexus_innova",
            facebook: "#",
            whatsapp: "5585998261414"
        }
    },
    // Dados para a seção "Nossos Serviços"
    services: [
        {
            icon: "fas fa-chart-line",
            title: "Business Intelligence e Experiência do Usuário",
            description: "Criamos dashboards e análises de dados para que sua empresa tome decisões estratégicas, além de desenvolver interfaces e fluxos que encantam seus clientes."
        },
        {
            icon: "fas fa-laptop-code",
            title: "FrontEnd e Backend (Full Stack )",
            description: "Desenvolvemos a parte visual e a lógica por trás de sites, e-commerces e aplicativos. Cobrimos todo o ciclo de desenvolvimento, do design à funcionalidade completa."
        },
        {
            icon: "fas fa-cloud",
            title: "Qualidade de Software (Q.A)",
            description: "Garantimos a qualidade, segurança e performance de seus sistemas por meio de testes rigorosos. Sua aplicação estará livre de bugs e pronta para o mercado."
        },
        {
            icon: "fas fa-cogs",
            title: "Suporte em Sites e E-commerce",
            description: "Oferecemos suporte técnico especializado e manutenção para garantir que seus sites, plataformas de e-commerce e sistemas estejam sempre online e com desempenho máximo."
        },
        {
            icon: "fas fa-shield-alt",
            title: "Suporte Técnico e Jurídico",
            description: "Prestamos consultoria jurídica para garantir que sua operação esteja em conformidade com as leis do mercado digital, como a LGPD, protegendo seu negócio de riscos."
        },
        {
            icon: "fas fa-robot",
            title: "Automação de Processos e Otimização Operacional",
            description: "Liberamos sua equipe de tarefas repetitivas. Desenvolvemos soluções personalizadas que otimizam seus fluxos de trabalho, reduzem custos e aumentam a produtividade."
        }
    ],
    // Dados para a seção "Projetos em Destaque"
    highlightedProjects: [
        {
            id: 'projeto-nexus-innova',
            title: 'Website Institucional Nexus Innova',
            image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Desenvolvimento completo do website da Nexus Innova, utilizando HTML, CSS e JavaScript puros para criar uma experiência de usuário dinâmica.',
            status: 'Concluído',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            details: {
                challenge: "Criar um portal digital que representasse a identidade da empresa júnior, comunicasse seus serviços e funcionasse como um ponto de contato e portfólio.",
                solution: "Desenvolvemos um site de página única com seções bem definidas, carregamento dinâmico de conteúdo via JavaScript e um design moderno alinhado à marca da Nexus Innova.",
                results: "O resultado é uma plataforma profissional e ágil que serve como a principal ferramenta de marketing e comunicação da empresa, com todas as informações facilmente acessíveis.",
                projectImage: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liveUrl: "https://www.nexusinnova.com.br/",
                githubUrl: "https://github.com/seu-usuario/nexus-innova-site"
            }
        },
        {
            id: 'sistema-gestao-tarefas',
            title: 'Sistema de Gestão de Tarefas',
            image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Uma plataforma para organizar e gerenciar tarefas de equipes, com foco em metodologias ágeis e colaboração em tempo real.',
            status: 'Em Andamento',
            technologies: ['React', 'Node.js', 'Firebase'],
            details: {
                challenge: "Desenvolver uma ferramenta intuitiva que permita a criação, atribuição e acompanhamento de tarefas de forma eficiente, superando a complexidade de softwares de gestão.",
                solution: "A solução proposta é uma aplicação web com interface reativa construída em React, comunicação em tempo real e um backend robusto em Node.js para gerenciar a lógica de negócio.",
                results: "Espera-se que a plataforma aumente a produtividade das equipes, centralizando a comunicação e oferecendo uma visão clara do andamento de cada projeto.",
                projectImage: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liveUrl: null,
                githubUrl: "https://github.com/seu-usuario/nexus-innova-site"
            }
        },
        {
            id: 'dashboard-ecommerce-bi',
            title: 'Dashboard de Performance de E-commerce',
            image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Criação de um painel de Business Intelligence para análise de vendas, comportamento de clientes e otimização de campanhas de marketing.',
            status: 'Em Andamento',
            technologies: ['Power BI', 'Google Analytics', 'SQL'],
            details: {
                challenge: "O cliente precisava de uma visão unificada dos seus dados de vendas e marketing, que estavam espalhados por diversas planilhas e plataformas.",
                solution: "Consolidamos todas as fontes de dados em um único dashboard interativo no Power BI, permitindo filtros dinâmicos por período, produto e perfil de cliente.",
                results: "A empresa obteve insights que levaram a um aumento de 20% na taxa de conversão e uma otimização de 15% nos gastos com anúncios.",
                projectImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liveUrl: null,
                githubUrl: "https://github.com/seu-usuario/nexus-innova-site"
            }
        },
        {
            id: 'automacao-relatorios-financeiros',
            title: 'Robô para Automação de Relatórios',
            image: 'https://images.pexels.com/photos/7567563/pexels-photo-7567563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Desenvolvimento de um robô (RPA ) que coleta dados de múltiplas fontes, consolida as informações e gera relatórios financeiros mensais automaticamente.',
            status: 'Em Andamento',
            technologies: ['Python', 'Pandas', 'Selenium'],
            details: {
                challenge: "A equipe financeira gastava mais de 40 horas por mês em tarefas manuais e repetitivas para compilar relatórios, o que gerava atrasos e erros.",
                solution: "Criamos um script de automação que executa a coleta, limpeza e formatação dos dados de forma agendada, enviando o relatório finalizado por e-mail para os gestores.",
                results: "O tempo gasto na geração de relatórios foi reduzido em 99%, eliminando erros manuais e liberando a equipe para focar em análises estratégicas.",
                projectImage: "https://images.pexels.com/photos/7567563/pexels-photo-7567563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liveUrl: null,
                githubUrl: "https://github.com/seu-usuario/nexus-innova-site"
            }
        },
        {
            id: 'consultoria-testes-qa',
            title: 'Consultoria de Testes (QA ) para App Financeiro',
            image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Planejamento e execução de um ciclo completo de testes de qualidade para garantir a segurança e a estabilidade de um aplicativo financeiro antes do seu lançamento.',
            status: 'Em Andamento',
            technologies: ['Cypress', 'Jira', 'Testes de API'],
            details: {
                challenge: "Garantir que o aplicativo estivesse livre de bugs críticos e vulnerabilidades de segurança que pudessem comprometer os dados dos usuários.",
                solution: "Realizamos testes de funcionalidade, usabilidade, performance e segurança, documentando todos os cenários e bugs encontrados na plataforma Jira para a equipe de desenvolvimento.",
                results: "Foram identificadas e corrigidas 12 vulnerabilidades críticas antes do lançamento, garantindo a confiança do usuário e a conformidade do app com as normas do setor.",
                projectImage: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liveUrl: null,
                githubUrl: "https://github.com/seu-usuario/nexus-innova-site"
            }
        },
        {
            id: 'suporte-manutencao-loja',
            title: 'Plano de Suporte e Manutenção para Loja Online',
            image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Contrato de suporte técnico contínuo para um e-commerce, incluindo monitoramento de uptime, backups de segurança, atualizações e otimizações de performance.',
            status: 'Em Andamento',
            technologies: ['WooCommerce', 'WordPress', 'Monitoramento'],
            details: {
                challenge: "O cliente sofria com a instabilidade do site e a falta de um parceiro técnico para resolver problemas urgentes, o que resultava em perda de vendas.",
                solution: "Implementamos um sistema de monitoramento 24/7 e uma rotina de backups diários. Oferecemos um canal de suporte direto para resolver rapidamente qualquer problema técnico.",
                results: "O tempo de inatividade (downtime ) do site foi reduzido a zero, e a velocidade de carregamento das páginas melhorou em 40%, aumentando a satisfação do cliente.",
                projectImage: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liveUrl: null,
                githubUrl: "https://github.com/seu-usuario/nexus-innova-site"
            }
        },
        {
            id: 'consultoria-lgpd',
            title: 'Consultoria e Adequação à LGPD',
            image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Serviço de consultoria para mapear o tratamento de dados pessoais de uma empresa, revisar documentos e garantir a conformidade com a Lei Geral de Proteção de Dados.',
            status: 'Em Andamento',
            technologies: ['LGPD', 'Direito Digital', 'Segurança da Informação'],
            details: {
                challenge: "A empresa precisava se adequar à LGPD para evitar multas e construir uma relação de confiança com seus clientes, mas não sabia por onde começar.",
                solution: "Realizamos uma auditoria completa, criamos uma Política de Privacidade personalizada, revisamos os Termos de Uso e treinamos a equipe sobre as melhores práticas de tratamento de dados.",
                results: "A empresa está 100% em conformidade com a LGPD, utilizando a adequação como um diferencial competitivo no mercado.",
                projectImage: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liveUrl: null,
                githubUrl: "https://github.com/seu-usuario/nexus-innova-site"
            }
        }
    ],
    // Dados para a seção "Nosso Processo de Trabalho"
    processSteps: [
        {
            title: "Consulta Inicial",
            description: "Entendemos seu desafio, objetivos e visão para o projeto."
        },
        {
            title: "Planejamento Estratégico",
            description: "Criamos um plano de ação detalhado e um cronograma para o projeto."
        },
        {
            title: "Desenvolvimento e Design",
            description: "Nossa equipe de especialistas executa o projeto com foco em inovação e qualidade."
        },
        {
            title: "Entrega e Suporte",
            description: "Entregamos a solução final e oferecemos suporte contínuo."
        }
    ],
    // Dados para a seção "Nosso Time"
    teamMembers: [
        {
            name: "Erivânia Dias",
            role: "Suporte em Sites e E-commerce",
            photo: "images/membros/Erivania.png",
            linkedin: "https://www.linkedin.com/in/dias-erivania",
            instagram: "https://www.instagram.com/dias_erivania/"
        },
        {
            name: "Felipe Alvim",
            role: "FrontEnd Developer",
            photo: "images/membros/Felipe.png",
            linkedin: "https://www.linkedin.com/in/felipesalvim/",
            instagram: "https://instagram.com/eusouoalvim"
        },
        {
            name: "Gabriel Marques",
            role: "BI e UX Designer",
            photo: "images/membros/Gabriel.png",
            linkedin: "https://www.linkedin.com/in/gabriel-marques-496b11314/",
            instagram: "#"
        },
        {
            name: "Ismael Oliveira",
            role: "Suporte Técnico e Jurídico",
            photo: "images/membros/Ismael.png",
            linkedin: "https://www.linkedin.com/in/ismael-oliveira-3a98b51a2/",
            instagram: "https://www.instagram.com/ismaelolivs/"
        },
        {
            name: "Sarah Marques",
            role: "Qualidade e Testes de Software",
            photo: "images/membros/Sarah.png",
            linkedin: "https://www.linkedin.com/in/sarah-marques-553ab620a/",
            instagram: "https://www.instagram.com/sarahribeiro4437/"
        }
    ],
    // Dados para o Blog
    blogPosts: [
        {
            id: 'lgpd-para-empresas',
            title: 'Guia Essencial de LGPD para Empresas',
            description: 'Entenda o que é a LGPD e como sua empresa pode se adequar sem complicação.',
            image: 'https://images.pexels.com/photos/3862635/pexels-photo-3862635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '18 de setembro, 2025',
            tags: ['Cibersegurança', 'Proteção de Dados'],
            content: `
            <p>A <strong>Lei Geral de Proteção de Dados (LGPD)</strong> é mais do que uma sigla; é uma mudança de cultura na forma como as empresas lidam com informações pessoais. Entender seu impacto e se adequar a ela é fundamental para proteger seu negócio de multas e, principalmente, construir a confiança dos seus clientes.</p>
            <p>A lei estabelece regras claras sobre a coleta, uso, armazenamento e compartilhamento de dados pessoais. O não cumprimento pode resultar em penalidades severas, mas a conformidade, além de obrigatória, traz vantagens competitivas e reforça a imagem da sua empresa como uma organização que preza pela privacidade.</p>
            <h2>O Que a LGPD Significa para Você?</h2>
            <p>A LGPD se aplica a qualquer empresa que realize o tratamento de dados pessoais de cidadãos brasileiros. "Tratamento" é um termo amplo que engloba toda a operação, desde a coleta até a eliminação dos dados. Se sua empresa possui um simples formulário de contato no site, ela já está sob o escopo da lei.</p>
            <p>Adequar-se é um processo contínuo que exige o envolvimento de toda a organização. Se você precisa de uma consultoria especializada, nossa equipe está pronta para ajudar. Veja também nosso artigo sobre <a href="/blog/post.html?id=seguranca-cibernetica-lgpd">Segurança Cibernética na Era da LGPD</a> para aprofundar no tema.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">Lei nº 13.709/2018 (LGPD) na íntegra</a> - Site do Planalto</li>
                <li><a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer">Autoridade Nacional de Proteção de Dados (ANPD)</a> - Site Oficial</li>
            </ul>
            <a href="https://wa.me/5585985151337?text=Olá! Vi o artigo sobre LGPD e gostaria de falar com um especialista." class="cta-button" target="_blank">Fale com o Especialista Jurídico (Ismael)</a>
        `
        },
        {
            id: 'automacao-negocio',
            title: 'Como a Automação pode Salvar seu Negócio',
            description: 'Descubra 5 processos simples que você pode automatizar para aumentar a produtividade.',
            image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '19 de setembro, 2025',
            tags: ['Automação', 'Produtividade', 'Eficiência'],
            content: `
            <p>O tempo é o recurso mais valioso de uma empresa. Processos manuais e repetitivos consomem horas que poderiam ser usadas para o <strong>crescimento estratégico do negócio</strong>. A automação deixou de ser um luxo para se tornar uma necessidade para quem busca eficiência e escalabilidade no mercado atual.</p>
            <p>Neste artigo, vamos explorar como a automação de processos pode liberar sua equipe de tarefas tediosas, reduzir a incidência de erros humanos e impulsionar a produtividade geral da sua empresa, permitindo que o foco seja direcionado para a inovação e o atendimento ao cliente.</p>
            <h2>5 Processos Chave para Automatizar Agora</h2>
            <p>Não sabe por onde começar? Aqui estão alguns dos processos mais comuns que podem ser automatizados para gerar um impacto imediato no seu negócio:</p>
            <ol>
                <li><strong>Envio de e-mails de marketing e nutrição de leads.</li>
                <li><strong>Coleta e análise de dados para geração de relatórios (veja nosso post sobre <a href="/blog/post.html?id=bi-para-pequenas-empresas">Business Intelligence</a>).</li>
                <li><strong>Atendimento ao cliente com chatbots para perguntas frequentes.</li>
                <li><strong>Fluxo de aprovação de documentos digitais.</li>
            </ol>
            <p>A automação é um pilar da transformação digital e pode ser aplicada em praticamente qualquer setor. O segredo é começar pequeno, identificar os maiores gargalos operacionais e escalar a solução aos poucos.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="https://www.forbes.com/advisor/business/what-is-business-process-automation/" target="_blank" rel="noopener noreferrer">O Que é Automação de Processos de Negócio?</a> - Forbes</li>
                <li><a href="https://www.ibm.com/topics/robotic-process-automation" target="_blank" rel="noopener noreferrer">Automação de Processos Robótica (RPA)</a> - IBM</li>
            </ul>
            <a href="https://wa.me/5585998261414?text=Olá! Vi o artigo sobre Automação e gostaria de falar com um especialista." class="cta-button" target="_blank">Fale com o Especialista em Automação (Felipe)</a>
        `
        },
        {
            id: 'startup-mvp',
            title: 'Por que sua Startup precisa de um MVP?',
            description: 'Conheça a importância de um Produto Mínimo Viável e como ele acelera seu lançamento.',
            image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '20 de setembro, 2025',
            tags: ['Startup', 'MVP', 'Desenvolvimento'],
            content: `
            <p>Muitas startups cometem o erro de tentar construir a versão "perfeita" de um produto antes de lançá-lo, resultando em gastos excessivos de tempo e dinheiro. É aqui que entra o conceito de <strong>Produto Mínimo Viável (MVP)</strong>, uma abordagem estratégica para validar ideias de forma rápida e eficiente.</p>
            <p>O MVP não é um produto inacabado, mas sim a versão mais simples do seu produto que entrega o valor principal para um grupo inicial de usuários. O objetivo é coletar o máximo de aprendizado sobre seus clientes com o mínimo de esforço, usando dados reais para guiar os próximos passos do desenvolvimento.</p>
            <h2>Benefícios de Construir um MVP</h2>
            <p>Adotar a estratégia de MVP pode ser o diferencial entre o sucesso e o fracasso de uma startup. Os principais benefícios incluem:</p>
            <ul>
                <li><strong>Validação de Ideia:</strong> Teste sua hipótese diretamente no mercado real antes de investir pesado.</li>
                <li><strong>Redução de Custos e Riscos:</strong> Evite gastar recursos em funcionalidades que ninguém vai usar.</li>
                <li><strong>Lançamento Rápido (Time-to-Market):</strong> Coloque seu produto no ar em semanas, e não em anos.</li>
            </ul>
            <p>Nossa equipe de desenvolvimento pode te ajudar a definir e construir um MVP eficiente. Entender a diferença entre <a href="/blog/post.html?id=frontend-vs-backend">FrontEnd e BackEnd</a> é o primeiro passo técnico.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="https://www.ycombinator.com/library/4Q-a-guide-to-minimum-viable-products" target="_blank" rel="noopener noreferrer">Guia de MVPs</a> - Y Combinator</li>
                <li><a href="https://hbr.org/2016/04/the-power-of-minimum-viable-products" target="_blank" rel="noopener noreferrer">O Poder dos MVPs</a> - Harvard Business Review</li>
            </ul>
            <a href="https://wa.me/5585998261414?text=Olá! Vi o artigo sobre MVP e gostaria de falar com um desenvolvedor." class="cta-button" target="_blank">Fale com o Desenvolvedor (Felipe)</a>
        `
        },
        {
            id: 'bi-para-pequenas-empresas',
            title: 'BI para Pequenas Empresas: Como Começar',
            description: 'Descubra como o Business Intelligence pode ser usado para impulsionar o crescimento do seu negócio.',
            image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '21 de setembro, 2025',
            tags: ['BI', 'Análise de Dados', 'Pequenas Empresas'],
            content: `
            <p>Muitos empreendedores pensam que o <strong>Business Intelligence (BI)</strong> é uma ferramenta exclusiva para grandes corporações. Mas a verdade é que pequenos negócios também podem (e devem) se beneficiar da análise de dados para tomar decisões mais inteligentes e estratégicas.</p>
            <p>Implementar uma cultura de dados não precisa ser caro ou complexo. Com as ferramentas certas, é possível transformar as informações que sua empresa já gera em dashboards visuais e insights poderosos que ajudam a entender melhor seus clientes e a identificar oportunidades de crescimento.</p>
            <h2>Passos para Implementar o BI no seu Negócio</h2>
            <ol>
                <li><strong>Defina seus objetivos:</strong> O que você quer monitorar? Vendas, tráfego do site, etc.</li>
                <li><strong>Escolha as ferramentas certas:</strong> Existem opções acessíveis como o Looker Studio (antigo Google Data Studio).</li>
                <li><strong>Crie seu primeiro dashboard:</strong> Comece com métricas simples e evolua aos poucos.</li>
            </ol>
            <p>Com um dashboard de BI, você terá uma visão clara do seu negócio. Lembre-se que a análise de dados está diretamente ligada a uma boa <a href="/blog/post.html?id=ux-nao-e-apenas-design">Experiência do Usuário (UX)</a>.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="https://lookerstudio.google.com/" target="_blank" rel="noopener noreferrer">Google Looker Studio</a> - Ferramenta Gratuita de BI</li>
                <li><a href="https://www.tableau.com/learn/articles/business-intelligence" target="_blank" rel="noopener noreferrer">O que é Business Intelligence?</a> - Tableau</li>
            </ul>
            <a href="https://wa.me/5585989348489?text=Olá! Vi o artigo sobre BI e gostaria de uma consultoria." class="cta-button" target="_blank">Fale com o Especialista em BI (Gabriel)</a>
        `
        },
        {
            id: 'frontend-vs-backend',
            title: 'FrontEnd vs. BackEnd: Qual a Diferença?',
            description: 'Entenda a divisão do desenvolvimento de software e como eles se unem para criar uma aplicação completa.',
            image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '22 de setembro, 2025',
            tags: ['Desenvolvimento', 'Full Stack', 'Programação'],
            content: `
            <p>No mundo do desenvolvimento de software, os termos <strong>FrontEnd</strong> e <strong>BackEnd</strong> são onipresentes. De forma simples, eles representam as duas faces de qualquer aplicação digital, trabalhando juntas para entregar uma experiência completa ao usuário.</p>
            <p>O <strong>FrontEnd</strong> é tudo aquilo que o usuário vê e com que interage: os botões, menus, cores e layouts. É o "palco" do show. Já o <strong>BackEnd</strong> é o que acontece nos bastidores: a lógica de negócio, o banco de dados e os servidores que fazem tudo funcionar.</p>
            <h2>Como Eles se Conectam?</h2>
            <p>A comunicação entre FrontEnd e BackEnd geralmente acontece por meio de APIs (Interfaces de Programação de Aplicações). O profissional que domina ambas as áreas é conhecido como <strong>Desenvolvedor Full Stack</strong>.</p>
            <p>Entender essa divisão é crucial para o planejamento de qualquer projeto digital, e não se pode esquecer da <a href="/blog/post.html?id=importancia-qa">Qualidade de Software (QA)</a> para garantir que tudo funcione perfeitamente.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="https://developer.mozilla.org/pt-BR/docs/Learn/Front-end_web_developer" target="_blank" rel="noopener noreferrer">Guia de Front-End</a> - MDN Web Docs</li>
                <li><a href="https://www.freecodecamp.org/news/what-is-the-backend-of-a-website/" target="_blank" rel="noopener noreferrer">O que é o Back-End?</a> - freeCodeCamp</li>
            </ul>
            <a href="https://wa.me/5585998261414?text=Olá! Vi o artigo sobre FrontEnd/BackEnd e gostaria de falar com um desenvolvedor." class="cta-button" target="_blank">Fale com o Desenvolvedor (Felipe)</a>
        `
        },
        {
            id: 'importancia-qa',
            title: 'A Importância da Qualidade de Software (QA)',
            description: 'Qualidade de software não é um luxo, é uma necessidade. Saiba por que investir em QA é crucial.',
            image: 'https://images.pexels.com/photos/5926392/pexels-photo-5926392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '23 de setembro, 2025',
            tags: ['QA', 'Qualidade de Software', 'Testes'],
            content: `
            <p>Um software com falhas pode custar caro: perda de clientes, danos à reputação e prejuízos financeiros. É por isso que a <strong>Qualidade de Software (QA - Quality Assurance)</strong> não é um luxo, mas uma necessidade fundamental em qualquer projeto de desenvolvimento sério.</p>
            <p>O processo de QA vai muito além de "caçar bugs". Ele envolve atividades planejadas para garantir que o produto final atenda aos requisitos e às expectativas do usuário, sendo seguro, confiável e fácil de usar. Investir em QA é investir na satisfação do seu cliente.</p>
            <h2>Como Funciona o Nosso Processo de QA</h2>
            <p>Uma estratégia de qualidade eficaz garante que os problemas sejam identificados o mais cedo possível. Nossa metodologia inclui:</p>
            <ul>
                <li><strong>Testes de Funcionalidade:</strong> Verificamos se todas as funções operam como esperado.</li>
                <li><strong>Testes de Usabilidade:</strong> Avaliamos se a experiência do usuário é fluida e intuitiva.</li>
                <li><strong>Testes de Segurança:</strong> Identificamos vulnerabilidades que possam comprometer os dados.</li>
            </ul>
            <p>Um bom software não é apenas aquele que funciona, mas aquele em que o usuário confia. A Qualidade de Software é o pilar dessa confiança, especialmente ao lançar um <a href="/blog/post.html?id=startup-mvp">MVP</a>.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="https://www.istqb.org/" target="_blank" rel="noopener noreferrer">ISTQB® (International Software Testing Qualifications Board)</a> - Órgão Global de Certificação</li>
            </ul>
            <a href="https://wa.me/5585986335355?text=Olá! Vi o artigo sobre QA e gostaria de uma consultoria." class="cta-button" target="_blank">Fale com a Especialista em QA (Sarah)</a>
        `
        },
        {
            id: 'suporte-ecommerce',
            title: 'Como um Bom Suporte Salva seu E-commerce',
            description: 'Problemas técnicos podem custar vendas. Entenda como o suporte proativo garante que seu e-commerce esteja sempre no ar.',
            image: 'https://images.pexels.com/photos/4049818/pexels-photo-4049818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '24 de setembro, 2025',
            tags: ['Suporte', 'E-commerce', 'Manutenção'],
            content: `
            <p>Em um mercado digital competitivo, um e-commerce fora do ar por alguns minutos pode significar dezenas de vendas perdidas. O <strong>suporte técnico proativo</strong> é o seguro que garante que sua loja virtual esteja sempre disponível, rápida e segura para seus clientes.</p>
            <p>Muitos lojistas só pensam no suporte quando um problema grave acontece, mas a verdadeira eficiência está na prevenção. Um bom serviço de manutenção atua para evitar falhas antes que elas afetem suas vendas e a reputação da sua marca.</p>
            <h2>O que um Suporte de Qualidade Inclui:</h2>
            <p>Um serviço de suporte completo vai além de "apagar incêndios". Nossos planos incluem:</p>
            <ul>
                <li><strong>Monitoramento de Uptime:</strong> Verificamos a disponibilidade do seu site a cada minuto.</li>
                <li><strong>Backups de Segurança:</strong> Mantemos cópias de segurança diárias para evitar perda de dados.</li>
                <li><strong>Atualizações de Segurança:</strong> Protegemos sua loja contra vulnerabilidades, um ponto crucial discutido em nosso post sobre <a href="/blog/post.html?id=seguranca-cibernetica-lgpd">Segurança Cibernética</a>.</li>
            </ul>
            <p>Investir na estabilidade do seu e-commerce não é um custo, é um investimento no seu faturamento.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="https://www.bigcommerce.com/blog/website-downtime/" target="_blank" rel="noopener noreferrer">O Custo do Downtime para E-commerces</a> - BigCommerce</li>
            </ul>
            <a href="https://wa.me/5585988387896?text=Olá! Vi o artigo sobre suporte e preciso de um plano para meu e-commerce." class="cta-button" target="_blank">Fale com a Especialista em Suporte (Erivânia)</a>
        `
        },
        {
            id: 'ux-nao-e-apenas-design',
            title: 'UX não é Apenas Design: A Estratégia por Trás',
            description: 'Entenda como uma boa experiência do usuário (UX) vai além da estética e se torna uma ferramenta de crescimento.',
            image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '25 de setembro, 2025',
            tags: ['UX', 'Design', 'Estratégia'],
            content: `
            <p>Muitos confundem <strong>UX (User Experience)</strong> com UI (User Interface), acreditando que se trata apenas de criar uma aparência bonita. No entanto, a UX é uma disciplina muito mais profunda e estratégica, focada em toda a jornada do cliente com o seu produto.</p>
            <p>Enquanto o UI Design se concentra na parte visual, o UX Design se preocupa com a usabilidade, a acessibilidade e a satisfação do usuário. Uma boa UX garante que o produto seja fácil de usar, intuitivo e que resolva um problema real do cliente de forma eficiente.</p>
            <h2>Como Estruturamos a Experiência do Usuário</h2>
            <p>Um projeto de UX bem-sucedido é baseado em pesquisa e dados, não em achismos. Nosso processo é estruturado para entender profundamente o usuário e o negócio:</p>
            <ol>
                <li><strong>Pesquisa e Análise:</strong> Entendemos quem é seu público e suas necessidades.</li>
                <li><strong>Mapeamento da Jornada:</strong> Desenhamos o fluxo de interação do usuário com o produto.</li>
                <li><strong>Prototipação e Testes:</strong> Criamos protótipos e realizamos testes de usabilidade com usuários reais.</li>
            </ol>
            <p>Investir em UX não é um detalhe, é uma ferramenta poderosa de crescimento, muitas vezes alimentada por dados de <a href="/blog/post.html?id=bi-para-pequenas-empresas">Business Intelligence</a>.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="https://www.nngroup.com/articles/definition-user-experience/" target="_blank" rel="noopener noreferrer">A Definição de User Experience</a> - Nielsen Norman Group</li>
            </ul>
            <a href="https://wa.me/5585989348489?text=Olá! Vi o artigo sobre UX e gostaria de melhorar a experiência do meu site." class="cta-button" target="_blank">Fale com o Especialista em UX (Gabriel)</a>
        `
        },
        {
            id: 'seguranca-cibernetica-lgpd',
            title: 'Segurança Cibernética na Era da LGPD',
            description: 'A LGPD tornou a segurança de dados uma prioridade. Saiba como proteger seu negócio de ataques.',
            image: 'https://images.pexels.com/photos/5926391/pexels-photo-5926391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '26 de setembro, 2025',
            tags: ['Segurança', 'LGPD', 'Cibersegurança'],
            content: `
            <p>Com a <strong>LGPD</strong> em pleno vigor, a segurança de dados deixou de ser uma boa prática para se tornar uma responsabilidade legal. Um ataque cibernético pode resultar não apenas em multas pesadas, mas também em danos irreparáveis à reputação da sua marca.</p>
            <p>A segurança cibernética não se resume a instalar um antivírus. Trata-se de uma estratégia abrangente que envolve tecnologia, processos e pessoas para proteger a integridade e a confidencialidade das informações.</p>
            <h2>Nossos Serviços de Segurança Cibernética</h2>
            <p>Proteger seu negócio digital requer uma abordagem proativa. Nós oferecemos soluções de cibersegurança completas, que incluem:</p>
            <ul>
                <li><strong>Análise de Vulnerabilidades (Pentest):</strong> Identificamos e corrigimos pontos fracos em seus sistemas.</li>
                <li><strong>Implementação de Medidas de Segurança:</strong> Configuramos firewalls e outras ferramentas de proteção.</li>
                <li><strong>Treinamento de Equipe:</strong> Capacitamos sua equipe para reconhecer e evitar ameaças como phishing.</li>
            </ul>
            <p>Proteja seu negócio e seus clientes com a nossa consultoria especializada em cibersegurança e <a href="/blog/post.html?id=lgpd-para-empresas">adequação à LGPD</a>.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer">OWASP Top 10</a> - As 10 Maiores Vulnerabilidades Web</li>
            </ul>
            <a href="https://wa.me/5585985151337?text=Olá! Vi o artigo sobre segurança e LGPD e gostaria de falar com um especialista." class="cta-button" target="_blank">Fale com o Especialista (Ismael)</a>
        `
        },
        {
            id: 'estrategia-tecnologia-negocio',
            title: 'Como Alinhar Tecnologia e Estratégia de Negócio',
            description: 'A tecnologia é uma ferramenta, não um fim. Aprenda a usar a T.I. de forma estratégica para alcançar seus objetivos.',
            image: 'https://images.pexels.com/photos/5926402/pexels-photo-5926402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: '27 de setembro, 2025',
            tags: ['Consultoria', 'Estratégia', 'Inovação'],
            content: `
            <p>Ter a tecnologia mais avançada não garante o sucesso. O segredo é alinhar a <strong>estratégia de T.I. com os objetivos de negócio</strong>. A tecnologia deve ser vista como uma ferramenta poderosa para resolver problemas e criar oportunidades, e não como um fim em si mesma.</p>
            <p>Uma consultoria em T.I. estratégica ajuda a fazer exatamente isso. Analisamos sua operação, entendemos sua visão e mapeamos as melhores soluções tecnológicas para que você atinja seus objetivos de forma eficiente, escalável e sustentável.</p>
            <h2>Benefícios da Consultoria Estratégica em T.I.</h2>
            <p>Trabalhar com uma consultoria especializada traz uma visão externa e experiente. Os principais benefícios são:</p>
            <ul>
                <li><strong>Planejamento de Longo Prazo:</strong> Definimos um plano de ação (roadmap) para a evolução tecnológica da sua empresa.</li>
                <li><strong>Inovação Direcionada:</strong> Ajudamos a identificar novas ferramentas e processos, como a <a href="/blog/post.html?id=automacao-negocio">automação</a>.</li>
                <li><strong>Otimização de Custos:</strong> Garantimos que seu investimento em T.I. gere o máximo de retorno (ROI).</li>
            </ul>
            <p>Transforme a sua tecnologia de um centro de custo para uma vantagem competitiva.</p>
            <h3>Para Saber Mais</h3>
            <ul>
                <li><a href="https://sloanreview.mit.edu/topic/it-strategy/" target="_blank" rel="noopener noreferrer">Estratégia de TI</a> - MIT Sloan Management Review</li>
            </ul>
            <a href="https://wa.me/5585998261414?text=Olá! Vi o artigo sobre estratégia e T.I. e gostaria de falar com um consultor." class="cta-button" target="_blank">Fale com um Consultor (Felipe)</a>
        `
        }
    ],
    // Dados para o Quiz na seção de Contato
    quizData: [
        {
            question: "Qual o serviço que você busca?",
            type: "select",
            name: "serviceGroup",
            options: [
                { value: "bi-ux", text: "Business Intelligence e Experiência do Usuário" },
                { value: "full-stack", text: "Desenvolvimento de Software (Full Stack)" },
                { value: "qa", text: "Qualidade de Software (Q.A)" },
                { value: "sites", text: "Suporte em Sites e E-commerce" },
                { value: "suporte", text: "Suporte Técnico e Jurídico" },
                { value: "automacao", text: "Automação de Processos e Otimização Operacional" }
            ],
            next: {
                "bi-ux": {
                    question: "Sua necessidade é com dados ou BI?",
                    type: "select",
                    name: "dataSubtype",
                    options: [
                        { value: "analytics", text: "Análise de Dados", whatsapp: "5585989348489", message: "Olá! Preciso de ajuda com a análise de dados." },
                        { value: "bi-dashboard", text: "Dashboard de BI", whatsapp: "5585989348489", message: "Olá! Gostaria de desenvolver um dashboard de Business Intelligence." }
                    ]
                },
                "full-stack": {
                    question: "Qual tipo de desenvolvimento você precisa?",
                    type: "select",
                    name: "webSubtype",
                    options: [
                        { value: "site", text: "Site Institucional", whatsapp: "5585998261414", message: "Olá! Tenho interesse em um site institucional." },
                        { value: "ecommerce", text: "E-commerce", whatsapp: "5585998261414", message: "Olá! Gostaria de uma consultoria para um projeto de e-commerce." },
                        { value: "app", text: "Aplicativo Mobile", whatsapp: "5585998261414", message: "Olá! Tenho uma ideia para um aplicativo mobile." }
                    ]
                },
                "qa": {
                    question: "Qual tipo de consultoria de qualidade você busca?",
                    type: "select",
                    name: "qaSubtype",
                    options: [
                        { value: "testes", text: "Testes Automatizados", whatsapp: "5585986335355", message: "Olá! Tenho interesse em testes automatizados." },
                        { value: "auditoria", text: "Auditoria de Qualidade", whatsapp: "5585986335355", message: "Olá! Gostaria de uma auditoria de qualidade de software." }
                    ]
                },
                "sites": {
                    question: "Qual tipo de suporte você precisa?",
                    type: "select",
                    name: "supportSubtype",
                    options: [
                        { value: "manutencao", text: "Manutenção e Atualizações", whatsapp: "5585988387896", message: "Olá! Preciso de um plano de manutenção para meu site." },
                        { value: "suporte-tecnico", text: "Suporte Técnico", whatsapp: "5585988387896", message: "Olá! Estou com problemas técnicos no meu site e preciso de ajuda." }
                    ]
                },
                "suporte": {
                    question: "Qual a sua necessidade de consultoria?",
                    type: "select",
                    name: "legalSubtype",
                    options: [
                        { value: "juridica", text: "Consultoria Jurídica (LGPD)", whatsapp: "5585985151337", message: "Olá! Tenho interesse em consultoria jurídica sobre LGPD." },
                        { value: "tecnica", text: "Consultoria Técnica", whatsapp: "5585985151337", message: "Olá! Preciso de uma consultoria técnica para o meu projeto." }
                    ]
                },
                "automacao": {
                    question: "Por favor, descreva sua necessidade de automação.",
                    type: "textarea",
                    name: "automationDetails",
                    whatsapp: "5585998261414",
                    message: "Olá! Gostaria de saber mais sobre automação de processos. Meu interesse é: "
                }
            }
        },
        {
            question: "Como você prefere ser atendido?",
            type: "select",
            name: "contactOption",
            options: [
                { value: "whatsapp", text: "Ir para o WhatsApp", whatsapp: "5585998261414", message: "Olá! Gostaria de conversar sobre meu projeto." },
            ]
        }
    ],
    // DADOS PARA O CHATBOT (VERSÃO CONSULTIVA APROFUNDADA)
    chatBotData: {
        'start': {
            message: "Olá! Sou o assistente virtual da Nexus Innova. Para começarmos, qual o seu nome?",
            type: 'text_input',
            nextStep: 'ask_email'
        },
        'ask_email': {
            message: "É um prazer te conhecer, {nome}! Qual o seu melhor e-mail para contato?",
            type: 'text_input',
            nextStep: 'ask_service'
        },
        'ask_service': {
            message: "Obrigado! Agora, para que eu possa te ajudar, qual serviço você busca?",
            options: [
                { text: "BI e UX", nextStep: "bi_ux_q1" },
                { text: "Desenvolvimento Web", nextStep: "fullstack_q1" },
                { text: "Qualidade de Software", nextStep: "qa_q1" },
                { text: "Suporte e Manutenção", nextStep: "sites_q1" },
                { text: "Consultoria Jurídica/LGPD", nextStep: "juridico_q1" },
                { text: "Automação de Processos", nextStep: "automacao_q1" }
            ]
        },
        // --- FLUXO DE BI & UX ---
        'bi_ux_q1': {
            message: "Ótima escolha! Para qual objetivo você precisa de BI ou UX?",
            options: [
                { text: "Visualizar dados (Dashboard)", nextStep: "bi_ux_q2_dash" },
                { text: "Melhorar a experiência do meu app/site", nextStep: "bi_ux_q2_ux" }
            ]
        },
        'bi_ux_q2_dash': {
            message: "Perfeito, um Dashboard. Qual a principal fonte dos seus dados hoje?",
            options: [
                { text: "Planilhas (Excel, Sheets)", nextStep: "bi_ux_q3_final" },
                { text: "Sistema interno / Banco de Dados", nextStep: "bi_ux_q3_final" },
                { text: "Ainda não coleto dados", nextStep: "bi_ux_q3_final" }
            ]
        },
        'bi_ux_q2_ux': {
            message: "Excelente foco! E qual o maior desafio de experiência que você enfrenta?",
            options: [
                { text: "Baixa conversão de vendas", nextStep: "bi_ux_q3_final" },
                { text: "Usuários confusos ou perdidos", nextStep: "bi_ux_q3_final" },
                { text: "Design antigo ou pouco intuitivo", nextStep: "bi_ux_q3_final" }
            ]
        },
        'bi_ux_q3_final': {
            message: "Entendido. Com base nessas informações, o Gabriel pode te ajudar a montar a melhor estratégia. Vamos falar com ele?",
            options: [
                { text: "Sim, falar com o especialista", whatsapp: "5585989348489", message: "Gostaria de uma consultoria em BI/UX.", pdfLink: "https://www.nexusinnova.com.br/apresentacoes/servico-bi-ux.pdf" },
                { text: "Voltar ao início", nextStep: "start" }
            ]
        },
        // --- FLUXO DE DESENVOLVIMENTO WEB ---
        'fullstack_q1': {
            message: "Excelente! Construímos soluções web completas. Qual tipo de projeto você tem em mente?",
            options: [
                { text: "Site Institucional", nextStep: "fullstack_q2_site" },
                { text: "E-commerce / Loja Virtual", nextStep: "fullstack_q2_ecommerce" }
            ]
        },
        'fullstack_q2_site': {
            message: "Ótimo. Você já possui um domínio e hospedagem para o site?",
            options: [
                { text: "Sim, já tenho", nextStep: "fullstack_q3_conteudo" },
                { text: "Não, preciso de ajuda com isso", nextStep: "fullstack_q3_conteudo" }
            ]
        },
        'fullstack_q2_ecommerce': {
            message: "Perfeito. Qual o principal desafio do seu e-commerce hoje?",
            options: [
                { text: "Começar uma loja do zero", nextStep: "fullstack_q3_conteudo" },
                { text: "Melhorar a performance da loja atual", nextStep: "fullstack_q3_conteudo" },
                { text: "Integrar novos meios de pagamento", nextStep: "fullstack_q3_conteudo" }
            ]
        },
        'fullstack_q3_conteudo': {
            message: "Ok! Para finalizar, como está o material de conteúdo (textos, fotos dos produtos, etc.)?",
            options: [
                { text: "Tenho tudo pronto", nextStep: "fullstack_q4_final" },
                { text: "Preciso de ajuda para produzir", nextStep: "fullstack_q4_final" }
            ]
        },
        'fullstack_q4_final': {
            message: "Perfeito! O Felipe, nosso especialista em desenvolvimento, já tem um bom ponto de partida. Vamos falar com ele?",
            options: [
                { text: "Sim, falar com o especialista", whatsapp: "5585998261414", message: "Gostaria de uma consultoria em Desenvolvimento Web." },
                { text: "Voltar ao início", nextStep: "start" }
            ]
        },
        // --- FLUXO DE QUALIDADE DE SOFTWARE (QA) ---
        'qa_q1': {
            message: "Qualidade é fundamental. Qual é a sua situação atual?",
            options: [
                { text: "Tenho um software novo para testar", nextStep: "qa_q2_novo" },
                { text: "Quero uma auditoria em um software existente", nextStep: "qa_q2_existente" }
            ]
        },
        'qa_q2_novo': {
            message: "Entendi. E qual a sua maior prioridade para os testes?",
            options: [
                { text: "Garantir a segurança", nextStep: "qa_q3_final" },
                { text: "Encontrar e corrigir bugs", nextStep: "qa_q3_final" },
                { text: "Garantir alta performance", nextStep: "qa_q3_final" }
            ]
        },
        'qa_q2_existente': {
            message: "Ok, uma auditoria. Qual o principal problema que você observa hoje?",
            options: [
                { text: "Relatos de bugs e travamentos", nextStep: "qa_q3_final" },
                { text: "Preocupação com segurança", nextStep: "qa_q3_final" },
                { text: "Lentidão em horários de pico", nextStep: "qa_q3_final" }
            ]
        },
        'qa_q3_final': {
            message: "Ótimo. A Sarah, nossa especialista em QA, pode criar um plano de testes sob medida para você. Vamos falar com ela?",
            options: [
                { text: "Sim, falar com a especialista", whatsapp: "5585986335355", message: "Gostaria de uma consultoria em Qualidade de Software (QA)." },
                { text: "Voltar ao início", nextStep: "start" }
            ]
        },
        // --- FLUXO DE SUPORTE E MANUTENÇÃO ---
        'sites_q1': {
            message: "Perfeito. Manter um site saudável é crucial. Qual tipo de suporte você precisa?",
            options: [
                { text: "Um plano de manutenção contínuo", nextStep: "sites_q2_plano" },
                { text: "Resolver um problema urgente", nextStep: "sites_q2_urgente" }
            ]
        },
        'sites_q2_plano': {
            message: "Ótimo. Nossos planos garantem segurança e performance. Qual a plataforma do seu site?",
            options: [
                { text: "WordPress / WooCommerce", nextStep: "sites_q3_final" },
                { text: "Outra plataforma", nextStep: "sites_q3_final" }
            ]
        },
        'sites_q2_urgente': {
            message: "Entendo. Qual o problema que você está enfrentando?",
            options: [
                { text: "Meu site está fora do ar", nextStep: "sites_q3_final" },
                { text: "Está muito lento", nextStep: "sites_q3_final" },
                { text: "Estou vendo um erro", nextStep: "sites_q3_final" }
            ]
        },
        'sites_q3_final': {
            message: "Certo. A Erivânia é nossa especialista em suporte e vai te ajudar a resolver isso. Vamos falar com ela?",
            options: [
                { text: "Sim, falar com a especialista", whatsapp: "5585988387896", message: "Preciso de Suporte e Manutenção para meu site." },
                { text: "Voltar ao início", nextStep: "start" }
            ]
        },
        // --- FLUXO DE CONSULTORIA JURÍDICA/LGPD ---
        'juridico_q1': {
            message: "Proteção e conformidade são muito importantes. Qual a sua necessidade principal?",
            options: [
                { text: "Adequação à LGPD", nextStep: "juridico_q2_lgpd" },
                { text: "Revisão de Documentos", nextStep: "juridico_q2_docs" }
            ]
        },
        'juridico_q2_lgpd': {
            message: "Ok, adequação à LGPD. Em que estágio sua empresa está?",
            options: [
                { text: "Começando do zero", nextStep: "juridico_q3_final" },
                { text: "Já tenho políticas, preciso revisar", nextStep: "juridico_q3_final" }
            ]
        },
        'juridico_q2_docs': {
            message: "Entendido. Que tipo de documento você precisa criar ou revisar?",
            options: [
                { text: "Termos de Uso", nextStep: "juridico_q3_final" },
                { text: "Política de Privacidade", nextStep: "juridico_q3_final" }
            ]
        },
        'juridico_q3_final': {
            message: "Perfeito. O Ismael é nosso consultor jurídico e pode garantir a segurança legal do seu negócio. Vamos falar com ele?",
            options: [
                { text: "Sim, falar com o especialista", whatsapp: "5585985151337", message: "Preciso de consultoria na área Jurídica/LGPD." },
                { text: "Voltar ao início", nextStep: "start" }
            ]
        },
        // --- FLUXO DE AUTOMAÇÃO DE PROCESSOS ---
        'automacao_q1': {
            message: "Ótimo! Automação é o caminho para a eficiência. Que tipo de tarefa você mais gasta tempo hoje?",
            options: [
                { text: "Tarefas em planilhas", nextStep: "automacao_q2" },
                { text: "Processos de marketing/vendas", nextStep: "automacao_q2" },
                { text: "Comunicação com clientes", nextStep: "automacao_q2" }
            ]
        },
        'automacao_q2': {
            message: "Interessante. E qual o principal objetivo que você espera alcançar com a automação?",
            options: [
                { text: "Reduzir tempo e custos", nextStep: "automacao_q3_final" },
                { text: "Diminuir erros manuais", nextStep: "automacao_q3_final" },
                { text: "Aumentar a produtividade", nextStep: "automacao_q3_final" }
            ]
        },
        'automacao_q3_final': {
            message: "Excelente! O Felipe pode desenhar uma solução de automação sob medida para o seu desafio. Vamos falar com ele?",
            options: [
                { text: "Sim, falar com o especialista", whatsapp: "5585998261414", message: "Tenho interesse em Automação de Processos." },
                { text: "Voltar ao início", nextStep: "start" }
            ]
        }
    }
};