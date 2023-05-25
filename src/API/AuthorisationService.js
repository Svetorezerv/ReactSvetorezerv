
export default class AuthorisationService {
    static async postLogin(username, password) {
        const response = await fetch('https://tetreco.com/api/account/token/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        
        const result = await response.json();
        return result;
    }
}