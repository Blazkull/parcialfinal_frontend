<?php
// Get form data
$name = $_POST['nombre'];
$email = $_POST['email'];
$subject = $_POST['asunto'];
$message = $_POST['mensaje'];

// Email configuration
$to = 'jeacosta37@gmail.com'; 
$subject = 'New Message from Contact Form';
$message = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
$headers = "From: $email";

// Send the email
if (mail($to, $subject, $message, $headers)) {
    echo 'Mensaje enviado exitosamente.';
} else {
    echo 'Erro al enviar el mensaje'; 1 
}
?>