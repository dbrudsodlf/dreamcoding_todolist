export default function todoReducer(todos,action){
    switch(action.type){
        case 'added':{
            const {todo}=action;
            return{
                ...todos,
                todo
            };
        }

    //     case 'deleted':{
    //         return{
    //             ...todos,
    //             mentors:person.mentors.filter((mentor)=>mentor.name!==action.name),
    //         };
    //   }
            
      default:{
        throw Error(`알 수 없는 액션 타입이다: ${action.type} `)
      }
        
    }
}