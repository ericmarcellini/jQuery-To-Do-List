
function newItem(){

    //javascript to jQuery
    //1. Adding a new item to the list of items: 
        let li = $('<li></li>'); //fixed
        let inputValue = $('#input').val();//fixed
        li.append(inputValue); //fixed
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
        $('#list').append(li); //fixed
       }
    
     //2. Crossing out an item from the list of items:
        li.on("click", function() { //fixed
            li.addClass("strike"); //fixed
            }); //fixed
    
            li.on("dblclick", function crossOut() { //fixed
                li.toggleClass("strike");   //fixed
            });
    
      //3(i). Adding the delete button "X": 
      let crossOutButton = $('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);
      
         crossOutButton.on("click", deleteListItem);
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){//fixed
            li.addClass("delete"); //fixed
         }
     // 4. Reordering the items: 
       $('#list').sortable(); //fixed
    
    }
    
     
 