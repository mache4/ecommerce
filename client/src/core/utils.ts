export const itemExists = (arr: any, id: number): boolean => {
    return arr.some((el: any) => {
        return el.id === id;
    });
}