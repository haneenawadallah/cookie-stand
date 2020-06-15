
'use strict';

var operatingHours = ['6 am', '7 am', '8  am', '9 am', '10 m', '11 am', '12  pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//----------------------->random number generator

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//----------------------->function to render to hr in table

function makeTableHeader(){
  var table = document.getElementById('SalesReport');
  var tableHeader = document.createElement('tr');
  var tableStoreHeading = document.createElement('th');
  tableStoreHeading.textContent = 'Store';
  tableHeader.appendChild(tableStoreHeading);

  for (var i = 0; i < operatingHours.length; i++){
    var tableHourHeadings = document.createElement('th');
    tableHourHeadings.textContent = operatingHours[i];
    tableHeader.appendChild(tableHourHeadings);
  }
  var tableDailyTotalHeading = document.createElement('th');
  tableDailyTotalHeading.textContent = 'Daily Location Total';
  tableHeader.appendChild(tableDailyTotalHeading);

  table.appendChild(tableHeader);
}

//------------------------->a footer for table with daily total sales by hour

function makeTableFooter(){
  var table = document.getElementById('SalesReport');
  var tableFooter = document.createElement('tr');
  var tableHourlyTotalFooter = document.createElement('th');
  tableHourlyTotalFooter.textContent = 'Hourly totals';
  tableFooter.appendChild(tableHourlyTotalFooter);

  for (var i = 0; i < operatingHours.length; i++){
    var tableFooterTotals = document.createElement('td');
    tableFooterTotals.textContent = seattle.dailyHrSales[i] + tokyo.dailyHrSales[i] + dubai.dailyHrSales[i] + paris.dailyHrSales[i] + lima.dailyHrSales[i]; 
    tableFooter.appendChild(tableFooterTotals);
  }
  var tableFooterAllUpTotal = document.createElement('th');
  tableFooterAllUpTotal.textContent = seattle.dailyTotalSales + tokyo.dailyTotalSales + dubai.dailyTotalSales + paris.dailyTotalSales + lima.dailyTotalSales;
  tableFooter.appendChild(tableFooterAllUpTotal);

  table.appendChild(tableFooter);
}

//---------------------->create function to render store info to a table

function renderStoreInTable() {
  
  var table = document.getElementById('SalesReport'); // grandparent

  // new child element in the parent
  var tableRow = document.createElement('tr');

  var tableCell = document.createElement('th'); //new (grand) child element
  tableCell.textContent = this.location;
  tableRow.appendChild(tableCell); 

  for (var i = 0; i < this.dailyHrSales.length; i++) {

    tableCell = document.createElement('td');
    tableCell.textContent = this.dailyHrSales[i];
    tableRow.appendChild(tableCell); 
  }
  var tableCellTotal = document.createElement('th');
  tableCellTotal.textContent = this.dailyTotalSales;
  tableRow.appendChild(tableCellTotal);
  table.appendChild(tableRow); 
}

//---------------------> constructors

function Store(id, location, minNum, maxNum, avgCookiePerCust) {
  this.id = id;
  this.location = location ;
  this.minNum = minNum;
  this.maxNum = maxNum;
  this.avgCookiePerCust = avgCookiePerCust;
  this.dailyHrSales = [];
  this.dailyTotalSales = 0;
}
//---------------> hourlyCookieSales

Store.prototype.hourlyCookieSales = function () {
  for (var i = 0; i < operatingHours.length; i++) {
    var footTraffic = generateRandomNumber(this.minNum, this.maxNum);
    var hourlySalesTotal = Math.round(footTraffic * this.avgCookiePerCust);
    this.dailyHrSales.push(hourlySalesTotal);
    this.dailyTotalSales += hourlySalesTotal;
  }
};
//--------------> attach renderStoreInTable method to Store constructor
Store.prototype.renderStoreInTable = renderStoreInTable;

//-------------------> Creating stores from constructor
var seattle = new Store('seattle-table', 'Seattle', 23, 64, 6.3);
var tokyo = new Store('tokyo-table', 'Tokyo', 3, 24, 1.2);
var dubai = new Store('dubai-table', 'Dubai', 11, 38, 3.7);
var paris = new Store('paris-table', 'Paris', 20, 38, 2.3);
var lima = new Store('lima-table', 'Lima', 2, 16, 4.6);

// words
makeTableHeader();

seattle.hourlyCookieSales(); 
seattle.renderStoreInTable();

tokyo.hourlyCookieSales();
tokyo.renderStoreInTable();

dubai.hourlyCookieSales();
dubai.renderStoreInTable();

paris.hourlyCookieSales();
paris.renderStoreInTable();

lima.hourlyCookieSales();
lima.renderStoreInTable();

makeTableFooter();