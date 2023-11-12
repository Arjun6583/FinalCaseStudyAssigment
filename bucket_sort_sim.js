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

  // Display input array
  updateFullArray1(arr);
  await delay(1000);

  // Distribute elements into buckets
  for (let i = 0; i < arr.length; i++) {
    updateArray(arr,i);
    await delay(1000);
    const bucketIndex = Math.floor((arr[i] / (max + 1)) * bucketSize);
    buckets[bucketIndex].push(arr[i]);
    updateBucket(buckets[bucketIndex],bucketIndex);
    await delay(1000);
  }
  updateFullArray1(arr);

  // Sort individual buckets
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b);
    updateBucket(buckets[i], i);
    await delay(1000);
  }


  // Concatenate sorted buckets to get the final sorted array
  const sortedArray = [].concat(...buckets);
  
  // Display sorted array
  updateFullArray2(sortedArray);
  await delay(1000);

  document.getElementById('butt').innerHTML="<button class='button-1' onclick='startSort()'>Sort Again</button><button class='button-home' role='button'><a href='bucket_info.html' style='color: green; text-decoration: none;'>Go Back</a></button>";

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