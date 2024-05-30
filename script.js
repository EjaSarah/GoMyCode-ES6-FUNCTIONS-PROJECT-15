// Task 01: Iterating with Async/Await
// We need to create an async function that takes an array of values and logs each value with a delay of 1 second between logs.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000); // 1 second delay
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

// Task 02: Awaiting a Call
// We need to create an async function that simulates fetching data from an API and logs the data.


async function fetchData() {
    // Simulating a fetch call with a delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Fetched data");
        }, 1000);
    });
}

async function awaitCall() {
    const data = await fetchData();
    console.log(data);
}

// Example usage:
awaitCall();


// Task 03: Handling Errors with Async/Await
// We need to modify the awaitCall function to handle errors gracefully.

async function fetchDataWithError() {
    // Simulating a fetch call that may fail
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Fetched data");
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}

async function awaitCall() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.log("Error: Unable to fetch data. Please try again later.");
    }
}

// Example usage:
// awaitCall();


// Task 04: Chaining Async/Await
// We need to create a function that calls three separate async functions sequentially with a delay.


async function firstFunction() {
    await delay(1000);
    console.log("First function complete");
}

async function secondFunction() {
    await delay(1000);
    console.log("Second function complete");
}

async function thirdFunction() {
    await delay(1000);
    console.log("Third function complete");
}

async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}

// Example usage:
chainedAsyncFunctions();


// Task 05: Awaiting Concurrent Requests
// We need to create an async function that makes two API calls concurrently using Promise.all() and logs the combined results.


async function fetchFirstDaa() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("First data");
        }, 1000);
    });
}

async function fetchSecondData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Second data");
        }, 1000);
    });
}

async function concurrentRequests() {
    try {
        const [firstData, secondData] = await Promise.all([fetchFirstData(), fetchSecondData()]);
        console.log(`Combined results: ${firstData}, ${secondData}`);
    } catch (error) {
        console.log("Error: Unable to fetch data concurrently.");
    }
}

// Example usage:
concurrentRequests();


// Task 06: Awaiting Parallel Calls
// We need to create a function that takes an array of URLs and fetches data from each URL concurrently using Promise.all().


async function fetchUrlData(url) {
    // Simulating a fetch call with a delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 1000);
    });
}

async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetchUrlData(url)));
        console.log("Responses:", responses);
    } catch (error) {
        console.log("Error: Unable to fetch data from URLs.");
    }
}

// Example usage:
parallelCalls(["http://example.com/1", "http://example.com/2", "http://example.com/3"]);