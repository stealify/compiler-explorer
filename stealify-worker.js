const { Worker } = require('worker_threads');

function performTask() {
  // Do some CPU-intensive task here
}

// Create a new worker thread
const worker = new Worker(performTask);

// Listen for messages from the main thread
worker.on('message', (message) => {
  console.log(`Received message from main thread: ${message}`);
});

// Send a message back to the main thread
worker.postMessage('Hello from the worker thread!');