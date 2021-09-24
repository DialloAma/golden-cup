export const AddProduct=(newprod)=>{
    newprod.id=Math.random().toString()
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
export const UpdProd=(prodt)=>{
    return{
       type:'UPDATE_PROD',
       payload: prodt
    }
}