(() => {
  'use strict';

  const STORAGE_KEYS = {
    TEMA: 'dn_floral_tema_v6',
    CARRITO: 'dn_floral_carrito_v6',
    HISTORIAL: 'dn_floral_historial_v6',
    FAVORITOS: 'dn_floral_favoritos_v6',
    CATALOGO_ADMIN: 'dn_floral_catalogo_admin_v6',
    SUCURSAL_ADMIN: 'dn_floral_sucursal_admin_v6',
    BLACKLIST: 'dn_floral_blacklist_v6'
  };

  const ADMIN_PASSCODE = 'vaquita62';
  const TIPO_CAMBIO_BS = 6.96;

  const SUCURSAL_INFO = {
    puntoVenta: 'Decora nature',
    direccionCompleta: 'Decora nature · Monumento Busch / Ruta Villa · La Paz, Bolivia',
    telefono: '68067801',
    whatsappNumero: '59168067801'
  };

  const BLACKLIST_INICIAL = {
    nombres: [],
    telefonos: []
  };

  const REFERENCIAS_POR_CATEGORIA = {
    girasoles: { imagen_url: './girasol1.jpg' },
    margaritas: { imagen_url: './mar1.jpg' },
    rosas: { imagen_url: './rosas1.webp' },
    tulipanes: { imagen_url: './tul1.jpg' }
  };

  const CATALOGO_BASE = {
    categorias: [
      { id_categoria: 1, nombre: 'Girasoles', slug: 'girasoles', tono: 'pink', icono: '🌻', imagen_url: './girasol1.jpg' },
      { id_categoria: 2, nombre: 'Margaritas', slug: 'margaritas', tono: 'lilac', icono: '🌼', imagen_url: './mar1.jpg' },
      { id_categoria: 3, nombre: 'Rosas', slug: 'rosas', tono: 'teal', icono: '🌹', imagen_url: './rosas1.webp' },
      { id_categoria: 4, nombre: 'Tulipanes', slug: 'tulipanes', tono: 'pink', icono: '🌷', imagen_url: './tul1.jpg' }
    ],
    productos: [
      { id_producto: 1, codigo: 'DN-GIR-01', nombre: 'Ramo Sol de Mañana', especificacion: 'Girasoles frescos · Envoltura pastel', unidad: 'Ramo', categoria: 'Girasoles', categoria_slug: 'girasoles', precio_usd: 22.0, stock: 30, bloqueado: 0, imagen_url: './girasol1.jpg' },
      { id_producto: 2, codigo: 'DN-GIR-02', nombre: 'Bouquet Luz Dorada', especificacion: 'Girasoles medianos · Cinta turquesa', unidad: 'Ramo', categoria: 'Girasoles', categoria_slug: 'girasoles', precio_usd: 24.5, stock: 25, bloqueado: 0, imagen_url: './girasol2.jpg' },
      { id_producto: 3, codigo: 'DN-GIR-03', nombre: 'Arreglo Brisa Solar', especificacion: 'Girasoles con follaje · Listón lila', unidad: 'Arreglo', categoria: 'Girasoles', categoria_slug: 'girasoles', precio_usd: 27.0, stock: 18, bloqueado: 0, imagen_url: './girasol3.jpg' },
      { id_producto: 4, codigo: 'DN-GIR-04', nombre: 'Caja Radiante Girasol', especificacion: 'Presentación rígida · Girasoles selectos', unidad: 'Caja', categoria: 'Girasoles', categoria_slug: 'girasoles', precio_usd: 31.0, stock: 14, bloqueado: 0, imagen_url: './girasol4.jpg' },
      { id_producto: 5, codigo: 'DN-GIR-05', nombre: 'Detalle Girasol Dulce', especificacion: 'Ramo compacto · Papel seda rosado', unidad: 'Ramo', categoria: 'Girasoles', categoria_slug: 'girasoles', precio_usd: 18.0, stock: 36, bloqueado: 0, imagen_url: './girasol5.jpg' },
      { id_producto: 6, codigo: 'DN-GIR-06', nombre: 'Ramo Aurora Campestre', especificacion: 'Girasoles frescos · Acabado suave', unidad: 'Ramo', categoria: 'Girasoles', categoria_slug: 'girasoles', precio_usd: 25.0, stock: 20, bloqueado: 0, imagen_url: './girasol6.jpg' },
      { id_producto: 7, codigo: 'DN-GIR-07', nombre: 'Composición Jardín Dorado', especificacion: 'Diseño alto de estación · Tarjeta incluida', unidad: 'Arreglo', categoria: 'Girasoles', categoria_slug: 'girasoles', precio_usd: 29.5, stock: 12, bloqueado: 0, imagen_url: './girasol7.jpg' },
      { id_producto: 8, codigo: 'DN-GIR-08', nombre: 'Ramo Estelar Girasoles', especificacion: 'Edición especial · Lazo doble turquesa', unidad: 'Ramo', categoria: 'Girasoles', categoria_slug: 'girasoles', precio_usd: 26.0, stock: 22, bloqueado: 0, imagen_url: './girasol8.jpg' },

      { id_producto: 9, codigo: 'DN-MAR-01', nombre: 'Ramo Nube Margaritas', especificacion: 'Margaritas blancas frescas · Papel lila', unidad: 'Ramo', categoria: 'Margaritas', categoria_slug: 'margaritas', precio_usd: 17.5, stock: 40, bloqueado: 0, imagen_url: './mar1.jpg' },
      { id_producto: 10, codigo: 'DN-MAR-02', nombre: 'Bouquet Brisa Silvestre', especificacion: 'Margaritas selectas · Cinta rosa pastel', unidad: 'Ramo', categoria: 'Margaritas', categoria_slug: 'margaritas', precio_usd: 19.0, stock: 32, bloqueado: 0, imagen_url: './mar2.jpg' },
      { id_producto: 11, codigo: 'DN-MAR-03', nombre: 'Arreglo Jardín Sereno', especificacion: 'Composición delicada · Follaje verde', unidad: 'Arreglo', categoria: 'Margaritas', categoria_slug: 'margaritas', precio_usd: 21.5, stock: 24, bloqueado: 0, imagen_url: './mar3.jpg' },
      { id_producto: 12, codigo: 'DN-MAR-04', nombre: 'Ramo Rocío Primavera', especificacion: 'Tallos frescos · Lazo satinado', unidad: 'Ramo', categoria: 'Margaritas', categoria_slug: 'margaritas', precio_usd: 18.5, stock: 28, bloqueado: 0, imagen_url: './mar4.jpg' },
      { id_producto: 13, codigo: 'DN-MAR-05', nombre: 'Cesta Dulce Margarita', especificacion: 'Presentación botánica · Ideal detalle', unidad: 'Arreglo', categoria: 'Margaritas', categoria_slug: 'margaritas', precio_usd: 23.0, stock: 16, bloqueado: 0, imagen_url: './mar5.jpg' },
      { id_producto: 14, codigo: 'DN-MAR-06', nombre: 'Ramo Pétalos de Alba', especificacion: 'Margaritas mixtas · Envoltura suave', unidad: 'Ramo', categoria: 'Margaritas', categoria_slug: 'margaritas', precio_usd: 20.0, stock: 26, bloqueado: 0, imagen_url: './mar6.jpg' },
      { id_producto: 15, codigo: 'DN-MAR-07', nombre: 'Detalle Botánico Mar', especificacion: 'Ramo ligero · Dedicatoria incluida', unidad: 'Ramo', categoria: 'Margaritas', categoria_slug: 'margaritas', precio_usd: 16.5, stock: 35, bloqueado: 0, imagen_url: './mar7.jpg' },
      { id_producto: 16, codigo: 'DN-MAR-08', nombre: 'Bouquet Encanto Campestre', especificacion: 'Margaritas premium · Acabado turquesa', unidad: 'Ramo', categoria: 'Margaritas', categoria_slug: 'margaritas', precio_usd: 22.5, stock: 19, bloqueado: 0, imagen_url: './mar8.jpg' },

      { id_producto: 17, codigo: 'DN-ROS-01', nombre: 'Ramo Aurora de Rosas', especificacion: 'Rosas seleccionadas · Envoltura pastel', unidad: 'Ramo', categoria: 'Rosas', categoria_slug: 'rosas', precio_usd: 26.0, stock: 30, bloqueado: 0, imagen_url: './rosas1.webp' },
      { id_producto: 18, codigo: 'DN-ROS-02', nombre: 'Bouquet Ensueño Rosado', especificacion: 'Rosas frescas · Lazo lila pastel', unidad: 'Ramo', categoria: 'Rosas', categoria_slug: 'rosas', precio_usd: 28.5, stock: 24, bloqueado: 0, imagen_url: './rosas2.webp' },
      { id_producto: 19, codigo: 'DN-ROS-03', nombre: 'Caja Estelar de Rosas', especificacion: 'Caja de regalo · Rosas de primera', unidad: 'Caja', categoria: 'Rosas', categoria_slug: 'rosas', precio_usd: 35.0, stock: 15, bloqueado: 0, imagen_url: './rosas3.jpg' },
      { id_producto: 20, codigo: 'DN-ROS-04', nombre: 'Ramo Terciopelo Pastel', especificacion: 'Rosas suaves · Papel seda', unidad: 'Ramo', categoria: 'Rosas', categoria_slug: 'rosas', precio_usd: 29.0, stock: 21, bloqueado: 0, imagen_url: './rosas4.jpg' },
      { id_producto: 21, codigo: 'DN-ROS-05', nombre: 'Arreglo Romántico Brisa', especificacion: 'Composición floral · Cinta turquesa', unidad: 'Arreglo', categoria: 'Rosas', categoria_slug: 'rosas', precio_usd: 32.0, stock: 17, bloqueado: 0, imagen_url: './rosas5.webp' },
      { id_producto: 22, codigo: 'DN-ROS-06', nombre: 'Ramo Jardín de Rosas', especificacion: 'Rosas frescas · Dedicatoria incluida', unidad: 'Ramo', categoria: 'Rosas', categoria_slug: 'rosas', precio_usd: 30.5, stock: 19, bloqueado: 0, imagen_url: './rosas6.webp' },
      { id_producto: 23, codigo: 'DN-ROS-07', nombre: 'Detalle Dulce Rosa', especificacion: 'Ramo delicado · Ideal aniversario', unidad: 'Ramo', categoria: 'Rosas', categoria_slug: 'rosas', precio_usd: 24.0, stock: 27, bloqueado: 0, imagen_url: './rosas7.jpg' },
      { id_producto: 24, codigo: 'DN-ROS-08', nombre: 'Bouquet Gala Floral', especificacion: 'Rosas premium · Presentación especial', unidad: 'Ramo', categoria: 'Rosas', categoria_slug: 'rosas', precio_usd: 42.0, stock: 10, bloqueado: 0, imagen_url: './rosas8.jpg' },

      { id_producto: 25, codigo: 'DN-TUL-01', nombre: 'Ramo Tulipanes Aurora', especificacion: 'Tulipanes frescos · Envoltura rosa suave', unidad: 'Ramo', categoria: 'Tulipanes', categoria_slug: 'tulipanes', precio_usd: 28.0, stock: 22, bloqueado: 0, imagen_url: './tul1.jpg' },
      { id_producto: 26, codigo: 'DN-TUL-02', nombre: 'Bouquet Tulipanes Seda', especificacion: 'Tulipanes selectos · Cinta lila pastel', unidad: 'Ramo', categoria: 'Tulipanes', categoria_slug: 'tulipanes', precio_usd: 31.5, stock: 18, bloqueado: 0, imagen_url: './tul2.jpg' },
      { id_producto: 27, codigo: 'DN-TUL-03', nombre: 'Arreglo Primavera Pastel', especificacion: 'Tulipanes frescos · Acabado delicado', unidad: 'Arreglo', categoria: 'Tulipanes', categoria_slug: 'tulipanes', precio_usd: 34.0, stock: 14, bloqueado: 0, imagen_url: './tul3.jpg' },
      { id_producto: 28, codigo: 'DN-TUL-04', nombre: 'Ramo Brisa Tulipanes', especificacion: 'Tulipanes frescos · Papel translúcido', unidad: 'Ramo', categoria: 'Tulipanes', categoria_slug: 'tulipanes', precio_usd: 33.0, stock: 16, bloqueado: 0, imagen_url: './tul4.jpg' },
      { id_producto: 29, codigo: 'DN-TUL-05', nombre: 'Detalle Tulipán Pastel', especificacion: 'Ramo tierno · Lazo turquesa', unidad: 'Ramo', categoria: 'Tulipanes', categoria_slug: 'tulipanes', precio_usd: 26.5, stock: 25, bloqueado: 0, imagen_url: './tul5.jpg' },
      { id_producto: 30, codigo: 'DN-TUL-06', nombre: 'Bouquet Jardín Encantado', especificacion: 'Tulipanes variados · Tarjeta incluida', unidad: 'Ramo', categoria: 'Tulipanes', categoria_slug: 'tulipanes', precio_usd: 35.5, stock: 12, bloqueado: 0, imagen_url: './tul6.jpg' },
      { id_producto: 31, codigo: 'DN-TUL-07', nombre: 'Ramo Luz de Tulipanes', especificacion: 'Presentación elegante · Tallos frescos', unidad: 'Ramo', categoria: 'Tulipanes', categoria_slug: 'tulipanes', precio_usd: 29.5, stock: 0, bloqueado: 0, imagen_url: './tul7.jpg' },
      { id_producto: 32, codigo: 'DN-TUL-08', nombre: 'Colección Estelar Tulipanes', especificacion: 'Tulipanes selectos · Envoltura especial', unidad: 'Ramo', categoria: 'Tulipanes', categoria_slug: 'tulipanes', precio_usd: 39.0, stock: 11, bloqueado: 0, imagen_url: './tul8.webp' }
    ]
  };

  const state = {
    vistaActiva: 'inicio',
    categorias: [],
    productos: [],
    categoriaActiva: 'todas',
    disponibilidadActiva: 'todos',
    busqueda: '',
    carrito: [],
    historial: [],
    favoritos: [],
    blacklist: { nombres: [], telefonos: [] },
    productoDetalleId: null,
    deferredPrompt: null,
    timerId: null,
    segundosRestantes: 8,
    datosPedidoPendientes: null,
    splashTimeoutId: null,
    sucursal: { ...SUCURSAL_INFO },
    adminAutenticado: false
  };

  const els = {
    splashScreen: document.getElementById('splashScreen'),
    welcomeScreen: document.getElementById('welcomeScreen'),
    appContainer: document.getElementById('appContainer'),
    btnExplorarCatalogo: document.getElementById('btnExplorarCatalogo'),
    btnSaltarBienvenida: document.getElementById('btnSaltarBienvenida'),
    btnVolverInicio: document.getElementById('btnVolverInicio'),
    headerTituloVista: document.getElementById('headerTituloVista'),
    btnInstalarPWA: document.getElementById('btnInstalarPWA'),
    btnIrCotizacionTop: document.getElementById('btnIrCotizacionTop'),
    contadorCarrito: document.getElementById('contadorCarrito'),
    btnTema: document.getElementById('btnTema'),
    btnAbrirMenu: document.getElementById('btnAbrirMenu'),
    btnCerrarMenu: document.getElementById('btnCerrarMenu'),
    drawerBackdrop: document.getElementById('drawerBackdrop'),
    drawerMenu: document.getElementById('drawerMenu'),
    drawerCategorias: document.getElementById('drawerCategorias'),
    btnAbrirAdminDrawer: document.getElementById('btnAbrirAdminDrawer'),
    btnVerBienvenida: document.getElementById('btnVerBienvenida'),
    btnReproducirSplash: document.getElementById('btnReproducirSplash'),
    vistaInicio: document.getElementById('vistaInicio'),
    vistaCatalogo: document.getElementById('vistaCatalogo'),
    vistaEnvios: document.getElementById('vistaEnvios'),
    vistaPromociones: document.getElementById('vistaPromociones'),
    vistaCotizacion: document.getElementById('vistaCotizacion'),
    vistaContacto: document.getElementById('vistaContacto'),
    btnBannerExplorar: document.getElementById('btnBannerExplorar'),
    btnBannerPromos: document.getElementById('btnBannerPromos'),
    btnAtrasCatalogo: document.getElementById('btnAtrasCatalogo'),
    gridCategoriasInicio: document.getElementById('gridCategoriasInicio'),
    filtrosCategoria: document.getElementById('filtrosCategoria'),
    subfiltrosDisponibilidad: document.getElementById('subfiltrosDisponibilidad'),
    inputBuscar: document.getElementById('inputBuscar'),
    contadorProductos: document.getElementById('contadorProductos'),
    estadoCatalogo: document.getElementById('estadoCatalogo'),
    gridProductos: document.getElementById('gridProductos'),
    gridPromociones: document.getElementById('gridPromociones'),
    btnIrPedidoDesdeEnvios: document.getElementById('btnIrPedidoDesdeEnvios'),
    btnIrCatalogoDesdeEnvios: document.getElementById('btnIrCatalogoDesdeEnvios'),
    btnIrContactoDesdeEnvios: document.getElementById('btnIrContactoDesdeEnvios'),
    textoDireccionEnvio: document.getElementById('textoDireccionEnvio'),
    listaCotizacion: document.getElementById('listaCotizacion'),
    btnVaciarCarrito: document.getElementById('btnVaciarCarrito'),
    unidadesCotizacion: document.getElementById('unidadesCotizacion'),
    totalCotizacion: document.getElementById('totalCotizacion'),
    listaHistorial: document.getElementById('listaHistorial'),
    formPedido: document.getElementById('formPedido'),
    clienteNombre: document.getElementById('clienteNombre'),
    clienteContacto: document.getElementById('clienteContacto'),
    errorNombre: document.getElementById('errorNombre'),
    errorContacto: document.getElementById('errorContacto'),
    btnConfirmarCuentaRegresiva: document.getElementById('btnConfirmarCuentaRegresiva'),
    btnCancelarCuentaRegresiva: document.getElementById('btnCancelarCuentaRegresiva'),
    estadoPedido: document.getElementById('estadoPedido'),
    formContacto: document.getElementById('formContacto'),
    contactoNombre: document.getElementById('contactoNombre'),
    contactoCorreo: document.getElementById('contactoCorreo'),
    contactoMensaje: document.getElementById('contactoMensaje'),
    errorContactoNombre: document.getElementById('errorContactoNombre'),
    errorContactoCorreo: document.getElementById('errorContactoCorreo'),
    errorContactoMensaje: document.getElementById('errorContactoMensaje'),
    estadoContacto: document.getElementById('estadoContacto'),
    btnSmokeTest: document.getElementById('btnSmokeTest'),
    btnAuditarA11Y: document.getElementById('btnAuditarA11Y'),
    resultadoAuditoria: document.getElementById('resultadoAuditoria'),
    modalDetalle: document.getElementById('modalDetalle'),
    modalImagen: document.getElementById('modalImagen'),
    modalCodigoCat: document.getElementById('modalCodigoCat'),
    modalTitulo: document.getElementById('modalTitulo'),
    modalEspecificacion: document.getElementById('modalEspecificacion'),
    modalPrecioStock: document.getElementById('modalPrecioStock'),
    btnModalAgregar: document.getElementById('btnModalAgregar'),
    btnCerrarModal: document.getElementById('btnCerrarModal')
  };

  function aBolivianos(valorUsd) {
    return Number(valorUsd || 0) * TIPO_CAMBIO_BS;
  }

  function formatoBs(valorBs) {
    const num = Number(valorBs || 0);
    return `Bs ${num.toFixed(2).replace('.', ',')}`;
  }

  function obtenerImagenProducto(prod) {
    if (prod && prod.imagen_url) return encodeURI(prod.imagen_url);
    const ref = REFERENCIAS_POR_CATEGORIA[prod?.categoria_slug] || REFERENCIAS_POR_CATEGORIA.girasoles;
    return encodeURI(ref.imagen_url);
  }

  function aplicarTema(tema) {
    const oscuro = tema !== 'light';
    document.documentElement.setAttribute('data-theme', oscuro ? 'dark' : 'light');
    if (els.btnTema) els.btnTema.setAttribute('aria-pressed', String(oscuro));
    try { localStorage.setItem(STORAGE_KEYS.TEMA, oscuro ? 'dark' : 'light'); } catch (_) {}
  }

  function persistirCarrito() {
    try { localStorage.setItem(STORAGE_KEYS.CARRITO, JSON.stringify(state.carrito)); } catch (_) {}
  }

  function persistirHistorial() {
    try { localStorage.setItem(STORAGE_KEYS.HISTORIAL, JSON.stringify(state.historial)); } catch (_) {}
  }

  function persistirFavoritos() {
    try { localStorage.setItem(STORAGE_KEYS.FAVORITOS, JSON.stringify(state.favoritos)); } catch (_) {}
  }

  function persistirCatalogoAdmin() {
    try { localStorage.setItem(STORAGE_KEYS.CATALOGO_ADMIN, JSON.stringify(state.productos)); } catch (_) {}
  }

  function persistirSucursalAdmin() {
    try { localStorage.setItem(STORAGE_KEYS.SUCURSAL_ADMIN, JSON.stringify(state.sucursal)); } catch (_) {}
  }

  function persistirBlacklist() {
    try { localStorage.setItem(STORAGE_KEYS.BLACKLIST, JSON.stringify(state.blacklist)); } catch (_) {}
  }

  function validarNombreCliente(nombre) {
    const limpio = String(nombre || '').trim().replace(/\s+/g, ' ');
    if (limpio.length < 2) {
      return { ok: false, msg: 'Escribe tu nombre (mínimo 2 letras, sin números).' };
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/.test(limpio)) {
      return { ok: false, msg: 'El nombre solo puede contener letras y espacios.' };
    }
    const bloqueado = (state.blacklist.nombres || []).some(
      (n) => String(n).trim().toLowerCase() === limpio.toLowerCase()
    );
    if (bloqueado) {
      return { ok: false, msg: 'Este nombre está restringido en la lista negra.' };
    }
    return { ok: true, valor: limpio };
  }

  function validarTelefonoBolivia(telefono) {
    const soloDigitos = String(telefono || '').replace(/\D/g, '');
    if (String(telefono || '').trim() !== soloDigitos) {
      return { ok: false, msg: 'Solo se permiten números (sin letras ni símbolos).' };
    }
    if (soloDigitos.length !== 8) {
      return { ok: false, msg: 'Debe tener exactamente 8 dígitos.' };
    }
    if (!/^[67]/.test(soloDigitos)) {
      return { ok: false, msg: 'El número debe empezar con 6 o 7.' };
    }
    const bloqueado = (state.blacklist.telefonos || []).includes(soloDigitos);
    if (bloqueado) {
      return { ok: false, msg: 'Este número está en la lista negra.' };
    }
    return { ok: true, valor: soloDigitos };
  }

  function construirSeccionAdmin() {
    const main = document.querySelector('.main-content');
    if (!main || document.getElementById('vistaAdmin')) return;

    const sec = document.createElement('section');
    sec.id = 'vistaAdmin';
    sec.className = 'view-section';
    sec.setAttribute('aria-label', 'Panel Administrador');
    sec.innerHTML = `
      <div class="hero-card compact-card">
        <span class="hero-pill-tag">ADMINISTRACIÓN · DECORA NATURE</span>
        <h2 class="hero-title" style="font-size:1.55rem;">Panel Administrador</h2>
        <p class="hero-copy" style="margin-bottom:0;">Gestiona flores, precios en Bs, stock, blacklist y WhatsApp.</p>
      </div>

      <div id="adminLoginCard" class="form-card">
        <h3>Acceso administrador</h3>
        <p class="product-spec">Ingresa tu contraseña para habilitar los controles de gestión.</p>
        <div class="field-group">
          <label for="adminPassInput">Contraseña</label>
          <input type="password" id="adminPassInput" class="input-field" placeholder="Escribe la contraseña">
          <span id="adminLoginError" class="field-error" role="alert"></span>
        </div>
        <div class="action-row">
          <button type="button" id="btnIngresarAdmin" class="btn btn-cta">Entrar al panel</button>
          <button type="button" id="btnVolverClienteDesdeAdmin" class="btn btn-secondary">Volver a inicio</button>
        </div>
      </div>

      <div id="adminPanelContent" hidden>
        <div class="form-card">
          <div class="card-title-row">
            <h3>Sesión de Administrador Activa</h3>
            <button type="button" id="btnCerrarSesionAdmin" class="btn btn-secondary btn-sm">Cerrar sesión</button>
          </div>
          <p id="adminEstadoMsg" class="status-text" role="status">Listo para editar catálogo, blacklist y ajustes.</p>
        </div>

        <div class="form-card" style="margin-top:0.9rem;">
          <h3>Lista negra (Blacklist)</h3>
          <div class="field-group">
            <label for="blacklistNombreInput">Bloquear nombre (solo letras)</label>
            <div class="hero-buttons">
              <input type="text" id="blacklistNombreInput" class="input-field" style="flex:1;" placeholder="Nombre a bloquear">
              <button type="button" id="btnAgregarBlacklistNombre" class="btn btn-outline-red btn-sm">Bloquear nombre</button>
            </div>
          </div>
          <div class="field-group">
            <label for="blacklistTelInput">Bloquear teléfono (8 dígitos, empieza con 6 o 7)</label>
            <div class="hero-buttons">
              <input type="text" id="blacklistTelInput" class="input-field" maxlength="8" inputmode="numeric" style="flex:1;" placeholder="Ej. 71234567">
              <button type="button" id="btnAgregarBlacklistTel" class="btn btn-outline-red btn-sm">Bloquear número</button>
            </div>
          </div>
          <div id="listaBlacklistAdmin" class="quote-items"></div>
        </div>

        <div class="form-card" style="margin-top:0.9rem;">
          <h3>Agregar nuevo detalle</h3>
          <div class="field-group">
            <label for="nuevoProdCodigo">Código</label>
            <input type="text" id="nuevoProdCodigo" class="input-field" placeholder="Ej. DN-TUL-09">
          </div>
          <div class="field-group">
            <label for="nuevoProdNombre">Nombre</label>
            <input type="text" id="nuevoProdNombre" class="input-field" placeholder="Ej. Ramo Tulipán Imperial">
          </div>
          <div class="field-group">
            <label for="nuevoProdSpec">Especificación</label>
            <input type="text" id="nuevoProdSpec" class="input-field" placeholder="Ej. Tulipanes frescos · Envoltura pastel">
          </div>
          <div class="field-group">
            <label for="nuevoProdCat">Categoría</label>
            <select id="nuevoProdCat" class="input-field">
              <option value="girasoles">Girasoles</option>
              <option value="margaritas">Margaritas</option>
              <option value="rosas">Rosas</option>
              <option value="tulipanes">Tulipanes</option>
            </select>
          </div>
          <div class="field-group">
            <label for="nuevoProdPrecioBs">Precio (Bs)</label>
            <input type="number" id="nuevoProdPrecioBs" class="input-field" step="0.10" min="1" placeholder="150.00">
          </div>
          <div class="field-group">
            <label for="nuevoProdStock">Stock</label>
            <input type="number" id="nuevoProdStock" class="input-field" min="0" step="1" placeholder="20">
          </div>
          <div class="action-row">
            <button type="button" id="btnCrearProductoAdmin" class="btn btn-confirm">Guardar detalle</button>
            <button type="button" id="btnRestaurarCatalogoAdmin" class="btn btn-secondary">Restaurar base</button>
          </div>
        </div>

        <div class="history-card" style="margin-top:0.9rem;">
          <h3>Precios en Bs, stock y estado</h3>
          <div id="adminListaProductos" class="quote-items"></div>
        </div>

        <div class="history-card" style="margin-top:0.9rem;">
          <div class="card-title-row">
            <h3>Historial de pedidos</h3>
            <button type="button" id="btnLimpiarHistorialAdmin" class="btn btn-outline-red btn-sm">Limpiar historial</button>
          </div>
          <div id="adminListaHistorial" class="quote-items"></div>
        </div>

        <div class="form-card" style="margin-top:0.9rem;">
          <h3>Nombre, WhatsApp y Ubicación</h3>
          <div class="field-group">
            <label for="adminNombreTiendaInput">Nombre de la florería</label>
            <input type="text" id="adminNombreTiendaInput" class="input-field">
          </div>
          <div class="field-group">
            <label for="adminWhatsappInput">WhatsApp (con código 591)</label>
            <input type="text" id="adminWhatsappInput" class="input-field">
          </div>
          <div class="field-group">
            <label for="adminTelefonoInput">Teléfono visible (8 dígitos)</label>
            <input type="text" id="adminTelefonoInput" class="input-field" maxlength="8">
          </div>
          <div class="field-group">
            <label for="adminDireccionInput">Ubicación</label>
            <input type="text" id="adminDireccionInput" class="input-field">
          </div>
          <button type="button" id="btnGuardarSucursalAdmin" class="btn btn-cta">Guardar datos</button>
        </div>
      </div>
    `;
    main.appendChild(sec);
  }

  function renderBlacklistAdmin() {
    const cont = document.getElementById('listaBlacklistAdmin');
    if (!cont) return;
    const nombres = (state.blacklist.nombres || []).map(
      (n, idx) => `
        <div class="quote-item">
          <div><strong>Nombre bloqueado:</strong> ${n}</div>
          <button type="button" class="btn btn-secondary btn-sm btn-bl-del" data-tipo="nombres" data-idx="${idx}">Quitar</button>
        </div>
      `
    );
    const tels = (state.blacklist.telefonos || []).map(
      (t, idx) => `
        <div class="quote-item">
          <div><strong>Teléfono bloqueado:</strong> ${t}</div>
          <button type="button" class="btn btn-secondary btn-sm btn-bl-del" data-tipo="telefonos" data-idx="${idx}">Quitar</button>
        </div>
      `
    );
    const todos = [...nombres, ...tels];
    cont.innerHTML = todos.length ? todos.join('') : '<p class="empty-msg">Sin nombres ni teléfonos en la lista negra.</p>';
  }

  function renderAdminPanel() {
    const loginCard = document.getElementById('adminLoginCard');
    const panelContent = document.getElementById('adminPanelContent');
    if (!loginCard || !panelContent) return;

    if (!state.adminAutenticado) {
      loginCard.hidden = false;
      loginCard.style.display = 'block';
      panelContent.hidden = true;
      panelContent.style.display = 'none';
      return;
    }

    loginCard.hidden = true;
    loginCard.style.display = 'none';
    panelContent.hidden = false;
    panelContent.style.display = 'block';

    const nomT = document.getElementById('adminNombreTiendaInput');
    const wp = document.getElementById('adminWhatsappInput');
    const tel = document.getElementById('adminTelefonoInput');
    const dir = document.getElementById('adminDireccionInput');
    if (nomT) nomT.value = state.sucursal.puntoVenta;
    if (wp) wp.value = state.sucursal.whatsappNumero;
    if (tel) tel.value = state.sucursal.telefono;
    if (dir) dir.value = state.sucursal.direccionCompleta;

    renderBlacklistAdmin();

    const lista = document.getElementById('adminListaProductos');
    if (lista) {
      lista.innerHTML = state.productos
        .map((p) => {
          const blq = Number(p.bloqueado) === 1;
          return `
            <div class="quote-item" data-admin-id="${p.id_producto}">
              <div style="flex:1 1 180px;">
                <strong>${p.nombre}</strong>
                <div class="product-spec">${p.codigo} · ${blq ? 'Bloqueado' : 'Activo'}</div>
              </div>
              <div class="hero-buttons">
                <input type="number" step="0.10" min="0" class="input-field admin-precio-input" style="width:92px;padding:0.35rem 0.5rem;" value="${aBolivianos(p.precio_usd).toFixed(2)}">
                <input type="number" step="1" min="0" class="input-field admin-stock-input" style="width:72px;padding:0.35rem 0.5rem;" value="${Number(p.stock)}">
                <button type="button" class="btn btn-secondary btn-sm btn-admin-guardar" data-id="${p.id_producto}">Guardar</button>
                <button type="button" class="btn btn-outline-red btn-sm btn-admin-toggle" data-id="${p.id_producto}">${blq ? 'Activar' : 'Bloquear'}</button>
              </div>
            </div>
          `;
        })
        .join('');
    }

    const histAdmin = document.getElementById('adminListaHistorial');
    if (histAdmin) {
      histAdmin.innerHTML = !state.historial.length
        ? '<p class="empty-msg">Sin pedidos registrados.</p>'
        : state.historial
            .map(
              (ped) => `
                <div class="quote-item">
                  <div><strong>#${ped.folio} — ${ped.cliente_nombre}</strong><div class="product-spec">${ped.cliente_contacto} · ${ped.estado}</div></div>
                  <strong>${formatoBs(ped.total_bs)}</strong>
                </div>
              `
            )
            .join('');
    }
  }

  function actualizarTextosSucursal() {
    if (els.textoDireccionEnvio) {
      els.textoDireccionEnvio.textContent = `${state.sucursal.direccionCompleta} · Tel: ${state.sucursal.telefono}`;
    }
    document.querySelectorAll('.site-footer strong').forEach((el) => {
      el.textContent = state.sucursal.puntoVenta;
    });
  }

  function cambiarVista(vista) {
    construirSeccionAdmin();
    state.vistaActiva = vista;
    const vistaAdminEl = document.getElementById('vistaAdmin');
    const mapa = {
      inicio: { el: els.vistaInicio, titulo: 'El mejor detalle en cada pétalo' },
      catalogo: { el: els.vistaCatalogo, titulo: 'Catálogo Floral' },
      envios: { el: els.vistaEnvios, titulo: 'Envíos y Entregas' },
      promociones: { el: els.vistaPromociones, titulo: 'Promociones Especiales' },
      cotizacion: { el: els.vistaCotizacion, titulo: 'Tu Cotización' },
      contacto: { el: els.vistaContacto, titulo: 'Contacto' },
      admin: { el: vistaAdminEl, titulo: 'Panel Administrador' }
    };

    Object.entries(mapa).forEach(([k, info]) => {
      if (!info.el) return;
      const activa = k === vista;
      info.el.classList.toggle('active', activa);
      info.el.style.display = activa ? 'block' : 'none';
    });

    if (vista === 'admin') renderAdminPanel();
    if (els.headerTituloVista && mapa[vista]) els.headerTituloVista.textContent = mapa[vista].titulo;

    document.querySelectorAll('.bottom-nav-btn[data-vista]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-vista') === vista);
    });

    cerrarDrawer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function mostrarBienvenida(visible) {
    if (els.welcomeScreen) {
      els.welcomeScreen.hidden = !visible;
      els.welcomeScreen.style.display = visible ? 'grid' : 'none';
    }
    if (els.appContainer) {
      els.appContainer.hidden = visible;
      els.appContainer.style.display = visible ? 'none' : 'flex';
    }
  }

  function ocultarSplashInmediato() {
    if (state.splashTimeoutId) {
      clearTimeout(state.splashTimeoutId);
      state.splashTimeoutId = null;
    }
    if (!els.splashScreen) return;
    els.splashScreen.classList.add('is-hidden');
    els.splashScreen.setAttribute('aria-hidden', 'true');
    els.splashScreen.hidden = true;
  }

  function mostrarSplash(duracionMs = 750, alTerminar = null) {
    if (!els.splashScreen) {
      if (typeof alTerminar === 'function') alTerminar();
      return;
    }
    ocultarSplashInmediato();
    els.splashScreen.hidden = false;
    els.splashScreen.classList.remove('is-hidden');
    els.splashScreen.setAttribute('aria-hidden', 'false');

    state.splashTimeoutId = setTimeout(() => {
      els.splashScreen.classList.add('is-hidden');
      els.splashScreen.setAttribute('aria-hidden', 'true');
      setTimeout(() => {
        if (els.splashScreen.classList.contains('is-hidden')) els.splashScreen.hidden = true;
        if (typeof alTerminar === 'function') alTerminar();
      }, 260);
    }, duracionMs);
  }

  function abrirDrawer() {
    if (els.drawerBackdrop) els.drawerBackdrop.hidden = false;
    if (els.drawerMenu) els.drawerMenu.hidden = false;
    if (els.btnAbrirMenu) els.btnAbrirMenu.setAttribute('aria-expanded', 'true');
  }

  function cerrarDrawer() {
    if (els.drawerBackdrop) els.drawerBackdrop.hidden = true;
    if (els.drawerMenu) els.drawerMenu.hidden = true;
    if (els.btnAbrirMenu) els.btnAbrirMenu.setAttribute('aria-expanded', 'false');
  }

  function aplicarDatosCatalogo(data, origenMsg) {
    state.categorias = Array.isArray(data.categorias) && data.categorias.length ? data.categorias : CATALOGO_BASE.categorias;
    const lista = Array.isArray(data.productos) && data.productos.length ? data.productos : CATALOGO_BASE.productos;
    state.productos = lista.map((p) => ({
      ...p,
      id_producto: Number(p.id_producto),
      precio_usd: Number(p.precio_usd),
      stock: Number(p.stock),
      bloqueado: Number(p.bloqueado || 0)
    }));

    if (els.estadoCatalogo && origenMsg) els.estadoCatalogo.textContent = origenMsg;
    renderCategoriasInicio();
    renderDrawerCategorias();
    renderFiltrosCategoria();
    renderProductos();
    renderPromociones();
    if (state.adminAutenticado) renderAdminPanel();
  }

  async function cargarCatalogo(forzarBase = false) {
    if (!forzarBase) {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.CATALOGO_ADMIN);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length) {
            aplicarDatosCatalogo({ categorias: CATALOGO_BASE.categorias, productos: parsed }, 'Catálogo personalizado local.');
            return;
          }
        }
      } catch (_) {}
    }

    try {
      const resp = await fetch('./productos.json', { cache: 'no-store' });
      if (!resp.ok) throw new Error('json');
      const data = await resp.json();
      aplicarDatosCatalogo(data, 'Catálogo cargado desde productos.json.');
    } catch (_) {
      aplicarDatosCatalogo(CATALOGO_BASE, 'Catálogo floral local activo.');
    }
  }

  function renderCategoriasInicio() {
    if (!els.gridCategoriasInicio) return;
    els.gridCategoriasInicio.innerHTML = state.categorias
      .map((cat) => {
        const tono = cat.tono === 'lilac' ? 'tone-lilac' : cat.tono === 'teal' ? 'tone-teal' : 'tone-pink';
        return `
          <button type="button" class="category-card ${tono}" data-categoria-ir="${cat.slug}">
            <div class="category-card-top">
              <span class="cat-mini-icon" aria-hidden="true">${cat.icono || '🌸'}</span>
              <span class="cat-corner-badge" aria-hidden="true">✨</span>
            </div>
            <img src="${encodeURI(cat.imagen_url)}" alt="${cat.nombre}" class="category-card-img" loading="lazy">
            <span class="category-pill-btn">${cat.nombre} ›</span>
          </button>
        `;
      })
      .join('');
  }

  function renderDrawerCategorias() {
    if (!els.drawerCategorias) return;
    els.drawerCategorias.innerHTML = state.categorias
      .map(
        (cat) => `
          <button type="button" class="drawer-item" data-categoria-ir="${cat.slug}">
            <span>• ${cat.nombre}</span>
            <span>›</span>
          </button>
        `
      )
      .join('');
  }

  function renderFiltrosCategoria() {
    if (!els.filtrosCategoria) return;
    const chips = [
      `<button type="button" class="chip ${state.categoriaActiva === 'todas' ? 'active' : ''}" data-categoria="todas">Todas</button>`
    ];
    state.categorias.forEach((cat) => {
      chips.push(
        `<button type="button" class="chip ${state.categoriaActiva === cat.slug ? 'active' : ''}" data-categoria="${cat.slug}">${cat.nombre}</button>`
      );
    });
    els.filtrosCategoria.innerHTML = chips.join('');
  }

  function toggleFavorito(idProd) {
    const id = Number(idProd);
    const idx = state.favoritos.indexOf(id);
    if (idx === -1) state.favoritos.push(id);
    else state.favoritos.splice(idx, 1);
    persistirFavoritos();
    renderProductos();
    renderPromociones();
  }

  function renderTarjetaProducto(prod, esPromo = false) {
    const blq = Number(prod.bloqueado) === 1;
    const agotado = Number(prod.stock) <= 0;
    const fav = state.favoritos.includes(Number(prod.id_producto));
    const baseBs = aBolivianos(prod.precio_usd);
    const precioFinalBs = esPromo ? baseBs * 0.85 : baseBs;

    return `
      <article class="product-card" data-id="${prod.id_producto}">
        <button type="button" class="btn-fav-card ${fav ? 'is-fav' : ''}" data-fav="${prod.id_producto}" aria-label="Guardar favorito">
          ${fav ? '♥' : '♡'}
        </button>
        <img src="${obtenerImagenProducto(prod)}" alt="${prod.nombre}" class="product-img" loading="lazy">
        <div class="product-meta">
          <span>${prod.codigo}</span>
          <span>${blq ? 'Bloqueado' : agotado ? 'Agotado' : `Stock: ${prod.stock}`}</span>
        </div>
        <h3 class="product-title">${prod.nombre}</h3>
        <p class="product-spec">${prod.especificacion}</p>
        <div class="product-bottom">
          <span class="product-price">${formatoBs(precioFinalBs)}</span>
          <div class="hero-buttons">
            <button type="button" class="btn btn-secondary btn-sm btn-detalle" data-id="${prod.id_producto}">Ver</button>
            <button type="button" class="btn-plus-circle btn-agregar" data-id="${prod.id_producto}" ${blq || agotado ? 'disabled' : ''}>+</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderProductos() {
    if (!els.gridProductos) return;
    const q = state.busqueda.trim().toLowerCase();

    const lista = state.productos.filter((prod) => {
      if (Number(prod.bloqueado) === 1 && !state.adminAutenticado) return false;
      const okCat = state.categoriaActiva === 'todas' || prod.categoria_slug === state.categoriaActiva;
      const okTxt =
        !q ||
        prod.nombre.toLowerCase().includes(q) ||
        prod.codigo.toLowerCase().includes(q) ||
        prod.especificacion.toLowerCase().includes(q);
      const okDisp =
        state.disponibilidadActiva === 'todos' ||
        (state.disponibilidadActiva === 'stock' && Number(prod.stock) > 0) ||
        (state.disponibilidadActiva === 'agotado' && Number(prod.stock) <= 0);
      return okCat && okTxt && okDisp;
    });

    if (els.contadorProductos) els.contadorProductos.textContent = `${lista.length} productos`;
    els.gridProductos.innerHTML = lista.length
      ? lista.map((p) => renderTarjetaProducto(p, false)).join('')
      : '<p class="empty-msg">No se encontraron flores con ese filtro.</p>';
  }

  function renderPromociones() {
    if (!els.gridPromociones) return;
    const destacados = state.productos
      .filter((p) => Number(p.bloqueado) !== 1 && Number(p.stock) > 0)
      .slice(0, 8);
    els.gridPromociones.innerHTML = destacados.map((p) => renderTarjetaProducto(p, true)).join('');
  }

  function abrirModalDetalle(idProd) {
    const prod = state.productos.find((p) => Number(p.id_producto) === Number(idProd));
    if (!prod || !els.modalDetalle) return;
    state.productoDetalleId = prod.id_producto;
    if (els.modalImagen) {
      els.modalImagen.src = obtenerImagenProducto(prod);
      els.modalImagen.alt = prod.nombre;
    }
    if (els.modalCodigoCat) els.modalCodigoCat.textContent = `${prod.codigo} · ${prod.categoria}`;
    if (els.modalTitulo) els.modalTitulo.textContent = prod.nombre;
    if (els.modalEspecificacion) els.modalEspecificacion.textContent = `${prod.especificacion} (${prod.unidad})`;
    if (els.modalPrecioStock) els.modalPrecioStock.textContent = `${formatoBs(aBolivianos(prod.precio_usd))} · Stock: ${prod.stock}`;
    if (els.btnModalAgregar) els.btnModalAgregar.disabled = Number(prod.bloqueado) === 1 || Number(prod.stock) <= 0;
    if (typeof els.modalDetalle.showModal === 'function') els.modalDetalle.showModal();
  }

  function agregarProducto(idProd) {
    const prod = state.productos.find((p) => Number(p.id_producto) === Number(idProd));
    if (!prod || Number(prod.bloqueado) === 1 || Number(prod.stock) <= 0) return;

    const existente = state.carrito.find((i) => Number(i.id_producto) === Number(prod.id_producto));
    if (existente) {
      if (existente.cantidad < Number(prod.stock)) existente.cantidad += 1;
    } else {
      state.carrito.push({
        id_producto: prod.id_producto,
        codigo: prod.codigo,
        nombre: prod.nombre,
        precio_usd: Number(prod.precio_usd),
        cantidad: 1
      });
    }
    persistirCarrito();
    hidratarCotizacionDOM();
  }

  function cambiarCantidad(idProd, delta) {
    const idx = state.carrito.findIndex((i) => Number(i.id_producto) === Number(idProd));
    if (idx === -1) return;
    const next = state.carrito[idx].cantidad + delta;
    if (next <= 0) state.carrito.splice(idx, 1);
    else state.carrito[idx].cantidad = next;
    persistirCarrito();
    hidratarCotizacionDOM();
  }

  function calcularTotalBs() {
    return state.carrito.reduce((acc, i) => acc + aBolivianos(i.precio_usd) * Number(i.cantidad), 0);
  }

  function hidratarCotizacionDOM() {
    const units = state.carrito.reduce((acc, i) => acc + Number(i.cantidad), 0);
    if (els.contadorCarrito) els.contadorCarrito.textContent = String(units);
    if (els.unidadesCotizacion) els.unidadesCotizacion.textContent = String(units);
    if (!els.listaCotizacion || !els.totalCotizacion) return;

    if (!state.carrito.length) {
      els.listaCotizacion.innerHTML = '<p class="empty-msg">Tu cotización está vacía.</p>';
      els.totalCotizacion.textContent = formatoBs(0);
      return;
    }

    els.listaCotizacion.innerHTML = state.carrito
      .map((i) => {
        const unitBs = aBolivianos(i.precio_usd);
        return `
          <div class="quote-item">
            <div>
              <strong>${i.nombre}</strong>
              <div class="product-spec">${i.codigo} · ${formatoBs(unitBs)} c/u</div>
            </div>
            <div class="hero-buttons">
              <button type="button" class="btn btn-secondary btn-sm btn-qty" data-id="${i.id_producto}" data-delta="-1">-</button>
              <strong>${i.cantidad}</strong>
              <button type="button" class="btn btn-secondary btn-sm btn-qty" data-id="${i.id_producto}" data-delta="1">+</button>
              <strong>${formatoBs(unitBs * Number(i.cantidad))}</strong>
            </div>
          </div>
        `;
      })
      .join('');

    els.totalCotizacion.textContent = formatoBs(calcularTotalBs());
  }

  function hidratarHistorialDOM() {
    if (!els.listaHistorial) return;
    els.listaHistorial.innerHTML = !state.historial.length
      ? '<p class="empty-msg">Sin pedidos registrados aún.</p>'
      : state.historial
          .map(
            (ped) => `
              <div class="quote-item">
                <div><strong>#${ped.folio} — ${ped.cliente_nombre}</strong><div class="product-spec">${ped.cliente_contacto} · ${ped.estado}</div></div>
                <strong>${formatoBs(ped.total_bs)}</strong>
              </div>
            `
          )
          .join('');
  }

  function abrirWhatsAppConPedido(pedido) {
    const lineas = (pedido.items || []).map(
      (i) => `• ${i.nombre} (${i.codigo}) x${i.cantidad} = ${formatoBs(aBolivianos(i.precio_usd) * Number(i.cantidad))}`
    );
    const msg = [
      `*NUEVO PEDIDO — ${state.sucursal.puntoVenta.toUpperCase()}*`,
      `Folio: *#${pedido.folio}*`,
      `Cliente: *${pedido.cliente_nombre}*`,
      `Teléfono: *${pedido.cliente_contacto}*`,
      '',
      '*Detalle:*',
      ...lineas,
      '',
      `*Total: ${formatoBs(pedido.total_bs)}*`,
      `Ubicación: ${state.sucursal.direccionCompleta}`
    ].join('\n');
    const url = `https://wa.me/${state.sucursal.whatsappNumero}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function detenerCuentaRegresiva() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
    state.segundosRestantes = 8;
    if (els.btnConfirmarCuentaRegresiva) els.btnConfirmarCuentaRegresiva.hidden = true;
    if (els.btnCancelarCuentaRegresiva) els.btnCancelarCuentaRegresiva.hidden = true;
  }

  function iniciarCuentaRegresiva(payload) {
    detenerCuentaRegresiva();
    state.datosPedidoPendientes = payload;
    state.segundosRestantes = 8;
    if (els.btnConfirmarCuentaRegresiva) {
      els.btnConfirmarCuentaRegresiva.hidden = false;
      els.btnConfirmarCuentaRegresiva.textContent = 'Confirmar pedido (8s)';
    }
    if (els.btnCancelarCuentaRegresiva) els.btnCancelarCuentaRegresiva.hidden = false;
    if (els.estadoPedido) els.estadoPedido.textContent = 'Confirma antes de que termine la cuenta de 8s.';

    state.timerId = setInterval(() => {
      state.segundosRestantes -= 1;
      if (state.segundosRestantes > 0) {
        if (els.btnConfirmarCuentaRegresiva) {
          els.btnConfirmarCuentaRegresiva.textContent = `Confirmar pedido (${state.segundosRestantes}s)`;
        }
      } else {
        detenerCuentaRegresiva();
        state.datosPedidoPendientes = null;
        if (els.estadoPedido) els.estadoPedido.textContent = 'Tiempo agotado. Intenta nuevamente.';
      }
    }, 1000);
  }

  function confirmarPedido() {
    if (!state.datosPedidoPendientes || !state.carrito.length) return;
    const totalBs = calcularTotalBs();
    const folio = `DN-${Date.now().toString().slice(-5)}`;
    const pedido = {
      folio,
      cliente_nombre: state.datosPedidoPendientes.cliente_nombre,
      cliente_contacto: state.datosPedidoPendientes.cliente_contacto,
      total_bs: totalBs,
      items: state.carrito.map((i) => ({ ...i })),
      estado: 'Enviado a WhatsApp'
    };
    state.historial.unshift(pedido);
    persistirHistorial();
    hidratarHistorialDOM();
    if (state.adminAutenticado) renderAdminPanel();

    detenerCuentaRegresiva();
    state.datosPedidoPendientes = null;
    state.carrito = [];
    persistirCarrito();
    hidratarCotizacionDOM();
    els.formPedido?.reset();
    if (els.estadoPedido) els.estadoPedido.textContent = `Pedido ${folio} registrado. Abriendo WhatsApp...`;
    abrirWhatsAppConPedido(pedido);
  }

  function registrarEventos() {
    els.clienteNombre?.addEventListener('input', (e) => {
      const filtrado = e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]/g, '');
      if (e.target.value !== filtrado) e.target.value = filtrado;
      if (els.errorNombre) els.errorNombre.textContent = '';
    });

    els.clienteContacto?.addEventListener('input', (e) => {
      const filtrado = e.target.value.replace(/\D/g, '').slice(0, 8);
      if (e.target.value !== filtrado) e.target.value = filtrado;
      if (els.errorContacto) els.errorContacto.textContent = '';
    });

    els.btnExplorarCatalogo?.addEventListener('click', () => {
      ocultarSplashInmediato();
      mostrarBienvenida(false);
      cambiarVista('inicio');
    });

    els.btnSaltarBienvenida?.addEventListener('click', () => {
      ocultarSplashInmediato();
      mostrarBienvenida(false);
      cambiarVista('admin');
    });

    els.btnAbrirAdminDrawer?.addEventListener('click', () => {
      ocultarSplashInmediato();
      mostrarBienvenida(false);
      cambiarVista('admin');
    });

    els.btnVolverInicio?.addEventListener('click', () => cambiarVista('inicio'));
    els.btnBannerExplorar?.addEventListener('click', () => cambiarVista('catalogo'));
    els.btnBannerPromos?.addEventListener('click', () => cambiarVista('promociones'));
    els.btnAtrasCatalogo?.addEventListener('click', () => cambiarVista('inicio'));
    els.btnIrCotizacionTop?.addEventListener('click', () => cambiarVista('cotizacion'));
    els.btnIrPedidoDesdeEnvios?.addEventListener('click', () => cambiarVista('cotizacion'));
    els.btnIrCatalogoDesdeEnvios?.addEventListener('click', () => cambiarVista('catalogo'));
    els.btnIrContactoDesdeEnvios?.addEventListener('click', () => cambiarVista('contacto'));

    els.btnTema?.addEventListener('click', () => {
      aplicarTema(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    els.btnAbrirMenu?.addEventListener('click', abrirDrawer);
    els.btnCerrarMenu?.addEventListener('click', cerrarDrawer);
    els.drawerBackdrop?.addEventListener('click', cerrarDrawer);

    els.drawerMenu?.addEventListener('click', (e) => {
      const btnVista = e.target.closest('[data-vista]');
      if (btnVista) {
        ocultarSplashInmediato();
        mostrarBienvenida(false);
        cambiarVista(btnVista.getAttribute('data-vista'));
        return;
      }
      const btnCat = e.target.closest('[data-categoria-ir]');
      if (btnCat) {
        ocultarSplashInmediato();
        mostrarBienvenida(false);
        state.categoriaActiva = btnCat.getAttribute('data-categoria-ir');
        renderFiltrosCategoria();
        renderProductos();
        cambiarVista('catalogo');
      }
    });

    document.querySelector('.bottom-nav')?.addEventListener('click', (e) => {
      const btn = e.target.closest('.bottom-nav-btn[data-vista]');
      if (!btn) return;
      ocultarSplashInmediato();
      mostrarBienvenida(false);
      cambiarVista(btn.getAttribute('data-vista'));
    });

    els.gridCategoriasInicio?.addEventListener('click', (e) => {
      const card = e.target.closest('[data-categoria-ir]');
      if (!card) return;
      state.categoriaActiva = card.getAttribute('data-categoria-ir');
      renderFiltrosCategoria();
      renderProductos();
      cambiarVista('catalogo');
    });

    els.filtrosCategoria?.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip[data-categoria]');
      if (!chip) return;
      state.categoriaActiva = chip.getAttribute('data-categoria');
      renderFiltrosCategoria();
      renderProductos();
    });

    els.subfiltrosDisponibilidad?.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip[data-disp]');
      if (!chip) return;
      state.disponibilidadActiva = chip.getAttribute('data-disp');
      els.subfiltrosDisponibilidad.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c === chip));
      renderProductos();
    });

    els.inputBuscar?.addEventListener('input', (e) => {
      state.busqueda = e.target.value || '';
      renderProductos();
    });

    const manejarClickGrid = (e) => {
      const fav = e.target.closest('[data-fav]');
      if (fav) {
        toggleFavorito(fav.getAttribute('data-fav'));
        return;
      }
      const add = e.target.closest('.btn-agregar');
      if (add) {
        agregarProducto(add.getAttribute('data-id'));
        return;
      }
      const det = e.target.closest('.btn-detalle');
      if (det) abrirModalDetalle(det.getAttribute('data-id'));
    };

    els.gridProductos?.addEventListener('click', manejarClickGrid);
    els.gridPromociones?.addEventListener('click', manejarClickGrid);

    els.btnModalAgregar?.addEventListener('click', () => {
      if (state.productoDetalleId !== null) agregarProducto(state.productoDetalleId);
      els.modalDetalle?.close();
    });

    els.btnCerrarModal?.addEventListener('click', () => els.modalDetalle?.close());

    els.listaCotizacion?.addEventListener('click', (e) => {
      const b = e.target.closest('.btn-qty');
      if (b) cambiarCantidad(b.getAttribute('data-id'), Number(b.getAttribute('data-delta')));
    });

    els.btnVaciarCarrito?.addEventListener('click', () => {
      state.carrito = [];
      persistirCarrito();
      hidratarCotizacionDOM();
    });

    els.formPedido?.addEventListener('submit', (e) => {
      e.preventDefault();
      if (els.errorNombre) els.errorNombre.textContent = '';
      if (els.errorContacto) els.errorContacto.textContent = '';
      if (els.estadoPedido) els.estadoPedido.textContent = '';

      const valNom = validarNombreCliente(els.clienteNombre?.value || '');
      const valTel = validarTelefonoBolivia(els.clienteContacto?.value || '');
      let ok = true;

      if (!valNom.ok) {
        if (els.errorNombre) els.errorNombre.textContent = valNom.msg;
        ok = false;
      }
      if (!valTel.ok) {
        if (els.errorContacto) els.errorContacto.textContent = valTel.msg;
        ok = false;
      }
      if (!state.carrito.length) {
        if (els.estadoPedido) els.estadoPedido.textContent = 'Agrega flores antes de confirmar.';
        ok = false;
      }
      if (ok) {
        iniciarCuentaRegresiva({
          cliente_nombre: valNom.valor,
          cliente_contacto: valTel.valor
        });
      }
    });

    els.btnConfirmarCuentaRegresiva?.addEventListener('click', confirmarPedido);
    els.btnCancelarCuentaRegresiva?.addEventListener('click', () => {
      detenerCuentaRegresiva();
      state.datosPedidoPendientes = null;
      if (els.estadoPedido) els.estadoPedido.textContent = 'Confirmación cancelada.';
    });

    els.formContacto?.addEventListener('submit', (e) => {
      e.preventDefault();
      const n = (els.contactoNombre?.value || '').trim();
      const c = (els.contactoCorreo?.value || '').trim();
      const m = (els.contactoMensaje?.value || '').trim();
      if (!n || !c || m.length < 4) {
        if (els.estadoContacto) els.estadoContacto.textContent = 'Completa nombre, correo/teléfono y mensaje.';
        return;
      }
      els.formContacto.reset();
      if (els.estadoContacto) els.estadoContacto.textContent = `Mensaje enviado. Contacto: ${state.sucursal.telefono}.`;
    });

    els.btnVerBienvenida?.addEventListener('click', () => {
      ocultarSplashInmediato();
      cerrarDrawer();
      mostrarBienvenida(true);
    });

    els.btnReproducirSplash?.addEventListener('click', () => {
      cerrarDrawer();
      mostrarBienvenida(false);
      mostrarSplash(750, () => mostrarBienvenida(true));
    });

    els.btnSmokeTest?.addEventListener('click', () => {
      const btns = document.querySelectorAll('button').length;
      const sinAlt = Array.from(document.querySelectorAll('img')).filter((i) => !i.alt || !i.alt.trim()).length;
      if (els.resultadoAuditoria) els.resultadoAuditoria.textContent = `Smoke Test -> Botones: ${btns} · Sin alt: ${sinAlt}`;
    });

    els.btnAuditarA11Y?.addEventListener('click', () => {
      const tags = ['header', 'nav', 'main', 'section', 'article', 'footer'].filter((t) => document.querySelector(t));
      if (els.resultadoAuditoria) els.resultadoAuditoria.textContent = `A11Y -> ${tags.join(', ')}`;
    });

    document.addEventListener('click', (e) => {
      if (e.target.closest('#btnIngresarAdmin')) {
        const pass = document.getElementById('adminPassInput');
        const err = document.getElementById('adminLoginError');
        if (pass && pass.value.trim() === ADMIN_PASSCODE) {
          state.adminAutenticado = true;
          pass.value = '';
          if (err) err.textContent = '';
          renderProductos();
          renderPromociones();
          renderAdminPanel();
        } else if (err) {
          err.textContent = 'Contraseña incorrecta.';
        }
      } else if (e.target.closest('#btnVolverClienteDesdeAdmin')) {
        cambiarVista('inicio');
      } else if (e.target.closest('#btnCerrarSesionAdmin')) {
        state.adminAutenticado = false;
        renderProductos();
        renderPromociones();
        renderAdminPanel();
      } else if (e.target.closest('#btnAgregarBlacklistNombre')) {
        const inp = document.getElementById('blacklistNombreInput');
        const msg = document.getElementById('adminEstadoMsg');
        const limpio = (inp?.value || '').trim().replace(/\s+/g, ' ');
        if (!/^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]{2,}$/.test(limpio)) {
          if (msg) msg.textContent = 'Escribe un nombre válido (solo letras).';
          return;
        }
        if (!state.blacklist.nombres.some((x) => x.toLowerCase() === limpio.toLowerCase())) {
          state.blacklist.nombres.push(limpio);
          persistirBlacklist();
        }
        if (inp) inp.value = '';
        renderBlacklistAdmin();
        if (msg) msg.textContent = `Nombre "${limpio}" agregado a la lista negra.`;
      } else if (e.target.closest('#btnAgregarBlacklistTel')) {
        const inp = document.getElementById('blacklistTelInput');
        const msg = document.getElementById('adminEstadoMsg');
        const dig = (inp?.value || '').replace(/\D/g, '');
        if (!/^[67]\d{7}$/.test(dig)) {
          if (msg) msg.textContent = 'El número debe tener 8 dígitos y empezar con 6 o 7.';
          return;
        }
        if (!state.blacklist.telefonos.includes(dig)) {
          state.blacklist.telefonos.push(dig);
          persistirBlacklist();
        }
        if (inp) inp.value = '';
        renderBlacklistAdmin();
        if (msg) msg.textContent = `Número "${dig}" agregado a la lista negra.`;
      } else if (e.target.closest('.btn-bl-del')) {
        const b = e.target.closest('.btn-bl-del');
        const tipo = b.getAttribute('data-tipo');
        const idx = Number(b.getAttribute('data-idx'));
        if (Array.isArray(state.blacklist[tipo])) {
          state.blacklist[tipo].splice(idx, 1);
          persistirBlacklist();
          renderBlacklistAdmin();
        }
      } else if (e.target.closest('#btnCrearProductoAdmin')) {
        const cod = (document.getElementById('nuevoProdCodigo')?.value || '').trim();
        const nom = (document.getElementById('nuevoProdNombre')?.value || '').trim();
        const spc = (document.getElementById('nuevoProdSpec')?.value || '').trim();
        const slug = document.getElementById('nuevoProdCat')?.value || 'girasoles';
        const prcBs = Number(document.getElementById('nuevoProdPrecioBs')?.value);
        const stk = Number(document.getElementById('nuevoProdStock')?.value);
        const msg = document.getElementById('adminEstadoMsg');
        if (!cod || !nom || !spc || Number.isNaN(prcBs) || prcBs <= 0 || Number.isNaN(stk) || stk < 0) {
          if (msg) msg.textContent = 'Revisa los campos del nuevo detalle.';
          return;
        }
        const cat = state.categorias.find((c) => c.slug === slug) || state.categorias[0];
        const maxId = state.productos.reduce((m, p) => Math.max(m, Number(p.id_producto) || 0), 0);
        state.productos.push({
          id_producto: maxId + 1,
          codigo: cod,
          nombre: nom,
          especificacion: spc,
          unidad: 'Ramo',
          categoria: cat.nombre,
          categoria_slug: slug,
          precio_usd: prcBs / TIPO_CAMBIO_BS,
          stock: Math.floor(stk),
          bloqueado: 0,
          ...(REFERENCIAS_POR_CATEGORIA[slug] || REFERENCIAS_POR_CATEGORIA.girasoles)
        });
        persistirCatalogoAdmin();
        renderProductos();
        renderPromociones();
        renderAdminPanel();
        if (msg) msg.textContent = `Detalle ${cod} guardado en Bs.`;
      } else if (e.target.closest('#btnRestaurarCatalogoAdmin')) {
        try { localStorage.removeItem(STORAGE_KEYS.CATALOGO_ADMIN); } catch (_) {}
        cargarCatalogo(true);
      } else if (e.target.closest('#btnLimpiarHistorialAdmin')) {
        state.historial = [];
        persistirHistorial();
        hidratarHistorialDOM();
        renderAdminPanel();
      } else if (e.target.closest('.btn-admin-guardar')) {
        const b = e.target.closest('.btn-admin-guardar');
        const id = Number(b.getAttribute('data-id'));
        const fila = b.closest('[data-admin-id]');
        const prcBs = Number(fila?.querySelector('.admin-precio-input')?.value);
        const stk = Number(fila?.querySelector('.admin-stock-input')?.value);
        const prod = state.productos.find((p) => Number(p.id_producto) === id);
        if (prod && !Number.isNaN(prcBs) && !Number.isNaN(stk)) {
          prod.precio_usd = prcBs / TIPO_CAMBIO_BS;
          prod.stock = Math.floor(stk);
          persistirCatalogoAdmin();
          renderProductos();
          renderPromociones();
          renderAdminPanel();
        }
      } else if (e.target.closest('.btn-admin-toggle')) {
        const b = e.target.closest('.btn-admin-toggle');
        const id = Number(b.getAttribute('data-id'));
        const prod = state.productos.find((p) => Number(p.id_producto) === id);
        if (prod) {
          prod.bloqueado = Number(prod.bloqueado) === 1 ? 0 : 1;
          persistirCatalogoAdmin();
          renderProductos();
          renderPromociones();
          renderAdminPanel();
        }
      } else if (e.target.closest('#btnGuardarSucursalAdmin')) {
        const nomT = (document.getElementById('adminNombreTiendaInput')?.value || '').trim();
        const wp = (document.getElementById('adminWhatsappInput')?.value || '').replace(/\D/g, '');
        const tel = (document.getElementById('adminTelefonoInput')?.value || '').replace(/\D/g, '').slice(0, 8);
        const dir = (document.getElementById('adminDireccionInput')?.value || '').trim();
        if (nomT) state.sucursal.puntoVenta = nomT;
        if (wp) state.sucursal.whatsappNumero = wp;
        if (/^[67]\d{7}$/.test(tel)) state.sucursal.telefono = tel;
        if (dir) state.sucursal.direccionCompleta = dir;
        persistirSucursalAdmin();
        actualizarTextosSucursal();
      }
    });

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      state.deferredPrompt = e;
      if (els.btnInstalarPWA) els.btnInstalarPWA.hidden = false;
    });

    els.btnInstalarPWA?.addEventListener('click', async () => {
      if (!state.deferredPrompt) return;
      state.deferredPrompt.prompt();
      await state.deferredPrompt.userChoice;
      state.deferredPrompt = null;
      els.btnInstalarPWA.hidden = true;
    });
  }

  function hidratarInicial() {
    try {
      aplicarTema(localStorage.getItem(STORAGE_KEYS.TEMA) || 'dark');
      const suc = localStorage.getItem(STORAGE_KEYS.SUCURSAL_ADMIN);
      if (suc) state.sucursal = { ...SUCURSAL_INFO, ...JSON.parse(suc) };
      const bl = localStorage.getItem(STORAGE_KEYS.BLACKLIST);
      if (bl) state.blacklist = { ...BLACKLIST_INICIAL, ...JSON.parse(bl) };
      const car = localStorage.getItem(STORAGE_KEYS.CARRITO);
      if (car) state.carrito = JSON.parse(car);
      const his = localStorage.getItem(STORAGE_KEYS.HISTORIAL);
      if (his) state.historial = JSON.parse(his);
      const fav = localStorage.getItem(STORAGE_KEYS.FAVORITOS);
      if (fav) state.favoritos = JSON.parse(fav);
    } catch (_) {}

    construirSeccionAdmin();
    actualizarTextosSucursal();
    hidratarCotizacionDOM();
    hidratarHistorialDOM();
    renderAdminPanel();
  }

  if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }

  hidratarInicial();
  registrarEventos();
  cargarCatalogo();
  mostrarBienvenida(false);
  mostrarSplash(750, () => mostrarBienvenida(true));
})();