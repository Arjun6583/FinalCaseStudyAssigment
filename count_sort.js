let array1 = [1,2,3,4,5,6,78,99,84,90,45,100,66,90,43];
let array2 = [12,56,0,91,55,1,67,100,78,0,99,100,77,55,43];
let array3=[10,20,30,40,50,50,60,70,80,80,90,90,90,100,110]
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

async function countSort1() {
    const startTime = new Date().getTime();
    let n = array1.length;
    let max = array1[0];
    for (let i = 1; i < array1.length; i++) {
        if (array1[i] > max) {
        max = array1[i];
        }
    }
      
    let countArray = new Array(max + 1).fill(0);
      
    for (let i = 0; i < array1.length; i++) {
        countArray[array1[i]]++;
    }
        
    for (let i = 1; i <=max; i++) 
    {
        countArray[i]+=countArray[i-1];
    }
    let sortedArray = new Array(n).fill(0);
    for(let i=0;i<n;++i)
    {
        sortedArray[countArray[array1[i]]-1]=array1[i];
        countArray[array1[i]]-=1;
        displayBars1(sortedArray);
        await sleep(300);
    }
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    document.getElementById('S1').innerHTML=`Time taken: ${elapsedTime} milliseconds`;


}

async function countSort3() {
    const startTime = new Date().getTime();
    let n = array3.length;
    let max = array3[0];
    for (let i = 1; i < array3.length; i++) {
        if (array3[i] > max) {
        max = array3[i];
        }
    }
      
    let countArray = new Array(max + 1).fill(0);
      
    for (let i = 0; i < array3.length; i++) {
        countArray[array3[i]]++;
    }   
    for (let i = 1; i <=max; i++) 
    {
        countArray[i]+=countArray[i-1];
    }
    let sortedArray = new Array(n).fill(0);
    for(let i=0;i<n;++i)
    {
        sortedArray[countArray[array3[i]]-1]=array3[i];
        countArray[array3[i]]-=1;
        displayBars3(sortedArray);
        await sleep(300);
    }
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    document.getElementById('S2').innerHTML=`Time taken: ${elapsedTime} milliseconds`;

}

async function countSort2() {
    const startTime = new Date().getTime();
    let n = array2.length;
    let max = array2[0];
    for (let i = 1; i < array2.length; i++) {
        if (array2[i] > max) {
        max = array2[i];
        }
    }
      
    let countArray = new Array(max + 1).fill(0);
      
    for (let i = 0; i < array2.length; i++) {
        countArray[array2[i]]++;
    }
        
    for (let i = 1; i <=max; i++) 
    {
        countArray[i]+=countArray[i-1];
    }
    let sortedArray = new Array(n).fill(0);
    for(let i=0;i<n;++i)
    {
        sortedArray[countArray[array2[i]]-1]=array2[i];
        countArray[array2[i]]-=1;
        displayBars2(sortedArray);
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
