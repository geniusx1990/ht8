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
1. Instance of the "AsyncOperationManager" class is created.
2. First simulateAsyncOperation with a 200 ms delay is scheduled and registered a callback function. 
3. The microtask using Promise is scheduled.
4. Second simulateAsyncOperation with a 1000 ms delay is scheduled and registered a callback function
5. The immediate task is scheduled and registered a callback function.

The event loop begins:
6. The immediate task is executed.
7. The first simulateAsyncOperation completed after 200 ms and the callback is executed.
8. The microtask process.nextTick is executed immediately.
9. The second simulateAsyncOperation completed after 1000 ms and the callback is executed.
10. The microtask process.nextTick is executed immediately.
12. The program ends.
 */