// En primer lugar Flor, felicitarte por un excelente trabajo. Este era un TP dificil, lo hiciste sola y sin 
// contar con mi presencia mientras lo hacias como las otras chicas. Tiene muchisimo merito.

// Tu uso de funciones es excelente. Tu codigo es clarisimo y esta re bien escrito. Felicitaciones. 

// No logré ver el problema al agregar unidades a un producto. Es decir, si agrego el producto con ID 1, 
// pido que sean dos unidades, pido mostrar los productos, veo que son 2. Vuelvo a agregar, pido que sean
// 2, y al mostrar ahora son 4. Pero por favor si hay algo que no estoy viendo, comentamelo. 

// Con respecto a que el codigo se ejecute nuevamente cuando pones confirmar o cancelar compra, el problema esta en tus while. 
// Lo que queremos decir es que mientras operacion === "AGREGAR" queremos agregar un producto
// tu codigo dice esto: 
// while (operacionSeleccionada("AGREGAR")) {
// Ahi no estas comparando el valor de "operacion", estas ejecutando la funcion operacionSeleccionada, 
// que nos lleva de nuevo al menu. 
// Se arregla cambiando tus while asi:


// while (operacion === "AGREGAR") {
// 	agregarProducto();	
// };
// // [MOSTRAR]
// while (operacion === "MOSTRAR") {
// 	mostrarDetalle();	
// };
// // [ELIMINAR]
// while (operacion === "ELIMINAR") {
// 	eliminarProducto();	
// };
// // [VACIAR]
// while (operacion === "VACIAR") {
// 	vaciarCarrito();	
// };
// // [CONFIRMAR]
// while (operacion === "CONFIRMAR") {
// 	confirmarCompra();
// };
// // [CANCELAR]
// while (operacion === "CANCELAR") {
// 	cancelarCompra();	
// };


// Comentarios generales, son detalles pero suman: cuando una variable no va a cambiar de valor, es buena 
// practica declararla como CONST, simplemente para senalar a los demas que no tiene que cambiar. Por ejemplo, 
// "porcentajeDescuento" o "codigoDescuento" deberian ser const. Cuesta acostumbrarse a usar const, sobre todo
// porque a veces si son variables que necesitamos cambiar y no nos damos cuenta hasta que javascript nos tira error. 
// Pero mi consejo es que te acostumbres a usar const, y en todo caso lo cambies a let si tenes un error. Es muy frustrante
// pero es buena practica para que despues salga solo. 

// Los console.log son RE utiles para desarrollar, pero deberian borrarse antes de entregar un trabajo. Esto es 
// especialmente importante si vas a hacer un ejercicio en una entrevista laboral por ejemplo. 

// Te dejo algunos comentarios a lo largo del codigo. 



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

	// sort nos ordena un array, pero en este caso, al ser un array de arrays, no tiene 
	// ninguna consecuencia. Se deberia borrar esa linea. 
	carritoDeCompras.sort();
	console.log(carritoDeCompras);

	// Este mensaje esta "hardcodeado", es decir, escribiste vos los distintos productos en 
	// lugar de automatizar la tarea con javascript. Seria mejor hacerlo con un for, ya que de
	// esa manera, si aumenta la cantidad de productos disponibles, no tenemos que actualizar este codigo. 
	// Como hacerlo? Con una variable acumuladora y un for, que nos vaya haciendo una linea
	// por cada producto del carrito
	// por ejemplo lo que haces en la funcion mostrarProductos()
	
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
	
	// este codigo se haria mas facil de leer si pusieramos en una variable el mensaje de error. 
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

	// Si el if anterior es para cuando el carrito esta vacio y este for para cuando esta lleno, 
	// quiza sirva poner un "else" aca, aunque no deberia cambiar el comportamiento de tu codigo. 
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
	
	// me encanta esta validacion, es RE clara y util. 
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
		
		// excelente este codigo
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
