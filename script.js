// Obtener el formulario por su ID
const form = document.getElementById("contactForm");

// Obtener el contenedor donde se mostrará el código QR
const qrContainer = document.getElementById("qrcode");

//envío del formulario
form.addEventListener("submit", function (e) {
    
    // Evita que la página se recargue al enviar el formulario
    e.preventDefault();

    // Limpia el contenido anterior del QR
    qrContainer.innerHTML = "";

    // Captura los valores ingresados en el formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const empresa = document.getElementById("empresa").value;

    // Crear el formato vCard (tarjeta de contacto digital)
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

    // Genera el código QR usando los datos de la vCard
    new QRCode(qrContainer, {
        text: vCard,   // Información que contendrá el QR
        width: 250,    // Ancho del QR
        height: 250    // Alto del QR
    });
});
