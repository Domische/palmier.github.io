<?php
    $name = $_POST('name');
    $phone = $_POST('phone');

    $to = 'levakov.04@mail.ru';
    $date = date ("d.m.y");
    $time = date ("h:1");
    $subject = "Заявка с сайта";

    $msg="
    Имя: $name /n
    Телефон: $phone";
    mail($to, $subject, $msg);
?>