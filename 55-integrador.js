// VARIABLES

const listaDeProductos = [
	[1, "Notebook Lenobo S400", 100, true],
	[2, "Celular Notorola G5", 135, false],
	[3, "Smart TV Filips 43'",  190, true],
	[4,	"Sorny PS 7", 215, true],
];

let carritoDeCompras = [];
let operacion = "";
let repetirOperacion = "";
let codigoDescuento = "quieromidescuento"
let porcentajeDescuento = 0.10;


// FUNCIONES PRINCIPALES

const agregarProducto = () => {

	carritoDeCompras.sort();
	console.log(carritoDeCompras);

	alert(`Tenemos los siguientes productos disponibles:

	ID 1 - 💻 Notebook Lenobo S400 - $100 - se puede aplicar descuento
	ID 2 - 📱 Celular Notorola G5 - $135
	ID 3 - 🖥 Smart TV Filips 43' - $190 - se puede aplicar descuento
	ID 4 - 🎮 Sorny PS 7 - $215 - se puede aplicar descuento
	
	`);
	
	let idProductoAAgregar = prompt("Por favor, indique el ID del producto que desea agregar:");
	idProductoAAgregar = Number(idProductoAAgregar);

	if (idProductoAAgregar > listaDeProductos.length) {
		alert("⚠️ El ID ingresado no se encuentra en nuestro catálogo. ⚠️");
		agregarProducto();
	} else if (idProductoAAgregar == "") {
		alert("⚠️ No ingresó una opción válida. ⚠️");
		agregarProducto();
	} else if (isNaN(idProductoAAgregar) == true) {
		alert("⚠️ No ingresó una opción válida. ⚠️");
		agregarProducto();
	};

	let cantidadUnidades = prompt(`Usted seleccionó: ${listaDeProductos[idProductoAAgregar-1][1]}	
	Por favor, indique cuántas unidades desea comprar:`);
	cantidadUnidades = Number(cantidadUnidades);
	
		if (cantidadUnidades <= 0) {
			alert("⚠️ No ingresó una opción válida. ⚠️");
			cantidadUnidades = prompt(`Usted seleccionó: ${listaDeProductos[idProductoAAgregar-1][1]}	
	Por favor, indique cuántas unidades desea comprar:`);
			cantidadUnidades = Number(cantidadUnidades);
		} else if (cantidadUnidades == "") {
			alert("⚠️ No ingresó una opción válida. ⚠️");
			cantidadUnidades = prompt(`Usted seleccionó: ${listaDeProductos[idProductoAAgregar-1][1]}	
	Por favor, indique cuántas unidades desea comprar:`);
			cantidadUnidades = Number(cantidadUnidades);
		} else if (isNaN(cantidadUnidades) == true) {
			alert("⚠️ No ingresó una opción válida. ⚠️");
			cantidadUnidades = prompt(`Usted seleccionó: ${listaDeProductos[idProductoAAgregar-1][1]}	
	Por favor, indique cuántas unidades desea comprar:`);
			cantidadUnidades = Number(cantidadUnidades);
		};
	
	if (carritoDeCompras.length == 0) { // si el carrito esta vacio
		carritoDeCompras.push(listaDeProductos[idProductoAAgregar-1]);
		carritoDeCompras[0].push(cantidadUnidades);
		console.log(carritoDeCompras);
		repetir();
	};

	for (let i = 0; i < carritoDeCompras.length; i++) {
		for (let j = 0; j < carritoDeCompras[i].length; j++) {	
			if (carritoDeCompras.length > 0 && carritoDeCompras[j][0] == idProductoAAgregar) {
				let nuevaCantidadUnidades = (carritoDeCompras[i][4] + cantidadUnidades);
				carritoDeCompras[i].splice(4, 1, nuevaCantidadUnidades);
				console.log(carritoDeCompras);
				repetir();			
			} else  {							
				carritoDeCompras.push(listaDeProductos[idProductoAAgregar-1]);
				carritoDeCompras[(carritoDeCompras.length - 1)].push(cantidadUnidades);
				console.log(carritoDeCompras);
				repetir();
			};
			break;
		};
		break;
	};
};

const mostrarDetalle = () => {
	alert(`DETALLE DE COMPRA 🛒
	
	 ${mostrarProductos()}
	
	🛍️ TOTAL DE PRODUCTOS: ${contarTotalDeProductos()} UNIDADES
	
	💳 SUBTOTAL DE COMPRA: $ ${subtotalDeCompra()}
	`);
	operacionSeleccionada();
};

