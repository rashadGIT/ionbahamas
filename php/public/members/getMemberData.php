<?php
    require '../util/header.php';

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $cmd = sprintf("node ../../../js/node/members/getMembershipData.js");
        echo shell_exec("$cmd 2>&1");
    }
?>