const prices = document.querySelectorAll(".prices");

let total = 0;

prices.forEach(function(price) {
	total += parseFloat(price.textContent);
});

const table = document.querySelector("table");

const row = document.createElement("tr");

const cell = document.createElement("td");

cell.textContent = total;

row.appendChild(cell);

table.appendChild(row);