const eliminarProducto = () => {
	let idProductoAEliminar = prompt(`Por favor, indique el ID del producto que desea eliminar:
	
	PRODUCTOS EN CARRITO 🛒
	
	 ${mostrarProductosConId()}

	`);
	idProductoAEliminar = Number(idProductoAEliminar);
	if (idProductoAEliminar > listaDeProductos.length) {
		alert("⚠️ El ID ingresado no se encuentra en su carrito de compras. ⚠️");
		eliminarProducto();
	} else if (idProductoAEliminar == "") {
		alert("⚠️ No ingresó una opción válida. ⚠️");
		eliminarProducto();
	} else if (isNaN(idProductoAEliminar) == true) {
		alert("⚠️ No ingresó una opción válida. ⚠️");
		eliminarProducto();
	} else {
		for (let i = 0; i < carritoDeCompras.length; i++) {
			for (let j = 0; j < carritoDeCompras[i].length; j++) {
				if (carritoDeCompras[i][j] === idProductoAEliminar) {
					let confirmarEliminar = prompt(`Usted seleccionó: ${carritoDeCompras[i][1]} - ${carritoDeCompras[i][4]} unidades
			
				Desea confirmar la operación?
				
				SI ✔️ - NO ❌
				
				`);
					confirmarEliminar = confirmarEliminar.toUpperCase();
					if (confirmarEliminar === "SI") {
						alert(`Se ha eliminado el siguiente producto del carrito de compras con éxito:
						
						${carritoDeCompras[i][1]} - ${carritoDeCompras[i][4]}`);
						carritoDeCompras.splice([i], 1);
						break;
					} else {
						alert(`Se ha cancelado la operación solicitada.`)
					};
				};	
				break;
			};
		};
	};
	repetir();
};

const vaciarCarrito = () => {
	let eliminarTotalProductos = prompt(`Desea vaciar su carrito de compras?
	
	PRODUCTOS EN CARRITO 🛒
	
	 ${mostrarProductosConId()}

	SI ✔️ - NO ❌
			
	`);	 
	eliminarTotalProductos = eliminarTotalProductos.toUpperCase();
	if (eliminarTotalProductos === "SI") {
		alert(`Se han eliminado todos los productos del carrito de compras.`);
		carritoDeCompras.splice(0, carritoDeCompras.length);	
	} else {
		alert(`Se ha cancelado la operación solicitada.`)
	};
	operacionSeleccionada();
};

const confirmarCompra = () => {
	alert(`DETALLE DE COMPRA 🛒
	
	${mostrarProductos()}
 
 🛍️ TOTAL DE PRODUCTOS: ${contarTotalDeProductos()} UNIDADES
 
 💳 SUBTOTAL DE COMPRA: $ ${subtotalDeCompra()}
 `);

	let tieneCodigo = prompt(`Tiene un código de descuento?
	
	SI ✔️ - NO ❌
	`);
	tieneCodigo = tieneCodigo.toUpperCase();
	if (tieneCodigo === "SI") {
		ingresarCodigoDescuento();
	} else {
		mostrarDetalleSinDescuento();	
	};
	let confirmarOperacionCompra = prompt(`Desea confirmar su compra?
	
	SI ✔️ - NO ❌
	`);
	confirmarOperacionCompra = confirmarOperacionCompra.toUpperCase();
	if (confirmarOperacionCompra === "SI") {
		alert(`Se ha generado su compra con éxito! 🛍️🛍️
		`);
		salir();
	} else {
		alert(`Se ha cancelado la operación solicitada.`);
		operacionSeleccionada();
	};
};

const cancelarCompra = () => {
	let confirmarCancelar = prompt(`Desea cancelar la operación?
	
	SI ✔️ - NO ❌
	`);
	confirmarCancelar = confirmarCancelar.toUpperCase();
	if (confirmarCancelar === "SI") {
		salir();
	} else {
		operacionSeleccionada();
	};
};


// FUNCIONES ADICIONALES

// MENU OPERACIONES

const operacionSeleccionada = () => {
	operacion = prompt(`Qué operación desea realizar?

[AGREGAR]	- ➕ agregar productos
[MOSTRAR]	- 📄 mostrar detalle de compra
[ELIMINAR]	- 🗑️ eliminar productos
[VACIAR]		- 🗑️ vaciar carrito
[CONFIRMAR] - ✔️ confirmar compra
[CANCELAR]	- 🚪 cancelar compra

`);
operacion = operacion.toUpperCase();
if (operacion === "AGREGAR") {
		agregarProducto();
	} else if (operacion === "MOSTRAR") {
		mostrarDetalle();
	} else if (operacion === "ELIMINAR") {
		eliminarProducto();
	} else if (operacion === "VACIAR") {
		vaciarCarrito();
	} else if (operacion === "CONFIRMAR") {
		confirmarCompra();
	} else if (operacion === "CANCELAR") {
		cancelarCompra();
	} else if (operacion === "") {
		alert("⚠️ No seleccionó una opción válida. ⚠️");
		operacionSeleccionada();
	};
};

// REPETIR OPERACION

