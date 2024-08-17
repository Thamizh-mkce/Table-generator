function generateTable() {
    const number = document.getElementById("numberInput").value;
    const table = document.getElementById("multiplesTable");

    // Clear the table before generating a new one
    table.innerHTML = "";

    if (number === "") {
        alert("Please enter a number.");
        return;
    }

    // Generate table headers
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);
    headerCell1.innerHTML = "Number";
    headerCell2.innerHTML = "Multiple";

    // Generate the first 10 multiples of the given number
    for (let i = 1; i <= 10; i++) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = number;
        cell2.innerHTML = number * i;
    }
}
