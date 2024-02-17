
const data = {
    rank: "",
    points: "",
    level: "",
    name: "",
    imageUrl: "",
    isLoading: false,
    isError: false,
    isLoadingData: false,
    isErrorData: false,
    badgeData: [],

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
        case "REQUEST_DATA": return {
            ...state,
            isLoadingData: true,
            isErrorData:false
        }
        case "ERROR_DATA": return {
            ...state,
            isErrorData:true,
            isLoadingData:false
        }
        case "SUCCESS_DATA": return {
            ...state,
            badgeData: payload
        }

        default: return state
    }
}

export default reducer