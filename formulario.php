<?php
if(!isset( $_POST['tipo']) || !isset( $_POST['nombres']) || !isset($_POST['apellidos']) || !isset($_POST['correo']) || !isset($_POST['nombrecomercial']) || !isset($_POST['direccion']) || !isset($_POST['whatsapp']) || !isset($_POST['mensaje'])) {
	echo '¡Algo salió mal! Inténtalo de nuevo';
    die();
}
	$email_from = $_POST['correo'];
	$email_subject = "Formulario de solicitudes: Web Meka";
	$email_message = "A continuación encontrará un mensaje enviado por ".stripslashes($_POST['nombres'])."\n\n";
	$email_message .=" el ".date("d/m/Y")." at ".date("H:i")."\n\n";

	$email_message .= "Tipo: ". stripslashes($_POST['tipo'])."\n\n";
	$email_message .= "Nombre: ". stripslashes($_POST['nombres'])."\n\n";
	$email_message .= "Apellidos: ". stripslashes($_POST['apellidos'])."\n\n";
	$email_message .= "Correo: ". stripslashes($_POST['correo'])."\n\n";
	$email_message .= "Nombre Comercial: ". stripslashes($_POST['nombrecomercial'])."\n\n";
	$email_message .= "Whatsapp: ". stripslashes($_POST['whatsapp'])."\n\n";
	$email_message .= "Direccion: ". stripslashes($_POST['direccion'])."\n\n";
	$email_message .= "Mensaje: ".stripslashes($_POST['mensaje']);
	$headers = 'From: '.$email_from."\r\n" .
   'Reply-To: '.$email_from."\r\n" ;

	mail('luistomasm01@gmail.com', $email_subject, $email_message, $headers);
	echo "Gracias por contactar con nosotros.";
	die();
?>
