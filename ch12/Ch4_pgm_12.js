var sale1 = { price: 140, taxRate: 15 };
var sale2 = { price: 40, taxRate: 10 };
var sale3 = { price: 120, taxRate: 20 };
var sale4 = { price: 200, taxRate: 18 }; // Adding a fourth sale

var calculateAndDisplaySale = function(sale) {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;

    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
    console.log("------------------------------");
};

calculateAndDisplaySale(sale1);
calculateAndDisplaySale(sale2);
calculateAndDisplaySale(sale3);
calculateAndDisplaySale(sale4); // Displaying the fourth sale

