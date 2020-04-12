<?php
    require '../util/header.php';

    if (!empty($_POST) &&
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['fName']) &&
    isset($_POST['lName']) &&
    isset($_POST['email']) &&
    isset($_POST['insertedMembers']) &&
    isset($_POST['type']) &&
    isset($_POST['data'])
    ) {
        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $email = $_POST['email'];
        $type = $_POST['type'];
        $data = $_POST['data'];
        // $memberInfo = $_POST['memberInfo'];
        $insertedMembers = $_POST['insertedMembers'];
        // $values = json_decode($memberInfo);
        // $type = $values->type;

        $cmd = sprintf("node ../../../js/node/members/sendMemberWelcomeEmail.js '%s' '%s' '%s' '%s' '%s' '%s'",
            $fName, 
            $lName, 
            $email, 
            $type, 
            $data,
            $insertedMembers//,
            // $memberInfo
        );

        // echo $cmd;
        // exit(0);
        echo shell_exec("$cmd 2>&1");
    }
?>