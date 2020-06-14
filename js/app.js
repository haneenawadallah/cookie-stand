"use strict";
render: function(){
var parentElement = document.getElementById('kittenProfiles');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = this.name + '\'s age is ' + this.age + ' months old' ;
    article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for(var i = 0; i < this.fav.length; i++){
      var li = document.createElement('li');
      li.textContent = 'Frankie\'s fav is '+ this.fav[i];
      ul.appendChild(li);
    }

    var img = document.createElement('img');
    img.setAttribute('src', this.imgPath);
    img.setAttribute('alt', 'Picture of ' + this.name);
    article.appendChild(img);
    console.log(parentElement);
  }
};
frankie.getAge(3,12);
//console.log(frankie);
frankie.render();
