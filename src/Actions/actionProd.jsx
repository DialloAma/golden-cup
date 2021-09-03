export const AddProduct=(newprod)=>{
    newprod.id=Math.random()
    return{
        type :'ADD_PROD',
        payload : newprod
        
    }

}
export const DeletProd=(id)=>{
return{
    type:'DELET_PROD',
    payload: id
}
}