function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Praveen"), 1000);
    });
}

async function showName() {
    const name = await fetchName(); // waits for promise to finish
    console.log("Name is:", name);
}

showName();
