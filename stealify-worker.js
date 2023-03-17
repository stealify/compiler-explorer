// Workers get registered via blob url and exported as module 
// Listen for messages from the main thread
const runWorker = (fn=()=>{}) =>
new Worker(URL.createObjectURL(
new Blob([`(${fn})();`], 
{ type: "text/javascript" })),{ type: "module" });

const expensivTask = ()=>{
  globalThis.on('message', (ev) => {
    const {id} = ev.data;
    console.log(`Received message id: {id} from main thread: ${ev.data}`);
    // Do some CPU-intensive task here
    globalThis.postMessage({ id, 'Hello from the worker thread!' });
  });
}

runWorker(expensivTask);
