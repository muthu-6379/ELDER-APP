<?php
$conn = new mysqli("localhost", "root", "", "sp");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = $_POST['user_id'];
$help_type = $_POST['help_type'];
$description = $_POST['description'];

$sql = "INSERT INTO requests (user_id, help_type, description) 
        VALUES ($user_id, '$help_type', '$description')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Help request submitted successfully!";
} else {
    echo "❌ Error: " . $conn->error;
}

$conn->close();
?>


