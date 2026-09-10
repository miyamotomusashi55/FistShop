function inyectarHeader() {
  document.getElementById("header").innerHTML = `
    <div class="header-container">
                <div class="logo">
                    <a href="index.html"><h1>FIST<span>SHOP</span></h1></a>
                </div>
                <nav class="nav-links">
                    <a href="index.html">Inicio</a>
                    <a href="paginas/producto.html">Productos</a>
                    <a href="paginas/login.html">Iniciar Sesión</a>
                    <a href="">Contacto</a>
                </nav>
                <div class="carrito-status">
                    <span>🛒 Carrito (0)</span>
                </div>
            </div>
    `;
}

function inyectarFooter() {
    document.getElementById("footer").innerHTML = `
        <div class="footer-container">
            <div class="footer-info">
                <h3>FIST<span>SHOP</span></h3>
                <p>© 2026 FistShop - Gym & Power. Todos los derechos reservados.</p>
            </div>

            <div class="footer-contacto">
                <h4>Contacto</h4>
                <div class="redes-links">
                    <a href="mailto:consultasFist@fistshop.cl" title="Envíanos un correo">
                        📧 consultasFist@fistshop.cl
                    </a>
                    <a href="tel:+56982041970" title="Llámanos o WhatsApp">
                        💬 +56 9 8204 1970
                    </a>
                    <a href="https://www.instagram.com" target="_blank" title="Síguenos en Instagram">
                        📷 @fistshop.cl
                    </a>
                </div>
            </div>
        </div>
    `;
}

inyectarHeader();
inyectarFooter();

function validarLogin(event) {
  event.preventDefault();
  let correo = document.getElementById("email").value;
  let clave = document.getElementById("password").value;

  if (correo === "" || clave === "") {
    alert("porfavor, completa los campos no rellenados para entrar a FistShop");
    return;
  }

  if (!correo.includes("@gmail.com")) {
    alert("solo aceptamos correos que terminen con @gmail.com (próximamente @icloud.com)");
    return;
  }

  if (clave.length < 9) {
    alert("Error: Tu contraseña debe tener al menos 6 caracteres.");
    return;
  }

  alert("¡Acceso concedido! Bienvenido a FistShop.");

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  window.location.href = "../index.html";
}

function mostrarFicha(nombreProducto, descripcion) {
    alert("FICHA TÉCNICA: " + nombreProducto + "\n\n" + descripcion);
}
