<?php
// Configurações do banco de dados
$servername = "seuserver";
$username = "seuusuario";
$password = "suasenha";
$dbname = "seubanco";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
