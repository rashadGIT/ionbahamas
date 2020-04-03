<?php
    require '../util/header.php';

    if (!empty($_POST) &&
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['amount']) &&
    isset($_POST['nonce'])
    ) {
        $amount = $_POST['amount'];
        $nonce = $_POST['nonce'];
        // $myObj->age = 30;
        // $myObj->city = "New York";

        // $myJSON = json_encode($myObj);

        $cmd = sprintf("node ../../../js/node/payment/payment.js %s %s",$amount,$nonce);
        echo shell_exec("$cmd 2>&1");
    }
?>