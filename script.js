var rows = 0;
var max_id = 0

function createTable() {
    if (!document.getElementById("table")){
        var container = document.getElementById("table-container");
        var table = document.createElement('table');

        table.id = "table";
        table.innerHTML = "<tr><th>id</th><th>Значение</th></tr>"

        container.appendChild(table);
        document.getElementById("create-button").disabled = true;
        document.getElementById("add-row-button").disabled = false;
        document.getElementById("delete-row-button").disabled = false;
    } else
        alert("Таблица уже создана");
}

function addRow() {
    var table = document.getElementById('table');
    var input = document.getElementById('input');


    var newRow = table.insertRow(-1);
    newRow.insertCell(0).innerText = ++max_id;
    newRow.insertCell(1).innerText = input.value;
    input.value = "";
    rows++;

}

function isNumber( str ){
    const pattern = /[0-9]$/;
    return pattern.test(str)
}


function deleteRow() {
    var input = document.getElementById('input');
    if (rows) {
        var table = document.getElementById('table');
        var index = -1
        if (input.value) {
            if (isNumber(input.value))
                var id = +input.value;
            else {
                alert("Необходимо указать натуральное число");
                return;
    }
            for (var i = 0, row; row = table.rows[i]; i++)
                if (row.cells[0].innerText == id){
                    index = i;
                    break;
                }
            if (index == -1){
                alert('Строки с таким id не существует');
                return;
            }
        }
        table.deleteRow(index);
        rows--;
        input.value = "";
    } else
        alert("Таблица пуста");
}