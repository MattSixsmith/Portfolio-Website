var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth(); 
var year = currentDate.getFullYear();

document.write(`${date}/${month+1}/${year}`);