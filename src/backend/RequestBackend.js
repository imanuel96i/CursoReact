

export const requestAPI = async (metodo, url, body=null) => {

    const responseJson = await fetch(
        url,
        {
            method: metodo,
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    
    const response = await responseJson.json();
    return response
}