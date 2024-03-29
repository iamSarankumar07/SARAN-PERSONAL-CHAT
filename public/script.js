var socket = io();

function sendMessage() {
  var message = document.getElementById("message").value;
  socket.emit("chat message", message);
  document.getElementById("message").value = "";
}

socket.on("chat message", function (msg) {
  var item = document.createElement("li");
  item.textContent = msg;
  document.getElementById("messages").appendChild(item);
});

