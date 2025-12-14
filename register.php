<?php
$conn = new mysqli("localhost", "root", "", "pm");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name           = $_POST['name'];
$age            = $_POST['age'];
$gender         = $_POST['gender'];
$contact_number = $_POST['contact_number'];
$email          = $_POST['email'];
$address        = $_POST['address'];

$stmt = $conn->prepare("INSERT INTO users (name, age, gender, contact_number, email, address) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sissss", $name, $age, $gender, $contact_number, $email, $address);

if ($stmt->execute()) {
    echo "✅ User registered successfully!";
} else {
    echo "❌ Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
