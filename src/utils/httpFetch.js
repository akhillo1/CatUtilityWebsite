export async function httpPostDataAsJson(url = '', data = {}) {    
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json',
            'x-api-key': 'f224f6fd-ead1-437b-8cf3-46a91c46f65b'
        },
        body: JSON.stringify(data) 
    });
    return response.json();
}

export async function httpPostDataAsForm(url = '', formData = {}) {    
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'x-api-key': 'f224f6fd-ead1-437b-8cf3-46a91c46f65b'
        },
        body: formData 
    });
    return response.json(); 
}

export async function httpGet(url = '') {    
    const response = await fetch(url, {
        method: 'GET', 
        headers: {
            'x-api-key': 'f224f6fd-ead1-437b-8cf3-46a91c46f65b'
        }
    });
    return response.json(); 
}

export async function httpDelete(url = '') {
    const response = await fetch(url, {
        method: 'DELETE', 
        headers: {
            'x-api-key': 'f224f6fd-ead1-437b-8cf3-46a91c46f65b'
        }
    });
    return response.json(); 
} 





