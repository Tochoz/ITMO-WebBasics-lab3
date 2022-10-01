var rows = 0;

function createTable() {
    if (!document.getElementById("table")){
        var container = document.getElementById("table-container");
        var table = document.createElement('table');

        table.id = "table";
        table.innerHTML = "<tr><th>id</th><th>Значение</th></tr>"

        container.appendChild(table);
        // addRow();
        document.getElementById("create-button").disabled = true;
        document.getElementById("add-row-button").disabled = false;
        document.getElementById("delete-row-button").disabled = false;
    } else
        alert("Ты хуила, есть тут таблица уже");
}

function addRow() {
    var table = document.getElementById('table');
    var input = document.getElementById('input');


    var newRow = table.insertRow(-1);
    newRow.insertCell(0).innerText = ++rows;
    newRow.insertCell(1).innerText = input.value;
    input.value = "";



}

function deleteRow() {
    if (rows)
        var table = document.getElementById('table');
        table.deleteRow(-1);
        rows--;
}