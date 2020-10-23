const todo = "Change token"

const initial = {
    authorize:{
        userId:"",
        token:""
    }
}

export const Authorize = (state = initial, action) => {
    switch(action.type){
        case todo:
            return {authorize:{userId:action.id, token:`Bearer ${action.token}`}}
        default:
            return state
    }
}

export const actionAuthorize = (authorize) => {
    return (dispath) => {
        dispath({
            type:todo,
            id:authorize.id,
            token:authorize.token
        })
    }
}
