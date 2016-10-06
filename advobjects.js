// Implement the function calculateSalesTax that returns the results below.


var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
// for (var prov in salesTaxRates) {
//   var provTaxRate = salesTaxRates[prov]
//   console.log(provTaxRate)
// }

// salesTaxRates["BC"]


var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function getTotalSalesForCompany(sales)
{
  //we need to sum up sales
  var total = 0;
  for(var i = 0; i < sales.length; i++)
  {
    var sale = sales[i];
    total = total + sale;
  }
  return total;
}

var companyDataWithTotalSales = [];
for(var i = 0; i < companySalesData.length; i++)
{
  var company = companySalesData[i];
  var totalSales = getTotalSalesForCompany(company.sales);
  var rateForProvice = salesTaxRates[company.province] || 0.0;
  var totalTaxes = totalSales * rateForProvice;

  var something = {
    name: company.name,
    province: company.province,
    totalSales: totalSales,
    totalTaxes: totalTaxes
  };

  companyDataWithTotalSales.push(something);
}

var finalResult = {};

for(var i = 0; i < companyDataWithTotalSales.length; i++)
{
  var company = companyDataWithTotalSales[i];
  // is the company in finalResult
  if(!finalResult[company.name])
  {
    // current company is not in final result
    finalResult[company.name] = {
      totalSales: 0,
      totalTaxes: 0
    };
  }
  else
  {

  }
  // By here we know that finalResult[company.name] is set to something

  finalResult[company.name].totalSales += company.totalSales;
  finalResult[company.name].totalTaxes += company.totalTaxes;
}

console.log(finalResult);





