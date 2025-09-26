<?php
// Define que a resposta será em formato JSON
header('Content-Type: application/json');

// --- INFORMAÇÕES DE CONEXÃO COM O BANCO DE DADOS ---
// Substitua com os dados do seu servidor
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nexus_innova_db";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    // Se a conexão falhar, envia uma resposta de erro
    echo json_encode(['status' => 'error', 'message' => 'Erro de conexão com o banco de dados.']);
    exit();
}

// Verifica se os dados foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Pega os dados do formulário e limpa para evitar injeção de código
    $nome = trim(strip_tags($_POST['nome']));
    $telefone = trim(strip_tags($_POST['telefone']));
    $email = trim(strip_tags($_POST['email']));
    $projeto_id = trim(strip_tags($_POST['projeto_id']));

    // Validação simples
    if (empty($nome) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($projeto_id)) {
        echo json_encode(['status' => 'error', 'message' => 'Por favor, preencha todos os campos obrigatórios.']);
        exit();
    }

    // Prepara a query SQL para evitar injeção de SQL (mais seguro)
    $stmt = $conn->prepare("INSERT INTO contatos_projetos (nome, telefone, email, projeto_id) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nome, $telefone, $email, $projeto_id);

    // Executa a query e verifica o resultado
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Obrigado pelo seu contato! Retornaremos em breve.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Ocorreu um erro ao salvar seu contato. Tente novamente mais tarde.']);
    }

    // Fecha o statement
    $stmt->close();
}

// Fecha a conexão com o banco de dados
$conn->close();
