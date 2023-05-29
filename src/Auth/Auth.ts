import Keycloak, { KeycloakTokenParsed } from "keycloak-js";

export class Auth {
    public static kc = new Keycloak({
        realm: import.meta.env.VITE_KC_REALM,
        clientId: import.meta.env.VITE_KC_CLIENT_ID,
        url: import.meta.env.VITE_KC_URL
    })
    public static init() {
        const token = sessionStorage.getItem("kc_token") || undefined
        const refreshToken = sessionStorage.getItem("kc_refreshToken") || undefined
        return this.kc.init({token, refreshToken, onLoad: "login-required" }).then(function(authenticated) {
            Auth.kc.refreshToken && sessionStorage.setItem("kc_refreshToken", Auth.kc.refreshToken)
            Auth.kc.token && sessionStorage.setItem("kc_token", Auth.kc.token)
            console.log("Authenticated", authenticated)
        })
        .catch(function() {
            alert('failed to initialize');
        });
    }

    public static getUserDetails = () => {
        return this.kc.userInfo
    }

    public static getUserId = () => {
        return this.kc.idTokenParsed?.sub as string
    }

    public static logout = () => {
        this.kc.logout()
    }
}