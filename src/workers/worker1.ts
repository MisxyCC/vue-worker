onmessage = (ev: MessageEvent) => {
    console.log(`The received message from the main thread is: ${ev.data}`);
    postMessage("A sample message from a dedicated worker");
}