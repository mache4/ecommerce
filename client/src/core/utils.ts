export const itemExists = (arr: any, id: string | undefined): boolean => {
    return arr.some((el: any) => {
        return el.id === id;
    });
}