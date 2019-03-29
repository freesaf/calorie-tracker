const storage = new Storage;

function UI (){

}
let totalCal = 0;
let target;
UI.prototype = {
    addItem: (e)=>{
        let itemName = document.getElementById('item-name').value;
        let itemCalorie = document.getElementById('item-calorie').value;
        const itemList = document.getElementById('item-list');

        const li = document.createElement('li');

        li.innerHTML = `
        <strong>${itemName}:</strong> <em>${itemCalorie} calories </em> <a href="#" class="secondary-content"><i class="fa fa-pencil"></i></a> 
        `

        itemList.appendChild(li);
        totalCal += parseInt(itemCalorie);
        document.querySelector('.total-calories').innerText = totalCal;
        storage.setStorage(li.innerHTML)
        ui.clearinput();

        
        e.preventDefault();
    },

    updateItem : (e)=>{
        let itemName = document.getElementById('item-name').value;
        let oldVal = target.lastChild.previousSibling.previousElementSibling.innerText.slice(0,-9);
        let newVal = document.getElementById('item-calorie').value;

        totalCal = parseInt(totalCal)+parseInt(newVal)-parseInt(oldVal);
        document.querySelector('.total-calories').innerText = totalCal;

        target.innerHTML = `
        <strong>${itemName}:</strong> <em>${newVal} calories </em> <a href="#" class="secondary-content"><i class="fa fa-pencil"></i></a> 
        `
        ui.clearinput();
        ui.hideBtn(e);

        e.preventDefault();
    },

    removeItem : (e)=>{
        let itemCalorie = document.getElementById('item-calorie').value;

         
        document.querySelector('.total-calories').innerText = parseInt(totalCal) - parseInt(itemCalorie);
        ui.hideBtn(e);
        ui.clearinput();
        target.remove()
        totalCal -= parseInt(itemCalorie);

        console.log(totalCal);
        
       
        e.preventDefault();
    },

    showBtn : () =>{
        document.querySelector('.add-btn').style.display = 'none'
        document.querySelectorAll('.editMode').forEach((btn)=>{
            btn.style.display = 'inline-block';
        })
    },
    
    hideBtn : (e) =>{
        document.querySelector('.add-btn').style.display = 'inline-block'
        document.querySelectorAll('.editMode').forEach((btn)=>{
            btn.style.display = 'none';
        })
        e.preventDefault();
    },

    editItem : (e)=>{
        let itmCal = e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.innerText.slice(0,-9);
        document.getElementById('item-name').value = e.target.parentElement.parentElement.firstChild.nextSibling.innerText.slice(0,-1)

        document.getElementById('item-calorie').value = parseInt(itmCal);
        ui.showBtn();
        target = e.target.parentElement.parentElement;
        e.preventDefault(); 
    },

    clearinput : ()=>{
        document.getElementById('item-name').value = '';
        document.getElementById('item-calorie').value = '';
    },

    clearAll : (e)=>{
        ui.clearinput();
        document.getElementById('item-list').innerHTML = '';
        document.querySelector('.total-calories').innerText = parseInt(0);
        totalCal = 0
        e.preventDefault();
    }
}