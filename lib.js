var values = [];

async function quickSort(arr, start, end) {
    await drawCols(arr);
    if (start >= end) {
        return;
    }
    let index = await partition(arr, start, end);
    states[index] = -1;

    await Promise.all([
        quickSort(arr, start, index - 1),
        quickSort(arr, index + 1, end),
        drawCols(arr)
    ]);
    
}

async function partition(arr, start, end) {
    await drawCols(arr);
    for (let i = start; i < end; i++) {
        states[i] = 1;
    }
 
    let pivotValue = arr[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
        }
    }
    await swap(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
        if (i != pivotIndex) {
        states[i] = -1;
        }
    }

    await drawCols(arr);
    return pivotIndex;
}
  
async function swap(arr, a, b) {
    await drawCols(arr);
    await sleep(50);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}