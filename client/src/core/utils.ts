export const itemExists = (arr: any, id: string | undefined): boolean => {
    // console.log(arr.length)
    if (!(arr.length > 0))
        return false;
    return arr.some((el: any) => {
        return el.id === id;
    });
}