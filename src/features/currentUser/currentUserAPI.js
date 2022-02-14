export function loadCurrentUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Khachatur Jackson"
            })
        },1000);
    });
}
