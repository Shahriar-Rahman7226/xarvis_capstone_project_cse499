<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lms";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$dob = $_POST["dob"];
$phone_number = $_POST["phone_number"];

$user_id = $_SESSION["user_id"]; // Assuming the user ID is stored in session

// Prepare and bind
$stmt = $conn->prepare("UPDATE moderator SET first_name=?, last_name=?, email=?, date_of_birth=?, phone_number=?, gender=? WHERE moderator_id=?");
$stmt->bind_param("sssssss", $first_name, $last_name, $email, $dob, $phone_number, $gender, $user_id);

if ($stmt->execute()) {
    echo '<script>
            alert("Profile updated successfully");
            window.location.href="EditProfile.html";
          </script>';
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
