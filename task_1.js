class AsyncOperationManager {

  simulateAsyncOperation(delay) {
    // Schedule an asynchronous operation using setTimeout
    setTimeout(() => {
      console.log(`Async operation completed after ${delay} ms`);

      // Schedule a microtask using process.nextTick
      process.nextTick(() => {
        console.log("Microtask executed immediately after async operation");
      });
    }, delay);
  }

  scheduleImmediate() {
    // Schedule an immediate task using setImmediate
    setImmediate(() => {
      console.log("Immediate task executed");
    });
  }
}

// Create an instance of AsyncOperationManager
const manager = new AsyncOperationManager();

// Simulate asynchronous operations
manager.simulateAsyncOperation(200);
Promise.resolve().then(() => {
  console.log('promise resolved')
})
manager.simulateAsyncOperation(1000);

// Schedule an immediate task
manager.scheduleImmediate();


/*  Expected Execution Flow:
1. First simulateAsyncOperation with a 200 ms delay is scheduled.
2. Second simulateAsyncOperation with a 1000 ms delay is scheduled.
3. The promise task is scheduled.
4. The immediate task is scheduled.
5. The event loop begins:
6. The first simulateAsyncOperation completes after 200 ms.
7. The corresponding microtask is executed immediately.
8. The second simulateAsyncOperation completes after 1000 ms.
9. Its microtask is executed immediately.
10. The immediate task is executed.
11. The program ends.
 */