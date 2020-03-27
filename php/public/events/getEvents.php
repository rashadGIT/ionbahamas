<?php
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $cmd = sprintf("node ../../../js/node/events/getEvents.js");
        echo shell_exec("$cmd 2>&1");
    }
?>
