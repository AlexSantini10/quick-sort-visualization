async function quickSort(arr, start, end) {
    if (start>=end) return;

    let index = await partition(arr, start, end);
    await Promise.all([
        quickSort(arr, start, index - 1),
        quickSort(arr, index, end)
    ]);
    
}

async function partition(arr, start, end) {
    for (let i=start; i < end-1; i++) {
        states[i] = 1;
    }

    let pivotInd = start;
    let pivotVal = arr[end];
    states[pivotInd] = 0;
    for(let i=start; i<end; i++) {
        if (arr[i]<pivotVal) {
            await swap(arr, i, pivotInd);
            states[pivotInd] = -1;
            pivotInd++;
            states[pivotInd] = 0;
        }
    }

    swap(arr, pivotInd, end);
    return pivotInd;
}

async function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}