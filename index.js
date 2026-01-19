let interval = setInterval(() => {
  console.log('This will run every second');
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log('Interval cleared after 5 seconds');
}, 5000);

// Additional code can be added here if needed
console.log(global.document)