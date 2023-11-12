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
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function countingSort1(exp) {
  const n = array1.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(array1[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(array1[i] / exp) % 10;
    output[count[digit] - 1] = array1[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    array1[i] = output[i];
  }
}

function countingSort2(exp) {
  const n = array2.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(array2[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(array2[i] / exp) % 10;
    output[count[digit] - 1] = array2[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    array2[i] = output[i];
  }
}

function countingSort3(exp) {
  const n = array3.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(array3[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(array3[i] / exp) % 10;
    output[count[digit] - 1] = array3[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    array3[i] = output[i];
  }
}

async function radixSort1() {
    const startTime = new Date().getTime();
    const max = findMax(array1);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      countingSort1(exp);
      displayBars1(array1);
      await sleep(300);
  }
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    document.getElementById('S1').innerHTML=`Time taken: ${elapsedTime} milliseconds`;


}

async function radixSort3() {
    const startTime = new Date().getTime();
    const max = findMax(array3);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      countingSort3(exp);
      displayBars3(array3);
      await sleep(300);
  }
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    document.getElementById('S2').innerHTML=`Time taken: ${elapsedTime} milliseconds`;

}

async function radixSort2() {
    const startTime = new Date().getTime();
    const max = findMax(array2);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      countingSort2(exp);
      displayBars2(array2);
      await sleep(300);
  }
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
