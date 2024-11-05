function toggleEditSection() {
    var section = document.getElementById("editSection");
    var chat = document.getElementById("chatContainer");
    section.style.display = section.style.display === "none" || section.style.display === "" ? "block" : "none";
    chat.style.display = "none"; 
}

function toggleChat() {
    var chat = document.getElementById("chatContainer");
    var section = document.getElementById("editSection");
    chat.style.display = chat.style.display === "none" || chat.style.display === "" ? "flex" : "none";
    section.style.display = "none"; 
}