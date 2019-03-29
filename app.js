const ui = new UI;

//  storage.getStorage().forEach(li => {
//     document.getElementById('item-list').innerHTML += li
// });

document.querySelector('.add-btn').addEventListener('click',ui.addItem);

document.getElementById('item-list').addEventListener('click',ui.editItem)

document.querySelector('.back-btn').addEventListener('click',(e)=>{
    ui.hideBtn(e);
    ui.clearinput();
});

document.querySelector('.delete-btn').addEventListener('click', ui.removeItem);

document.querySelector('.update-btn').addEventListener('click', ui.updateItem);


document.querySelector('.clear-btn').addEventListener("click",ui.clearAll)
