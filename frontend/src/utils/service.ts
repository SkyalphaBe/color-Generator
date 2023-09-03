type Method = "get" | "post" | "put" | "delete"

export const fetchData = async <T, >(url: string, method: Method = "get", body: object = []) => {
    try{
        const response = await fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: method === "get" ? undefined : JSON.stringify(body)
        })
        if (response.status < 200 || response.status >= 300){
            return Promise.reject(response.statusText)
        }
        return response.json() as Promise<T>
    }catch (e){
        return Promise.reject(e)
    }
}
