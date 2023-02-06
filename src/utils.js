export const printArrInfoDetail = (arr, fieldName) => {
    if (arr.length) {
        return arr.map((arrItem) => !fieldName ? arrItem : arrItem[fieldName]).join(', ');
    }

    return [];
};
