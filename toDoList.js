//     Element.prototype.indexOf = function (el) {
//   var nodeList = this.childNodes;
//   var array = [].slice.call(nodeList, 0);
//   return array.indexOf(el);
// }
// let main=()=>{var list = document.getElementById("myList");
//  var item =document.getElementById('static');
// alert(item.parentNode.indexOf(item));

//       
// } the above is redundant code for advanced dom manipulation

function taskprogress() {
  var x = document.getElementById("completed");
  if (x.value) {
      x.parentElement.className='list-group-item completed';
  }else {
          return x.value;
  }
  // body...
}

 let pasteName=()=>{   
 //creates a task  
    var pclass = document.getElementById('myList');
    var r = `<input type="radio" id='completed' onclick='taskprogress()'>`;
    var str = document.getElementById('tname').value.toString();
    var val = document.createElement('li');
    var listitem= r+str;
         val.id = 'item'; 
         val.className ='list-group-item';
         val.innerHTML = listitem;            
         pclass.appendChild(val);
         
  };

let deleteItem = ()=>{
// Removes an element from the document.
 var list = document.getElementById("myList");
 var item =document.getElementById('number').value;
 var c = list.childElementCount;
 if (c<1) {
  alert('nothing to delete');
  
 }else if (item>c) {
  alert(`task ${item} doesn't exist`)
 }
 else if (item=='') {
  item=1;
  var i=item--
 list.removeChild(list.childNodes[i]);
 }else{

 var i=item--
 list.removeChild(list.childNodes[i]);}
 document.getElementById('number').value='';

}
txtChar = document.getElementById("number")
txtChar.addEventListener("keypress", isNumberKey, false);

//Attributes
txtChar.type = "number";
txtChar.min = 0;
txtChar.pattern = "\\d+";
txtChar.placeholder = "Only integer positive numbers";
txtChar.required = "required";
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 46 || charCode > 31 && (charCode < 48 || charCode > 57)){
        evt.preventDefault();
        return false;
    }
    return true;
};
console.log('working node');

            
