
const data = {
    rank: "",
    points: "",
    level: "",
    name: "",
    imageUrl: "",
    isLoading: false,
    isError: false
}

const reducer = (state = data, {type, payload}) => {
    switch(type){
        case "REQUEST": return {
            ...state,
            isLoading: true,
            isError:false
        }
        case "ERROR": return {
            ...state,
            isLoading: false,
            isError: true
        }
        case "USER_INFO_SUCCESS": return {
            ...state,
            isLoading: false,
            isError: false,
            name: payload.name,
            imageUrl: payload.imageUrl
        }
        case "USER_DATA_SUCCESS": return {
            ...state,
            isLoading: false,
            isError: false,
            level: payload.tier,
            points: payload.data,
            rank: payload.xpThreshold
        }

        default: return state
    }
}

export default reducer