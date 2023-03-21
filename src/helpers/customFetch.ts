// export const originalFetch: any= window.fetch

import {serverUrl} from "./config";

export const customFetch = async (url:string, options:any) : Promise<any> => {
    const start = Date.now()
    try {
        console.log(options)
        const tokenHeaderOption = localStorage.getItem('accessToken') ? {'Authorization':`Bearer ${localStorage.getItem('accessToken')}`} : {}
        const response = await fetch(url, {...options,
            headers: {...options.headers,...tokenHeaderOption}
        })
        

        // // задержка ответа, если пришёл слишком быстро, указывается минимальное время запроса
        // await new Promise((resolve,reject) => {
        //     setTimeout(()=> {
        //         resolve(undefined)
        //     }, 1000 - (Date.now() - start))
        // })

       

        return response

    } catch (err) {
        console.log("customFetch Error")
        throw err
    }
}


