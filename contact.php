<?php
if(!isset( $_POST['name']) || !isset($_POST['email']) || !isset($_POST['message']) ) {
	echo '¡Algo salió mal! Inténtalo de nuevo';
    die();
}
	$email_from = $_POST['email'];
	$email_subject = "Contacto desde: Web Meka";
	$email_message = "A continuación encontrará un mensaje enviado por ".stripslashes($_POST['name'])."\n\n";
	$email_message .=" el ".date("d/m/Y")." at ".date("H:i")."\n\n";
	$email_message .= stripslashes($_POST['message']);

	$headers = 'From: '.$email_from."\r\n" .
   'Reply-To: '.$email_from."\r\n" ;

	mail('luistomasm01@gmail.com', $email_subject, $email_message, $headers);
	echo "Gracias por contactar con nosotros.";
	die();
?>