

export const AddClient = (newClt) => {
    newClt.id =Math.random().toString()
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
export const UpdateClt=(update)=>{
     return{
       type:'UPD_CLT',
       payload: update
    }
}
