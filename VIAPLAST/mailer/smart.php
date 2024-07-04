<?php 

$name = $_POST['customer_name'];
$phone = $_POST['customer_phone'];
$email = $_POST['customer_email'];
$comments = $_POST['customer_comments'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'plastrecycling.ag@gmail.com';                 // Наш логин
$mail->Password = 'qgmq swdf xejk zmdj';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('plastrecycling.ag@gmail.com', 'From Viaplast');   // От кого письмо
$mail->addAddress('info@viaplast.com.ua');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'повідомлення з сайту Віапласт';
$mail->Body    = '
		Користувач залишив таке повідомлення: <br>
	Імя: ' . $name . ' <br>
	Текст повідомлення: ' . $comments . ' <br>
	Номер телефону: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>