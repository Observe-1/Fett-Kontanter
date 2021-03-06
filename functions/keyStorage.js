import * as SecureStore from "expo-secure-store";

export async function saveKeyValue(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export async function getKeyValue(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result;
    } else {
        alert("⚠️ No values stored under that key. ⚠️");
        return "failure somewhere!";
    }
}
