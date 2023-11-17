const array = [4, 2, 7, 1, 5, 3];
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countSort(arr) {
  const max = Math.max(...arr);
  const count = Array(max + 1).fill(0);
  const output = Array(arr.length).fill(0);
  document.getElementById("information").innerHTML="<h2>Step 1: Find out the max from given array Initialize a countArray[] of length max+1 with all elements as This array will be used for storing the occurrences of the elements of the input array</h2>";
  await delay(3000);
  // Count occurrences
  //arr.forEach(num => count[num]++);
  document.getElementById("information").innerHTML="<h2>Step 2: Count the Frequency of every number and store into Count Array</h2>";
  await delay(3000);
  for(let i=0;i<arr.length;++i)
  {
    updateArray(arr,i, false);
    document.getElementById("information").innerHTML="<h2>Increment the frequency of "+ arr[i] +" element store in count array at "+ arr[i]+" index </h2>";
    updateCountArray(count, arr[i]);
    count[arr[i]]+=1;
    await delay(3000);
  }

  await delay(3000);
  document.getElementById("information").innerHTML="<h2>Step 3: Update the Count array with there sum of all prefix</h2>";
  await delay(3000);

  // Calculate prefix sum
  for (let i = 1; i <= max; i++) {
    let sum=count[i]+count[i-1]
    document.getElementById("information").innerHTML="<h2>Sum of "+count[i]+" + "+ count[i-1]+ " is "+ sum+" and store the sum into count array at "+i+" index</h2>";
    count[i] += count[i - 1];
    updateCountArray(count, i);
    await delay(3000);
  }
  await delay(3000);
  document.getElementById("information").innerHTML="<h2>Step 4: Iterate from end of the input array and because traversing input array from end preserves the order of equal elements, which eventually makes this sorting algorithm stable</h2>";
  await delay(3000);



  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    updateArray(arr,i, false);
    await delay(3000);
    output[count[arr[i]] - 1] = arr[i];
    let t=count[arr[i]]-1;
    document.getElementById("information").innerHTML="<h2> Store the "+ arr[i]+ " element into Output array in"+t+" index </h2>";
    updateArray(output, count[arr[i]] - 1, true);
    await delay(3000);
    updateCountArray(count, arr[i]);
    document.getElementById("information").innerHTML="<h2>Update the Count array decrement value of "+arr[i]+" index value "+count[arr[i]]+ " by 1 </h2>";
    await delay(3000);
    count[arr[i]]--;
    updateCountArray(count, arr[i]);
    await delay(3000);
  }

  
  document.getElementById("information").innerHTML="<h2>You get Final output sorted array into output array....<h2>";
  updateFullArray1(count);
  updateFullArray2(output);
  updateFullArray3(arr);

  document.getElementById('butt').innerHTML="<button class='button-home' role='button'><a href='count_info.html' style='color: green; text-decoration: none;'>Go To Explanation</a></button>";


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