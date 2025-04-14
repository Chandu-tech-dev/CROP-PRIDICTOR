<?php
include("login.html");
?>
<?php
if (isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $database = "my_database";
    $conn = mysqli_connect($servername, $dbusername, $dbpassword, $database);

    $sql = "SELECT password FROM login where username='$username'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        if (password_verify($password, $row["password"])) { 
            session_start();
            header("Location: index.html");
            
        } else {
            echo "<script>alert('Invalid password');</script>";
            }
        }
    }
?>