const repetir = () => {
	repetirOperacion = prompt(`Desea repetir la operación?

SI ✔️ - NO ❌

`);
	repetirOperacion = repetirOperacion.toUpperCase();
	if (repetirOperacion === "SI") {
		if (operacion === "AGREGAR") {
			agregarProducto();
		} else if (operacion === "MOSTRAR") {
			mostrarDetalle();
		} else if (operacion === "ELIMINAR") {
			eliminarProducto();
		} else if (operacion === "VACIAR") {
			vaciarCarrito();
		} else if (operacion === "CONFIRMAR") {
			confirmarCompra();
		} else if (operacion === "CANCELAR") {
			cancelarCompra();
		} else if (operacion === "") {
			alert("⚠️ No seleccionó una opción válida. ⚠️");
			operacionSeleccionada();
		};
	} else {
			operacionSeleccionada();
	};
};

// SALIR

const salir = () => {
	alert(`Lo esperamos la próxima vez!
		
		Vuelva pronto! 👋👋
		`);
};

// MOSTRAR DETALLES

const contarTotalDeProductos = () => {
	let totalProductos = "";
	for (let i = 0; i < carritoDeCompras.length; i++) {
		totalProductos = totalProductos + carritoDeCompras[i][4];
		totalProductos = Number(totalProductos);
	};
	return totalProductos;
};
	
const subtotalDeCompra = () => {
	let subtotal = "";
	for (let i = 0; i < carritoDeCompras.length; i++) {
		subtotal = subtotal + (carritoDeCompras[i][2] * carritoDeCompras[i][4]);
		subtotal = Number(subtotal);		
	};
	return subtotal;
};
	
const totalDescuento = () => {
	let totalDescuentoCarrito = "";
	for (let i = 0; i < carritoDeCompras.length; i++) {
		if (carritoDeCompras[i][3] == true) {
			totalDescuentoCarrito = totalDescuentoCarrito + 
			((carritoDeCompras[i][2] * carritoDeCompras[i][4]) * porcentajeDescuento);
			totalDescuentoCarrito = Number(totalDescuentoCarrito);
		};
	};
	return totalDescuentoCarrito;
};
	
const mostrarProductos = () => {
	let productosEnCarrito = "";
	for (let i = 0; i < carritoDeCompras.length; i++) {
		productosEnCarrito =
		productosEnCarrito + `${carritoDeCompras[i][1]} - $ ${carritoDeCompras[i][2]} - ${carritoDeCompras[i][4]} unidades - Subtotal $ ${carritoDeCompras[i][2] * carritoDeCompras[i][4]}
	 `;
	};
	return productosEnCarrito;
};

const mostrarDetalleConDescuento = () => {

	alert(`DETALLE DE COMPRA 🛒
	
	${mostrarProductos()}
	
	🛍️ TOTAL DE PRODUCTOS: ${contarTotalDeProductos()} UNIDADES
	
	💳 SUBTOTAL DE COMPRA: $ ${subtotalDeCompra()}

	TOTAL DESCUENTO: $ ${totalDescuento()}

	TOTAL DE SU COMPRA: $ ${subtotalDeCompra() - totalDescuento()}
	
	`);

};

const mostrarDetalleSinDescuento = () => {
	alert(`DETALLE DE COMPRA 🛒
	
	${mostrarProductos()}
	
	🛍️ TOTAL DE PRODUCTOS: ${contarTotalDeProductos()} UNIDADES
	
	💳 SUBTOTAL DE COMPRA: $ ${subtotalDeCompra()}

	TOTAL DE SU COMPRA: $ ${subtotalDeCompra()}
	
	`);
};

const mostrarProductosConId = () => {
	let productosEnCarritoConId = "";
	for (let i = 0; i < carritoDeCompras.length; i++) {
		productosEnCarritoConId = 
		productosEnCarritoConId + `ID ${carritoDeCompras[i][0]} - ${carritoDeCompras[i][1]}
	 `;	
	};
	return productosEnCarritoConId;	
};

const ingresarCodigoDescuento = () => {
	let ingresarCodigo = prompt(`Por favor, ingrese su código de descuento ahora.
	
	CODIGO:
	`);
	
	if (ingresarCodigo === codigoDescuento) {
		alert("El código ingresado es CORRECTO.");
		mostrarDetalleConDescuento();
	} else {
		alert("El código ingresado es INCORRECTO.");
		ingresarCodigoDescuento();
	};
};


// START EJECUCION DE CODIGO

alert("Bienvenid@! 😊");
operacionSeleccionada();


// [AGREGAR]

while (operacionSeleccionada("AGREGAR")) {
	agregarProducto();	
};

// [MOSTRAR]

while (operacionSeleccionada("MOSTRAR")) {
	mostrarDetalle();	
};

// [ELIMINAR]

while (operacionSeleccionada("ELIMINAR")) {
	eliminarProducto();	
};

// [VACIAR]

while (operacionSeleccionada("VACIAR")) {
	vaciarCarrito();	
};

// [CONFIRMAR]

while (operacionSeleccionada("CONFIRMAR")) {
	confirmarCompra();
};

// [CANCELAR]

while (operacionSeleccionada("CANCELAR")) {
	cancelarCompra();	
};