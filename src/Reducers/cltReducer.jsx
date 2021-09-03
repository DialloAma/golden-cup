 
/*const initialState={
    Client:[{
        id: "",
            name: "diallo",
            phone: "621",
            address: "labe",
            solde: '0',
    }]

 }*/
 export const cltReducer=(state={Client:[]}, action)=>{
    switch(action.type){
        case 'ADD_CLIENT':
        return{
            ...state, Client: [...state.Client, action.payload]
          }
          case 'DELET_CLT':
              return{
                  ...state, Client: state.Client.filter((clt)=>clt.id !== action.payload)
              }
       
              
          default:
              return state

    }
    
}
//export default cltReducer;