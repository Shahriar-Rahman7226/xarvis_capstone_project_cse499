<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lms";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


// Get form data
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$user_id = $_POST["user_id"];
$email = $_POST["email"];
$password = $_POST["password"];
$re_password = $_POST["re_password"];
$dob = $_POST["dob"];
$phone_number=$_POST['phone_number'];
$gender = $_POST["gender"];

if ($password!=$re_password) {
     echo '<script type= "text/javascript"> ;
        alert("Passwords do not match");
        window.location.href="SignUp.html";
        </script>';
        exit();
}

// Check if duplicate account
$dupesql = "SELECT * FROM user where user_id='$user_id' OR email='$email'";

if($duperaw = mysqli_query($conn,$dupesql))

    {if (mysqli_num_rows($duperaw) > 0) {
        echo '<script type= "text/javascript"> ;
        alert("An account is already created with this email or user_id");
        window.location.href="SignUp.html";
        </script>';
        mysqli_close($conn);
        exit();
    }}
    else
    {
        echo '<script type= "text/javascript"> ;
        alert("An Error Occured");
        window.location.href="SignUp.html";
        </script>';
        mysqli_close($conn);
        exit();

    }
// Insert data into table
    $sql = "INSERT INTO user (first_name,last_name,user_id,email,password,date_of_birth,gender,phone_number)
    VALUES ('$first_name','$last_name','$user_id','$email','$password','$dob','$gender','$phone_number')";

    // Check if record was successfully inserted
    if (mysqli_query($conn, $sql)) {
        echo '<script type= "text/javascript"> ;
        alert("Account Created Successfully");
        window.location.href="SignUp.html";
        </script>';
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
    ?>
