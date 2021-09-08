import { FaAcquisitionsIncorporated } from "react-icons/fa"

 
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
              case 'UPD_CLT':
                  return{
                      ...state, Client: state.Client.map((clt)=>{
                          if (clt.id === action.payload.id){
                              return action.payload
                          }
                         return clt
                      })
                  }
       
              
          default:
              return state

    }
    
}
//export default cltReducer;