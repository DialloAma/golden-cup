
/*const initialState={
    Product:[{
        id:"",
        nameprod:"coca",
        quant:"20",
        expi:"10/02/2001"
    }]
  */
export const prodReducer=(state={Product:[]},action)=>{
    switch(action.type){
        case 'ADD_PROD':
            return{
                ...state, Product: [...state.Product, action.payload]
            }
        case 'DELET_PROD':
            return{
                ...state, Product: state.Product.filter((prod)=> prod.id !== action.payload)
            }
        case 'UPD_PROD':
            return{
                ...state, Product: state.Product.map((prod)=>{
                if(prod.id === action.payload.id){
                    return action.payload
                }
                return prod
                })
            }    

            default:
                return state
    }

}
