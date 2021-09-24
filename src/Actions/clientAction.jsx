

export const AddClient = (newClt) => {
    newClt.id =Math.random().toString()
    return(dispatch,state,{getFirestore})=>{
         getFirestore().collection('Client').add(newClt).then((doc)=>{
              dispatch(
                {
                    type: 'ADD_CLIENT',
                    payload : newClt
                }
              )
         })
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
