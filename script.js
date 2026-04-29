const form = document.getElementById("contactForm");
const qrContainer = document.getElementById("qrcode");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    qrContainer.innerHTML = "";

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const empresa = document.getElementById("empresa").value;

    // Formato vCard
    const vCard = `
BEGIN:VCARD
VERSION:3.0
N:${apellido};${nombre}
FN:${nombre} ${apellido}
ORG:${empresa}
TEL;TYPE=CELL:${telefono}
EMAIL:${email}
END:VCARD
    `.trim();

    new QRCode(qrContainer, {
        text: vCard,
        width: 250,
        height: 250
    });
});
