let userName = prompt('Enter your name:');

if (userName !== null && userName.trim() !== "") {
    alert(`Hello, ${userName.trim()}! How are you?`);
}
else {
    alert("Invalid User Name entered");
} 