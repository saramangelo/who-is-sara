export function generateKey(data) {
    return data.toLowerCase().split(" ").join("-");
}