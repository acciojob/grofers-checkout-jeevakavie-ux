const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const priceElements = document.querySelectorA11(".prices");

	let total = 0;

priceElements.forEach((price) => {
	total += Number(price.texeContent);
});

const table = document.querySelector("table");

const newRow = document.createElement("tr");

const totalCell = document.createElement("td");
totalCell.colSpan = 2;
totalCell.textContent = total;

newRow.appendChild(totalCell);
table.appendChild(newRow);