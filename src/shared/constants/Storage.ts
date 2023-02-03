export const user = JSON.parse(localStorage.getItem('user-data') || '')
const localStorageKeys = {
    LOCALE: "app.locale",
}

export default localStorageKeys;