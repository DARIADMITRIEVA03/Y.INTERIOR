<?php
// Укажите токен вашего бота и chat_id вашего чата
$botToken = "7594045204:AAHSbff_vlqGQSslhTuIA3-Bvm5sfeigLh8";
$chatId = "-4683377178";

// Получаем данные из формы
$name = htmlspecialchars($_POST['fname']);
$tel = htmlspecialchars($_POST['fphone']);


// Формируем сообщение
$message = "Заявка с сайта\n";
$message .= "Имя: $name\n";
$message .= "Телефон: $tel\n";



// Отправка сообщения в групповой чат
$url = "https://api.telegram.org/bot$botToken/sendMessage";

$data = [
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'HTML'
];

$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data),
    ],
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);


?>