let array1 = [1,2,3,4,5,6,78,110,84,90,45,140,66,100,43];
let array2 = [120,56,0,91,55,1,67,100,78,0,99,130,77,55,99];
let array3=[10,20,30,40,50,50,60,70,80,80,90,90,110,120,140]
const barsContainer1 = document.getElementById('bars1');
const barsContainer2 = document.getElementById('bars2');
const barsContainer3 = document.getElementById('bars3');
function displayBars1(arr) {
    barsContainer1.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar1';
        bar.style.height = arr[i] + 'px';
        barsContainer1.appendChild(bar);
    }
}

function displayBars2(arr) {
    barsContainer2.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar2';
        bar.style.height = arr[i] + 'px';
        barsContainer2.appendChild(bar);
    }
}

function displayBars3(arr) {
    barsContainer3.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar3';
        bar.style.height = arr[i] + 'px';
        barsContainer3.appendChild(bar);
    }
}

async function bucketSort1() {

  const startTime = new Date().getTime();
  // Find the maximum and minimum values in the array
  let min = array1[0];
  let max = array1[0];
  for (let i = 1; i < array1.length; i++) {
    if (array1[i] < min) {
      min = array1[i];
    } else if (array1[i] > max) {
      max = array1[i];
    }
  }

  // Calculate the range for each bucket
  const bucketSize = 3; // You can adjust this value based on the input data
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;

  // Create an array of empty buckets
  const buckets = new Array(bucketCount);
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  // Place elements into buckets
  for (let i = 0; i < array1.length; i++) {
    const index = Math.floor((array1[i] - min) / bucketSize);
    buckets[index].push(array1[i]);
  }

  // Sort each bucket (you can use a different sorting algorithm here)
  for (let i = 0; i < bucketCount; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  // Concatenate the sorted buckets to get the final sorted array
  const sortedArray = [];
  for (let i = 0; i < bucketCount; i++) {
    sortedArray.push(...buckets[i]);
    displayBars1(sortedArray);
    await sleep(100);
  }
  array1=sortedArray;
  const endTime = new Date().getTime();
  const elapsedTime = endTime - startTime;
  document.getElementById('S1').innerHTML=`Time taken: ${elapsedTime} milliseconds`;
}

async function bucketSort3() {
    const startTime = new Date().getTime();
    let min = array3[0];
    let max = array3[0];
    for (let i = 1; i < array3.length; i++) {
      if (array3[i] < min) {
        min = array3[i];
      } else if (array3[i] > max) {
        max = array3[i];
      }
    }

    // Calculate the range for each bucket
    const bucketSize = 3; // You can adjust this value based on the input data
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;

    // Create an array of empty buckets
    const buckets = new Array(bucketCount);
    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = [];
    }

    // Place elements into buckets
    for (let i = 0; i < array3.length; i++) {
      const index = Math.floor((array3[i] - min) / bucketSize);
      buckets[index].push(array3[i]);
    }

    // Sort each bucket (you can use a different sorting algorithm here)
    for (let i = 0; i < bucketCount; i++) {
      buckets[i].sort((a, b) => a - b);
    }

    // Concatenate the sorted buckets to get the final sorted array
    const sortedArray = [];
    for (let i = 0; i < bucketCount; i++) {
      sortedArray.push(...buckets[i]);
      displayBars3(sortedArray);
      await sleep(100);
    }
    array3=sortedArray;
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    document.getElementById('S2').innerHTML=`Time taken: ${elapsedTime} milliseconds`;

}

async function bucketSort2() {
    const startTime = new Date().getTime();
    let min = array2[0];
    let max = array2[0];
    for (let i = 1; i < array2.length; i++) {
      if (array2[i] < min) {
        min = array2[i];
      } else if (array2[i] > max) {
        max = array2[i];
      }
    }

    // Calculate the range for each bucket
    const bucketSize = 3; // You can adjust this value based on the input data
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;

    // Create an array of empty buckets
    const buckets = new Array(bucketCount);
    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = [];
    }

    // Place elements into buckets
    for (let i = 0; i < array2.length; i++) {
      const index = Math.floor((array2[i] - min) / bucketSize);
      buckets[index].push(array2[i]);
    }

    // Sort each bucket (you can use a different sorting algorithm here)
    for (let i = 0; i < bucketCount; i++) {
      buckets[i].sort((a, b) => a - b);
    }

    // Concatenate the sorted buckets to get the final sorted array
    const sortedArray = [];
    for (let i = 0; i < bucketCount; i++) {
      sortedArray.push(...buckets[i]);
      displayBars2(sortedArray);
      await sleep(100);
    }
    array2=sortedArray;
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    document.getElementById('S3').innerHTML=`Time taken: ${elapsedTime} milliseconds`;

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

displayBars1(array1);
displayBars2(array2);
displayBars3(array3);
