# Website Institucional - Nexus Innova

<p align="center">
  <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banner do Projeto Nexus Innova" width="700"/>
</p>

## Título e Descrição do Projeto

**Nexus Innova** é um website institucional completo e dinâmico, desenvolvido para uma empresa júnior de T.I.. O projeto foi construído com HTML, CSS e JavaScript puros no front-end, com um back-end em PHP e MySQL para funcionalidades de contato.

Seu principal propósito é servir como uma vitrine digital profissional para apresentar os serviços, portfólio, equipe e conhecimento da empresa. O site inclui um blog integrado, um chatbot interativo e um formulário de contato dinâmico. A arquitetura é focada na facilidade de manutenção, centralizando todo o conteúdo em um único arquivo (`data.js`), permitindo que o site seja atualizado sem alterar o HTML diretamente.

## Principais Funcionalidades (Features)

-   **Gerenciamento de Conteúdo Centralizado:** Todo o conteúdo do site (textos, links, projetos, posts do blog, etc.) é gerenciado a partir de um único arquivo `data.js`, funcionando como um CMS (Content Management System) simplificado.
-   **Blog Dinâmico e com Busca:** Seção de blog completa com páginas de post individuais, renderização de posts relacionados e uma funcionalidade de busca em tempo real que filtra os artigos por título, descrição ou tags.
-   **Portfólio de Projetos Detalhado:** Apresentação de projetos com páginas individuais que descrevem o desafio, a solução e os resultados, incluindo um formulário de contato específico por projeto.
-   **Chatbot Interativo:** Um assistente virtual flutuante que guia o usuário através de um fluxo de perguntas para identificar sua necessidade e direcioná-lo ao especialista correto.
-   **Formulário de Contato com Quiz:** Um quiz interativo na seção de contato que ajuda a qualificar a necessidade do cliente antes mesmo do primeiro contato humano.
-   **Back-end Seguro:** O formulário de contato utiliza PHP com **Prepared Statements** para interagir com o banco de dados, prevenindo ataques de SQL Injection.
-   **Validação no Lado do Cliente:** Os formulários possuem validação de dados com JavaScript antes do envio, garantindo que apenas informações válidas cheguem ao servidor e melhorando a experiência do usuário.
-   **Design Responsivo e Moderno:** Construído com uma abordagem *Mobile-First*, utilizando Flexbox, Grid e variáveis CSS para garantir uma experiência consistente em todos os dispositivos.

## Instalação e Configuração

Para executar o projeto localmente com todas as suas funcionalidades (incluindo o formulário de contato que utiliza PHP e MySQL), é necessário um ambiente de servidor. A forma mais recomendada é utilizando o XAMPP.

**Pré-requisitos:**
-   [XAMPP](https://www.apachefriends.org/pt_br/index.html) (que inclui Apache, PHP e MySQL)
-   Um editor de código (ex: VS Code)
-   Um navegador web

**Passos para Instalação:**

1.  **Instale o XAMPP** e inicie os módulos **Apache** e **MySQL** no Painel de Controle.

2.  **Clone o Repositório:** Mova a pasta do projeto para dentro do diretório `htdocs` da sua instalação do XAMPP (geralmente `C:/xampp/htdocs/`).
    ```bash
    git clone [https://github.com/felipesalvim/projeto-nexus-innova.git](https://github.com/felipesalvim/projeto-nexus-innova.git)
    ```

3.  **Crie o Banco de Dados:**
    -   Acesse `http://localhost/phpmyadmin` no seu navegador.
    -   Crie um novo banco de dados chamado `omega381_nexus_innova_db`.
    -   Execute o seguinte script SQL na aba "SQL" para criar a tabela de contatos. A coluna `projeto_id` serve para identificar de qual página de projeto o contato se originou.
    ```sql
    CREATE TABLE contatos_projetos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        telefone VARCHAR(50),
        email VARCHAR(255) NOT NULL,
        projeto_id VARCHAR(100) NOT NULL,
        data_contato TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```

4.  **Configure o Back-end:**
    -   Abra o arquivo `salvar_contato.php`.
    -   Atualize as credenciais do banco de dados com as suas (para o XAMPP padrão, o usuário é `root` e a senha é vazia).

5.  **Acesse o Projeto:** Abra o navegador e acesse a URL:
    ```
    http://localhost/projeto-nexus-innova/
    ```

## Como Usar

A principal forma de gerenciar o conteúdo do site é através da edição do arquivo `data.js`.

-   **Para alterar o menu, logos e rodapé:** Modifique os objetos `navigation`, `logos` e `footer`.
-   **Para adicionar/editar projetos:** Edite o array `highlightedProjects`. Cada objeto representa um projeto. Para que os botões "Visualizar Projeto" e "Verificar Projeto" funcionem, preencha as propriedades `liveUrl` e `githubUrl` respectivamente.
-   **Para gerenciar a equipe, serviços e blog:** Edite os arrays `teamMembers`, `services` e `blogPosts`. O campo `content` nos posts do blog aceita tags HTML para formatação.
-   **Para ajustar os fluxos de contato:** Modifique os objetos `quizData` (para o quiz da seção de contato) e `chatBotData` (para o chatbot flutuante).

## Tecnologias Utilizadas

-   **Front-end:**
    -   HTML5
    -   CSS3 (Variáveis Globais, Flexbox, Grid, Mobile-First)
    -   JavaScript (Vanilla ES6+)
-   **Back-end:**
    -   PHP
    -   MySQL
    -   **Segurança:** Prepared Statements para prevenção de SQL Injection.
-   **Bibliotecas e Ferramentas:**
    -   Font Awesome (Ícones)
    -   Google Fonts (Tipografia Poppins)
    -   AOS - Animate on Scroll (Animações)

## Como Contribuir

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1.  Faça um **Fork** do projeto.
2.  Crie uma nova **Branch** (`git checkout -b feature/FuncionalidadeIncrivel`).
3.  Faça o **Commit** das suas alterações (`git commit -m 'Adiciona alguma FuncionalidadeIncrivel'`).
4.  Faça o **Push** para a Branch (`git push origin feature/FuncionalidadeIncrivel`).
5.  Abra um **Pull Request**.

## Licença

Este projeto é de propriedade intelectual de Erivânia Dias, Felipe Alvim, Gabriel Marques, Ismael Oliveira e Sarah Marques. Todos os direitos são reservados.

## Links e Apoio

-   **Projeto Online:** `https://nexusinnova.com.br/`
-   **Repositório:** `https://github.com/felipesalvim/projeto-nexus-innova`
-   **Suporte:** Em caso de problemas ou dúvidas, abra uma *Issue* no GitHub ou entre em contato pelo e-mail `contato@nexusinnova.com.br`.
