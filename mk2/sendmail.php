<?php
if(isset($_POST['message'])){
	
	$user = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
	$mail = $_POST['mail'];
	$msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
	
   	$mymail  = 'elkholuy@gmail.com';
	$subject = 'Contact Form';
	$header  = 'From: '. $mail ;
	$txt 	 = "You Have Received an E-mail From: ". $user . ".\r\n Message: " . $msg;
	
   
	
    if(mail($mymail, $subject, $txt, $header)) echo "success"; 
    else echo "false send to: " . $to;
    exit;
	
	
 }
?>