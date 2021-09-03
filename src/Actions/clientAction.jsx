

export const AddClient = (newClt) => {
    newClt.id =Math.random()
    return {
        type: 'ADD_CLIENT',
        payload : newClt
    }
    
}

export const DeletClt=(id)=>{
    return {
        type:'DELET_CLT',
        payload : id
    }
}
