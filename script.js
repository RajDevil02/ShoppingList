function allOnLoad(){
	getShoppingItems();
}

function getShoppingItems(){
	var url = "https://script.google.com/macros/s/AKfycbwtpFjDCDEmBTAduBu2_WBDqqLBCcmU7muqkERXK56YT1_hS8Hu3WtqIB_L3_MpNGylYw/exec";
	
	fetch(url)
	.then(d => d.json())
	.then(d => {
		tableDisplay (d);
		//document.getElementById("app").innerHTML = kk;
		//document.getElementById("app1").value = d;
	});
}

function tableDisplay(items){
  var parent = document.getElementById("itemSelection");
 
  //var createButton = document.createElement('Button');
  //var buttonName = document.createTextNode("Return");
  //createButton.appendChild(buttonName);
  //createButton.innerHTML = "Return"
    
  var table = document.createElement('table'), tr, td, row, cell,head;
  var thr = document.createElement('tr');
  var hello = ['Item_Id','ItemName','Quantity','Select'];
  for (row = 0; row < hello.length; row++) {
      th = document.createElement('th');
      thr.appendChild(th);
      th.innerHTML = hello[row];
    }
    table.appendChild(thr);

  for (row = 0; row < items.length; row++) {
      tr = document.createElement('tr');
      for (cell = 0; cell < items[row].length; cell++) {
          td = document.createElement('td');
          tr.appendChild(td);
          td.innerHTML = items[row][cell];
    }
    var createTextBox = document.createElement('input');
    createTextBox.type = 'text';
    createTextBox.setAttribute('class','quantityText')
    td = document.createElement('td');
    td.appendChild(createTextBox);
    tr.appendChild(td);

    var createCheckbox = document.createElement('input');
    createCheckbox.type = "checkbox"
    

    td = document.createElement('td');
    td.appendChild(createCheckbox);
    tr.appendChild(td);
    
    table.appendChild(tr);
    table.setAttribute("id","itemCheckList")
}

//parent.replaceChild(table,replacePara);
	document.getElementById('itemSelection').append(table);
}

function createList(){
	 var checkboxes = document.querySelectorAll("table tr td:last-child input");
	 var count = 0;
	 var currentList = [];
	for (var i=0; i<checkboxes.length; i++){
		if(checkboxes[i].checked==true){
			count++
			var itemSelected = checkboxes[i].parentNode.parentNode.querySelector("td:nth-child(2)").innerText;
			var itemQuantity = checkboxes[i].parentNode.parentNode.querySelector("td:nth-child(3) input").value;
			var obj = [count, itemSelected, itemQuantity]
			currentList.push(obj)
		}
	}

	//document.getElementById('createdList').innerHTML = currentList;
	selectedTableDisplay(currentList)


}

function selectedTableDisplay(items){
  var parent = document.getElementById("createdListSection")
  var newList = document.getElementById('createdList');
 
  //var createButton = document.createElement('Button');
  //var buttonName = document.createTextNode("Return");
  //createButton.appendChild(buttonName);
  //createButton.innerHTML = "Return"
    
  var table = document.createElement('table'), tr, td, row, cell,head;
  var thr = document.createElement('tr');
  var hello = ['Item_Id','ItemName','Quantity'];
  for (row = 0; row < hello.length; row++) {
      th = document.createElement('th');
      thr.appendChild(th);
      th.innerHTML = hello[row];
    }
    table.appendChild(thr);

  for (row = 0; row < items.length; row++) {
      tr = document.createElement('tr');
      for (cell = 0; cell < items[row].length; cell++) {
          td = document.createElement('td');
          tr.appendChild(td);
          td.innerHTML = items[row][cell];
    }
    /*var createCheckbox = document.createElement('input');
    createCheckbox.type = "checkbox"
    

    td = document.createElement('td');
    td.appendChild(createCheckbox);
    tr.appendChild(td);*/
    
    table.appendChild(tr);
    table.setAttribute("id","createdList")
}

parent.replaceChild(table,newList);
	
	
}