document.getElementById('btn').addEventListener('click', function() {
  const inputNumber = document.getElementById('ip').value;

  // Promise that resolves after 2 seconds with the input number
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputNumber);
    }, 2000);
  });

  promise1
    .then(result => {
      document.getElementById('output').textContent = `Result: ${result}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(result);
        }, 2000);
      });
    })
    .then(result => {
      const multipliedResult = result * 2;
      document.getElementById('output').textContent = `Result: ${multipliedResult}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(multipliedResult);
        }, 1000);
      });
    })
    .then(result => {
      const subtractedResult = result - 3;
      document.getElementById('output').textContent = `Result: ${subtractedResult}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(subtractedResult);
        }, 1000);
      });
    })
    .then(result => {
      const dividedResult = result / 2;
      document.getElementById('output').textContent = `Result: ${dividedResult}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(dividedResult);
        }, 1000);
      });
    })
    .then(result => {
      const addedResult = result + 10;
      document.getElementById('output').textContent = `Result: ${addedResult}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(addedResult);
        }, 1000);
      });
    })
    .then(finalResult => {
      document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('output').textContent = 'Error occurred. Please try again.';
    });
});
