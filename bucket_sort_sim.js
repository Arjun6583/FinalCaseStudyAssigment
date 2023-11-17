const array = [29, 25, 3, 49, 9, 37, 21, 43, 12, 16,11,2,26];

function display()
{
  updateFullArray1(array);
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bucketSort(arr) {
  const max = Math.max(...arr);
  const bucketSize = 3; // Number of buckets
  const buckets = Array.from({ length: bucketSize }, () => []);
  document.getElementById("information").innerHTML="<h2>Step 1: Create an array of size 3, where each slot represents a bucket.</h2>";
  // Display input array
  updateFullArray1(arr);
  await delay(3000);

  // Distribute elements into buckets
  document.getElementById("information").innerHTML="<h2>Step 2: Distribute elements into buckets.</h2>";
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] / (max + 1)) * bucketSize);
    updateArray(arr,i);
    document.getElementById("information").innerHTML="<h2>Push "+arr[i]+" element into bucket no. "+bucketIndex+"</h2>";
    await delay(3000);
    buckets[bucketIndex].push(arr[i]);
    updateBucket(buckets[bucketIndex],bucketIndex);
    await delay(3000);
  }
  updateFullArray1(arr);

  // Sort individual buckets
  document.getElementById("information").innerHTML="<h2>Step 3: Sort individual buckets using built in function(as you choice).</h2>";
  await delay(3000);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b);
    document.getElementById("information").innerHTML="<h2>Sort "+i+" bucket using built in function..</h2>";
    updateBucket(buckets[i], i);
    await delay(3000);
  }

  document.getElementById("information").innerHTML="<h2>Step 4: Concatenate sorted buckets to get the final sorted array.</h2>";
  // Concatenate sorted buckets to get the final sorted array
  const sortedArray = [].concat(...buckets);
  
  // Display sorted array
  updateFullArray2(sortedArray);
  await delay(3000);

  document.getElementById("information").innerHTML="<h2>You get Final output sorted array into output array....<h2>";

  document.getElementById('butt').innerHTML="<button class='button-home' role='button'><a href='bucket_info.html' style='color: green; text-decoration: none;'>Go to Explanation</a></button>";

}

function updateBucket(bucket, bucketIndex) {
  const bucketContainer = document.getElementById(`bucket-container-${bucketIndex}`);
  bucketContainer.innerHTML = `<div class="array-heading">Bucket ${bucketIndex}</div>`;
  bucket.forEach((value, index) => {
    const bucketBox = document.createElement('div');
    bucketBox.className = 'array-box';
    bucketBox.textContent = value;
    bucketBox.style.transform = 'scale(1)';
    bucketContainer.appendChild(bucketBox);
  });
}

function updateArray(arr, cursorIndex) {
  const arrayContainer = document.getElementById('input-container');
  arrayContainer.innerHTML = `<div class="array-heading">Input Array</div>`;
  arr.forEach((value, index) => {
    const arrayBox = document.createElement('div');
    arrayBox.className = 'array-box';
    arrayBox.textContent = value;
    arrayBox.style.transform = index === cursorIndex ? 'scale(1.1)' : 'scale(1)';
    if(index===cursorIndex)
      arrayBox.classList.add('highlight');
    arrayContainer.appendChild(arrayBox);
  });
}

function updateFullArray1(arr) {
  const arrayContainer = document.getElementById('input-container');
  arrayContainer.innerHTML = `<div class="array-heading">Input Array</div>`;
  arr.forEach((value, index) => {
    const arrayBox = document.createElement('div');
    arrayBox.className = 'array-box';
    arrayBox.textContent = value;
    arrayBox.style.transform = 'scale(1)';
    arrayContainer.appendChild(arrayBox);
  });
}

function updateFullArray2(arr) {
  const arrayContainer = document.getElementById('array-container');
  arrayContainer.innerHTML = `<div class="array-heading">Sorted Array</div>`;
  arr.forEach((value, index) => {
    const arrayBox = document.createElement('div');
    arrayBox.className = 'array-box';
    arrayBox.textContent = value;
    arrayBox.style.transform = 'scale(1)';
    arrayContainer.appendChild(arrayBox);
  });
}

async function startSort() {
  
  await bucketSort(array);
}