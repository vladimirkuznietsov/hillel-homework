function createMultiplicationTable(tSize) {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    for (let r = 1; r <= tSize; r++) {
        const tRow = document.createElement('tr');

        for (let c = 1; c <= tSize; c++) {
            const cell = document.createElement('td');

            cell.textContent = r * c;
            tRow.appendChild(cell);
            
            if (r == 1 && c >= 2) {cell.classList.add('first-column')};
            if (c == 1 && r >= 2) {cell.classList.add('first-column')};
        }

        tableBody.appendChild(tRow);
    }

    table.appendChild(tableBody);
    return table;

}

document.body.appendChild(createMultiplicationTable(10));