
//============================ Start Table (1) ============================
var addProductFormEl 	= document.getElementById('addProductForm'),
  productNameInputEl 	= document.getElementById('productName'),
  productPriceInputEl 	= document.getElementById('productPrice'),
  productsEl 			= document.getElementById('products'),
  productCategories 	= document.getElementById('productCategories'),
  productDate			= document.getElementById('productDate');

//============ Counter =============

var counter = (function() {
	"use strict";
  var count = 7;

  return {
    increment: function() {
      return count++;
    }
  };
})();

//============ Product Class =============
function Product(name, price, categories, date) {
	"use strict";
	
  this.name = name;
  this.price = price;
  this.count = counter.increment();
  this.categories = categories;
  this.date = date;
}

//============  Add Product as Card =============

function UI() {}


UI.prototype.addProduct = function(name, price, categories, date) {
	"use strict";
  var product = new Product(name, price, categories, date),
    html = document.createElement('div');

  html.id = product.id ;
  html.className = 'col-lg-4 col-md-6 item';
  html.innerHTML =
	 ' <div class="card my-2 p-2 " > '    +
    '<div class="card-title">Item &#8470; ' +
    product.count +
    '</br> ' +
	'<img src="img/avatar.jpg" alt=""/>' +
    '</div>' +
    '<div class="form-group">' +
    '<span>Name:</span><input type="text" class="form-control1" value="' +
    product.name +
    '">' +
    '</div>' +
    '<div class="form-group">' +
    '<span>Price:</span><input type="number" class="form-control1" value="' +  
    product.price +
    '">' +
    '</div>' +
	'<div class="form-group">' +
    '<span>Category:</span><input type="text" class="form-control1" value="' +
    product.categories +
    '">' +
    '</div>' +
	'<div class="form-group">' +
    '<span>Date:</span><input type="text" class="form-control1" value="' +
    product.date +
    '">' +
    '</div>' +
    '<button class="btn btn-danger" data-id="' +
    product.id +
    '">Delete &#8470; ' +
    product.count +
    '</button>'  +
    '</div>';

  productsEl.insertBefore(html, productsEl.childNodes[0]);
};


//============  Clear inputs After Submit =============


UI.prototype.clearFormFields = function() {
	"use strict";
  productNameInputEl.value = '';
  productPriceInputEl.value = '';
  productCategories.value = '';
  productDate.value = '';
  productNameInputEl.focus();
};


//============  Put Data in new object =============

addProductFormEl.addEventListener('submit', function(e) {
	"use strict";
  e.preventDefault();

  var name 		 = productNameInputEl.value,
    price		 = productPriceInputEl.value,
	categories	 = productCategories.value,
	date 	     = productDate.value;
	
  var ui = new UI();
  ui.addProduct(name, price, categories, date);
  ui.clearFormFields();
});

//============  Delete Product =============

UI.prototype.deleteProduct = function(id) {
	"use strict";
	document.getElementById(id).remove();
};

//============  Confirmation Alert (Delete)  & SKU =============

productsEl.addEventListener('click', function(e) {
	"use strict";
  e.preventDefault();
  if (e.target.className === 'btn btn-danger') {
	  
	  var item = document.getElementsByClassName('item');
if (item.length == 1)
    {
	alert("You Can't Delete All Items");
	}
else if (item.length > 1)
       {
		
		if(confirm("Do You Want To Delete This Item ?"))
		{
    			var ui = new UI();
		  		ui.deleteProduct(e.target.getAttribute('data-id'));
		}
	}
  }
});



//============================ End Table (1) ============================



///============================ Start Table (2) ============================


var addProductFormT 	= document.getElementById('addProductForm1'),
  productNameInputT 	= document.getElementById('productName1'),
  productPriceInputT 	= document.getElementById('productPrice1'),
  productCategoriesT 	= document.getElementById('productCategories1'),
  productDateT			= document.getElementById('productDate1');


//============ Product Class =============

function Product1(name, price, categories, date) {
	"use strict";
	
  this.name = name;
  this.price = price;
  this.categories = categories;
  this.date = date;
}

//============ Add Product as Row =============

function UI1() {}

UI1.prototype.addProduct = function(name, price, categories, date) {
	"use strict";
  var product = new Product1(name, price, categories, date);
   
  $('#table').find('#products1').append( '<tr class="item1">' +
    '<td> <img src="img/avatar.jpg" alt=""/> </td>' +
    '<td> <input class="edit" type="button" value="' +
    product.name + '"></td>' +
	'<td> <input class="edit" type="button" value="' +
    product.categories + '">' +
    '</td>' +
    '<td> <input class="edit" type="button" value="' +  
    product.price + '">' +
    '</td>' +
	'<td><input class="edit" type="button" value="' +
    product.date +  '">' +
    '</td>'  +
	'<td> <i class="fa fa-trash Dlr"></i></td>' +
	'<tr>');
};

//============ Clear inputs after Submit =============

UI1.prototype.clearFormFields = function() {
	"use strict";
  productNameInputT.value = '';
  productPriceInputT.value = '';
  productCategoriesT.value = '';
  productDateT.value = '';
  productNameInputT.focus();
};


//============ Put Data in New Object =============

addProductFormT.addEventListener('submit', function(e) {
	"use strict";
  e.preventDefault();

  var name 		 = productNameInputT.value,
    price		 = productPriceInputT.value,
	categories	 = productCategoriesT.value,
	  date 	     = productDateT.value;
	

  var ui1 = new UI1();
  ui1.addProduct(name, price, categories, date);
  ui1.clearFormFields();
});

//============ Delete Product With Confirmation & SKU =============

$('table tbody').on('click','.Dlr', function(){
	"use strict";
	
	var item1 = document.getElementsByClassName("item1");
	
	if (item1.length == 1)
    {
	alert("You Can't Delete All Items");
	}
else if (item1.length > 1)
       {
		
		if(confirm("Do You Want To Delete This Item ?"))
		{
    			$(this).closest('tr').remove();
		}
	}
	
});

//============ Edit Product =============

$('table tbody').on('click','.edit', function(){
	"use strict";
	if($(this).attr('type') == 'button')
	{
		$(this).attr('type', 'text') ;
		$(this).css({"border":"1px solid #ced4da", "border-radius":"0.25rem"}) ;
	}else {
		
		$(this).attr('type', 'button');
		$(this).css({"border":"none", "border-radius":"none"}) ;
	}
		
	
});

///============================ End Table (2) ============================

