<?php
    $server = "localhost";
    $username = "root";
    $password = "";

    $con = mysqli_connect($server, $username, $password);
    
    if(!$con){
        echo "Database is connected... " .msqli_connect_error() ;
    }

    // echo "Database is connected..."

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $gender = $_POST['gender'];
    $msg = $_POST['msg'];
    $sql = "INSERT INTO `register`.`form` (`name`, `email`, `phone`, `gender`, `msg`) VALUES ('$name', '$email', '$phone', '$gender', '$msg');";

    if($con -> query($sql) == true){
        echo "Successfully inserted...";
    }
    else{
        echo "Error: $sql  <br> $con->error";
    }
    
    $con->close();

?>

