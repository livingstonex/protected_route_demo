class Auth {
    authenticated: boolean;

    constructor(authenticated: boolean){
        this.authenticated = false;
    }

    login(cb:Function) {
        this.authenticated = true;
        cb();
    }

    logout(cb:Function) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth(false);