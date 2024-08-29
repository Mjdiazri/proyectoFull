function mostrarDatos(){
    let request = sendRequest('clientes', 'GET', '');
    let table = document.getElementById('clientes-table');
    table.innerHTML= "";
    request.onload = function(){
        let data = request.response;
        console.log(data);
    }
}
