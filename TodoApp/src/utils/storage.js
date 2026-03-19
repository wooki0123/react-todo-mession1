const storage = window.localStorage

export const setItem = (key, value) => {
    try {
        storage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e)
    }
}

export const getItem = (key, defaultValue) => {
    const storageValue = storage.getItem(key)

    if (storageValue) {
        return JSON.parse(storageValue)
    }

    return defaultValue
}
