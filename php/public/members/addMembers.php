<?php
    require '../util/header.php';

    if (!empty($_POST) &&
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['fName']) &&
    isset($_POST['lName']) &&
    isset($_POST['email']) &&
    isset($_POST['address']) &&
    isset($_POST['city']) &&
    isset($_POST['state']) &&
    isset($_POST['zip']) &&
    isset($_POST['country']) &&
    isset($_POST['primaryPhone']) &&
    isset($_POST['secondaryPhone']) &&
    isset($_POST['isPrimary']) &&
    isset($_POST['membershipTypeId']) &&
    isset($_POST['secondaryMembers'])
    ) {
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $country = $_POST['country'];
    $primaryPhone = $_POST['primaryPhone'];
    $secondaryPhone = $_POST['secondaryPhone'];
    $isPrimary = $_POST['isPrimary'];
    $membershipTypeId = $_POST['membershipTypeId'];
    $secondaryMembers = $_POST['secondaryMembers'];
        
    $cmd = sprintf("node ../../../js/node/members/addMembers.js '%s' '%s' '%s' '%s' '%s' '%s' '%s' '%s' '%s' '%s' %s %s '%s'",$fName, $lName, $email, $address, $city, $state, $zip, $country, $primaryPhone, $secondaryPhone, $isPrimary, $membershipTypeId, $secondaryMembers);

    echo shell_exec("$cmd 2>&1");
    }
?>