<?php
    require '../util/header.php';

    if (!empty($_POST) &&
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['email']) &&
    isset($_POST['primaryPhone'])
    ) {
    $email = $_POST['email'];
    $primaryPhone = $_POST['primaryPhone'];
        
    $cmd = sprintf("node ../../../js/node/members/getMemberByEmailOrPhone.js %s %s",$email,$primaryPhone);

    // echo $cmd;
    // exit(0);
    echo shell_exec("$cmd 2>&1");
    }
?>