export class Api {

    static baseUrl = 'http://localhost:8000/api';
    
    static async post<T>(url:string, data:any): Promise<any> {
        const response = await fetch(`${Api.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resp = await response.json();

        return {
            data: resp,
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
            json: () => {
                return resp;
            },
            text: () => {
                return response.text();
            }
        }
    }
}