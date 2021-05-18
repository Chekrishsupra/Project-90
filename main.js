function adduser() {
    player1_email = document.getElementById("player1_name").value;
    player2_email = document.getElementById("player2_name").value;
    player1_password = document.getElementById("player1_password").value;
    player2_password = document.getElementById("player2_password").value;
    localStorage.setItem("Player 1 email is " , player1_email);
    localStorage.setItem("Player 2 email is " , player2_email);
    localStorage.setItem("Player 1 password is" , player1_password);
    localStorage.setItem("Player 2 password is " , player2_password);
    window.location = "game.html";
}