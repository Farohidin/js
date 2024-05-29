let son = prompt("Son kiriting va biz uni toq yoki juft ligini bilib beraniz");

while (isNaN(son) || son / 1 === 0) {
    son = prompt("Bu son emas iltimos son kiriting");
}

if (son % 2 === 0) {
    alert("Sizning soningiz  juft son");
} else if (son % 2 === 1) {
    alert("Sizning soningiz toq son");
}
