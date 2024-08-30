function mostrarDatosP(){
    let request = sendRequest('productos', 'GET', '');
    let table = document.getElementById('productos-table');
    table.innerHTML= "";
    request.onload = function(){
        let data = request.response;
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <td>${element._id}</th>
            <td>${element.nombre}</td>
            <td>${element.identificador}</td>
            <td>${element.autor}</td>
            <td>${element.editorial}</td>
            <td>${element.cantidad}</td>
            <td>${element.fecha_ingreso}</td>
            <td>
                <button type:"button" class:".boton" onclick='window.location = "../form_productos.html?id${element._id}"' >🖊</button>
                <button type:"button" class:".boton" onclick= 'deleteProductos("${element._id}")' >🗑</button>
            </td>

            </tr>            
            `
        });

    }
    request.onerror = function(){
        table.innerHTML = `
            <tr>
                <td colspan="">Error al traer los datos</td>
            </tr>
        `
    }

}

function deleteProductos(_id){
    let request = sendRequest('productos/'+_id, 'DELETE', '');
    request.onload = function(){
        mostrarDatosP();
    }
}

function guardarProductos(){
    let nomb = document.getElementById('nombre-n').value;
    let ide = document.getElementById('identificador-i').value;
    let aut = document.getElementById('autor-a').value;
    let edi = document.getElementById('editorial-e').value;
    let can = document.getElementById('cantidad-c').value;
  
    let data = {'nombre':nomb, 'identificador': ide, 'autor': aut,'editorial': edi, 'cantidad': can};

    let request = sendRequest('productos/', 'POST', data);
    request.onload = function(){
        window.location= 'productos.html';
    }
    request.onerror = function(){
        alert('Error al guardar los datos')
    }
}

