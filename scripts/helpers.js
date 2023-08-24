//instead of typing getElementById every time I have this helper function
export const $ = id => document.getElementById( id );

export const random = n => Math.floor(Math.random() * n);

export const removeContent = (id) =>{
    $(id).textContent = '';
}

export const removeAllContent = () =>{
    removeContent('header');
    removeContent('interface');
    removeContent('actions');
}

export const isEmptyObject = (obj) =>{
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const isNotEmptyObject = (obj) =>{
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return true;
    }
    return false;
}