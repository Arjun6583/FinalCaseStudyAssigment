const data={1:"Ones Place",2:"Tens Place",3:"Hundred Place",4:"Thousand Place"};
const array = [170, 45, 75, 90, 802, 24, 2, 66];

function display()
{
  updateFullArray3(array);
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function radixSort(arr) {
  const max = Math.max(...arr);
  let cnt=1;
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    document.getElementById("information").innerHTML="<h2>Sort By "+data[cnt]+" </h2>";
    await countingSort(arr, exp,data[cnt]);
    cnt+=1;
  }
  document.getElementById('butt').innerHTML="<button class='button-home' role='button'><a href='radix_info.html' style='color: green; text-decoration: none;'>Go To Explanation</a></button>";
}

async function countingSort(arr, exp,msg) {
  const n = arr.length;
  const output = Array(n).fill(0);
  const count = Array(10).fill(0);
  document.getElementById("information").innerHTML="<h2> Count the Frequency of every digit on "+msg +" and store into Count Array</h2>";
  await delay(3000);
  for (let i = 0; i < n; i++) {
    let t=Math.floor(arr[i] / exp) % 10;
    updateArray(arr,i, false);
    document.getElementById("information").innerHTML="<h2>Increment the frequency of "+arr[i] +" "+ msg +" place digit and store in count array at "+ t+" index </h2>";
    updateCountArray(count, t);
    count[Math.floor(arr[i] / exp) % 10]++;
    await delay(3000);
    
  }

  await delay(3000);
  document.getElementById("information").innerHTML="<h2> Update the Count array with there sum of all prefix</h2>";
  await delay(3000);

  for (let i = 1; i < 10; i++) {
    let sum=count[i]+count[i-1]
    document.getElementById("information").innerHTML="<h2>Sum of "+count[i]+" + "+ count[i-1]+ " is "+ sum+" and store the sum into count array at "+i+" index</h2>";
    count[i] += count[i - 1];
    updateCountArray(count, i);
    await delay(3000);
  }

  await delay(3000);
  document.getElementById("information").innerHTML="<h2>Iterate from end of the input array and because traversing input array from end preserves the order of equal elements, which eventually makes this sorting algorithm stable</h2>";
  await delay(3000);

  for (let i = n - 1; i >= 0; i--) {
    let t=count[Math.floor(arr[i] / exp) % 10] - 1;
    updateArray(arr, i, false);
    await delay(3000);
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    document.getElementById("information").innerHTML="<h2> Store the "+ arr[i]+ " element into Output array in "+t+" index </h2>";
    updateArray(output, count[Math.floor(arr[i] / exp) % 10] - 1, true);
    await delay(3000);
    updateCountArray(count, Math.floor(arr[i] / exp) % 10);
    document.getElementById("information").innerHTML="<h2>Update the Count array decrement value of "+Math.floor(arr[i] / exp) % 10+" index value "+count[Math.floor(arr[i] / exp) % 10]+ " by 1 </h2>";
    await delay(3000);
    count[Math.floor(arr[i] / exp) % 10]--;
    updateCountArray(count, Math.floor(arr[i] / exp) % 10);
    await delay(3000);
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
  document.getElementById("information").innerHTML="<h2>You get Final output sorted array into output array....<h2>";
  updateFullArray1(count);
  updateFullArray2(output);
  updateFullArray3(arr);

}

function updateArray(arr, cursorIndex, isOutput) {
  const arrayContainer = isOutput ? document.getElementById('array-container') : document.getElementById('input-container');
  arrayContainer.innerHTML = `<div class="array-heading">${isOutput ? 'Sorted Array' : 'Input Array'}</div>`;
  let flag = true;
  arr.forEach((value, index) => {
    const arrayBox = document.createElement('div');
    arrayBox.className = 'array-box';
    arrayBox.textContent = value === undefined ? '' : value;
    arrayBox.style.transform = index === cursorIndex ? 'scale(1.1)' : 'scale(1)';
    if (isOutput && index === cursorIndex) {
      arrayBox.classList.add('highlight'); // Highlight the element being inserted
    }
    if (index === cursorIndex && (!isOutput && flag)) {
      arrayBox.classList.add('highlight');
      flag = false;
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
    document.getElementById("information").innerHTML='';
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

async function startSort() {
  updateArray(array, array.length - 1, false);
  updateFullArray1(Array(array.length).fill(0));
  updateCountArray([], 0);
  await delay(1000);

  await radixSort(array);
}