function showSection(sectionId) {
    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("editSection").classList.add("hidden");
    document.getElementById("chatContainer").classList.add("hidden");

    if (sectionId) {
        document.getElementById(sectionId).classList.remove("hidden");
    }
}
showSection('inicio');