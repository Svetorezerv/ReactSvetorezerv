
export default class AuthorisationService {
    static async postLogin(username, password) {
        const response = await fetch(`https://tetreco.com/api/account/{username: '${username}', password: '${password}'}/`);
        const result = await response.json();
        return result;
    }
}