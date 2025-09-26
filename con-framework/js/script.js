export function buildTableHeaders(headers) {
    return headers.map(h => `<th>${h}</th>`).join("");
}

// Convierte un array de arrays en <tr><td>
export function buildTableRows(rows) {
    return rows.map(row =>
        `<tr>${row.map(col => `<td>${col}</td>`).join("")}</tr>`
    ).join("");
}
