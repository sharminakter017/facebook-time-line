
const setalert = (msg,type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss = "alert" class="btn-close"></button></p>`

}


//read-ls-data

const readLsData = (key) => {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));

    }else{
        return false;
    }
}






//create ls data ===============================>


const createLsData = (key,value) => {
    let data = [];
    if(localStorage.getItem(key)){
     data = JSON.parse(localStorage.getItem(key));
    }

    data.push(value);
    let setlsdata = JSON.stringify(data);

    localStorage.setItem(key,setlsdata)
    
}



// Update ls data 

const updateLsData = (key,array) => {

    localStorage.setItem(key,JSON.stringify(array))
}