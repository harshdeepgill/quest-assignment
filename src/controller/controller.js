import axios from "axios"

const fetcher = (url, str, dispatch) => {
    dispatch({type: str})
    return axios.get(url, {
        headers: {
            apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
            userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
        }
    })
}

export {fetcher}