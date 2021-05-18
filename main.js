function adduser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("Player 1 username is " , player1_name);
    localStorage.setItem("Player 2 username is " , player2_name);
    window.location = "game.html";
}