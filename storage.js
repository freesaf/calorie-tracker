function Storage (){

}
let id=0;
let item = [];
Storage.prototype = {
    getStorage : function(){
       return localStorage.getItem(item)
    },


    setStorage : function(li){
            localStorage.setItem(`li`,item.push(li))
    }
}