'use strict'

//ДЗ 27. table

let tableWrapper = document.getElementsByClassName('table-wrapper')[0];

let tableContainer = `<table>`;
let cell = 0;
let i;
for (i = 1; i <= 10; i++) {
   tableContainer += `<tr>`;
   for(let k = 1; k <= 10; k++) {
       cell++;
       if (k < 10) {
           tableContainer += `<td>${cell}</td>`;
       }
       if (k === 10) {
           tableContainer += `<td>${cell}</td>` + `</tr>`;
       }
   }

}
tableContainer += `</table>`;


tableWrapper.innerHTML = tableContainer;