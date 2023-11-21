function c() {
    const productCh = document.getElementById("product"); /*сохраняем html объект в эту переменную, выбор продукта*/
    const kolvoT = document.getElementById("kolvo"); /*сохраняем html объект в эту переменную, кол-во товара, нужно нам*/
    const totalS = document.getElementById("total"); /*сохраняем html объект в эту переменную, итоговая сумма, результат*/
    const prices = { product1: 1450, product2: 900, product3: 550 };
    const selectedProduct = productCh.value; /*запоминаем значение выбранного товара*/
    const kolvoValue = kolvoT.value; /*запоминаем значение количества товара*/
    if (!isNaN(kolvoValue) && kolvoValue > 0) { /*условие проверяет введенное нами значение на число и >0*/
        const price = prices[selectedProduct]; /*Ставим цену выбранного товара */
        const kolvo = kolvoT.value;/*ставим количество выбранного товара */
        const total = price * kolvo; /*получаем сумму заказа */
        totalS.textContent = total + " ₽"; /*возвращает строку с полученной суммой заказа */
    } 
    else {
        totalS.textContent = "Ошибка ввода"; /*возвращает ошибку в ином случае */
    }
}
window.addEventListener("DOMContentLoaded", function (event) {
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", c);
});
