

function RandomNumber(min, max) {
    var x = Math.random();
    return Math.floor(x * (max - min + 1)) + min;
}

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

///FIRST CITY

var seattle = {
    location: 'Seattle',
    maxHrCust: 65,
    minHrCust: 23,
    avgCookPerCust: 6.3,
    randomCustperHr: RandomNumber(this.minHrCust, this.maxHrCust), total: 0,

    renderedArray: function () {

        var parentElement = document.getElementById('SalesReport');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for (var i = 0; i <= times.length; i++) {

            var li = document.createElement('li');
            this.randomCustperHr = RandomNumber(this.minHrCust, this.maxHrCust);
            this.total = this.total + this.randomCustperHr * Math.floor(this.avgCookPerCust);
            li.textContent = times[i] + ' :' + this.randomCustperHr * Math.floor(this.avgCookPerCust) + ' Cookies';

            ul.appendChild(li);
        }
        li.textContent = 'total : ' + this.total + ' Cookies';
    }


};
seattle.renderedArray();

///SECOND CITY

var tokyo = {
    location: 'Tokyo',
    maxHrCust: 24,
    minHrCust: 3,
    avgCookPerCust: 1.2,
    randomCustperHr: RandomNumber(this.minHrCust, this.maxHrCust), total: 0,

    renderedArray: function () {

        var parentElement = document.getElementById('SalesReport');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for (var i = 0; i <= times.length; i++) {

            var li = document.createElement('li');
            this.randomCustperHr = RandomNumber(this.minHrCust, this.maxHrCust);
            this.total = this.total + this.randomCustperHr * Math.floor(this.avgCookPerCust);
            li.textContent = times[i] + ' :' + this.randomCustperHr * Math.floor(this.avgCookPerCust) + ' Cookies';

            ul.appendChild(li);
        }
        li.textContent = 'total : ' + this.total + ' Cookies';
    }


};
tokyo.renderedArray();

///THIRD CITY

var dubai = {
    location: 'Dubai',
    maxHrCust: 38,
    minHrCust: 11,
    avgCookPerCust: 3.7,
    randomCustperHr: RandomNumber(this.minHrCust, this.maxHrCust), total: 0,

    renderedArray: function () {

        var parentElement = document.getElementById('SalesReport');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for (var i = 0; i <= times.length; i++) {

            var li = document.createElement('li');
            this.randomCustperHr = RandomNumber(this.minHrCust, this.maxHrCust);
            this.total = this.total + this.randomCustperHr * Math.floor(this.avgCookPerCust);
            li.textContent = times[i] + ' :' + this.randomCustperHr * Math.floor(this.avgCookPerCust) + ' Cookies';

            ul.appendChild(li);
        }
        li.textContent = 'total : ' + this.total + ' Cookies';
    }


};
//console.table(dubai);
dubai.renderedArray();

///FOURTH CITY

var paris = {
    location: 'Paris',
    maxHrCust: 38,
    minHrCust: 20,
    avgCookPerCust: 2.3,
    randomCustperHr: RandomNumber(this.minHrCust, this.maxHrCust), total: 0,

    renderedArray: function () {

        var parentElement = document.getElementById('SalesReport');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for (var i = 0; i <= times.length; i++) {

            var li = document.createElement('li');
            this.randomCustperHr = RandomNumber(this.minHrCust, this.maxHrCust);
            this.total = this.total + this.randomCustperHr * Math.floor(this.avgCookPerCust);
            li.textContent = times[i] + ' :' + this.randomCustperHr * Math.floor(this.avgCookPerCust) + ' Cookies';

            ul.appendChild(li);
        }
        li.textContent = 'total : ' + this.total + ' Cookies';
    }


};
//console.table(paris);
paris.renderedArray();

///FIFTH CITY

var lima = {
    location: 'Lima',
    maxHrCust: 16,
    minHrCust: 2,
    avgCookPerCust: 4.6,
    randomCustperHr: RandomNumber(this.minHrCust, this.maxHrCust), total: 0,

    renderedArray: function () {

        var parentElement = document.getElementById('SalesReport');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for (var i = 0; i <= times.length; i++) {

            var li = document.createElement('li');
            this.randomCustperHr = RandomNumber(this.minHrCust, this.maxHrCust);
            this.total = this.total + this.randomCustperHr * Math.floor(this.avgCookPerCust);
            li.textContent = times[i] + ' :' + this.randomCustperHr * Math.floor(this.avgCookPerCust) + ' Cookies';

            ul.appendChild(li);
        }
        li.textContent = 'total : ' + this.total + ' Cookies';
    }


};
//console.table(lima);
lima.renderedArray();

