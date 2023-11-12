const array = [4, 2, 7, 1, 5, 3];
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countSort(arr) {
  const max = Math.max(...arr);
  const count = Array(max + 1).fill(0);
  const output = Array(arr.length).fill(0);

  // Count occurrences
  arr.forEach(num => count[num]++);

  // Calculate prefix sum
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    updateArray(arr,i, false);
    output[count[arr[i]] - 1] = arr[i];
    updateArray(output, count[arr[i]] - 1, true);
    await delay(1000);
    updateCountArray(count, arr[i]);
    await delay(1000);
    count[arr[i]]--;
    updateCountArray(count, arr[i]);
    await delay(1000);
  }

  updateFullArray1(count);
  updateFullArray2(output);
  updateFullArray3(arr);

  document.getElementById('butt').innerHTML="<button class='button-1' onclick='startSort()'>Start Sorting</button><button class='button-home' role='button'><a href='count_info.html' style='color: green; text-decoration: none;'>Go Back</a></button>";


}

function updateArray(arr, cursorIndex, isOutput) {
  const arrayContainer = isOutput ? document.getElementById('array-container') : document.getElementById('input-container');
  arrayContainer.innerHTML = `<div class="array-heading">${isOutput ? 'Sorted Array' : 'Input Array'}</div>`;
  let flag=true;
  arr.forEach((value, index) => {
    const arrayBox = document.createElement('div');
    arrayBox.className = 'array-box';
    arrayBox.textContent = value === undefined ? '' : value;
    arrayBox.style.transform = index === cursorIndex ? 'scale(1.1)' : 'scale(1)';
    if (isOutput && index === cursorIndex) {
      arrayBox.classList.add('highlight'); // Highlight the element being inserted
    }
    if(index === cursorIndex && (!isOutput && flag))
    {
      arrayBox.classList.add('highlight');
      flag=false;
    }
    arrayContainer.appendChild(arrayBox);
  });
}


function updateFullArray1(arr) {
  const arrayContainer = document.getElementById('count-container');
  arrayContainer.innerHTML = `<div class="array-heading">Count Array</div>`;
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

function updateFullArray3(arr) {
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

function updateCountArray(count, cursorIndex) {
  const countContainer = document.getElementById('count-container');
  countContainer.innerHTML = `<div class="array-heading">Count Array</div>`;
  count.forEach((value, index) => {
    const countBox = document.createElement('div');
    countBox.className = 'array-box';
    countBox.textContent = value === undefined ? '' : value;
    countBox.style.transform = index === cursorIndex ? 'scale(1.1)' : 'scale(1)';
    if (index === cursorIndex) {
      countBox.classList.add('highlight'); // Highlight the element being subtracted
    }
    countContainer.appendChild(countBox);
  });
}

function display()
{
  updateArray(array, array.length-1, false);
  updateFullArray1(Array(array.length).fill(0));
  updateCountArray([], 0);
}

async function startSort() {
  
  updateArray(array, array.length-1, false);
  updateFullArray1(Array(array.length).fill(0));
  updateCountArray([], 0);
  await delay(1000);

  await countSort(array);
}