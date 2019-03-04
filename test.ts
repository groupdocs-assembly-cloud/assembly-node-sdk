/**
 * Some awesome class
 */
export class MyCheckClass {
/**
 * Very usefull method
 * @param checkParameter Some unused parameter
 */
    public myCheckMethod(checkParameter: string): Promise<{ code: number, data: string }> {
        return new Promise((resolve, reject) => {
            resolve({code : 200, data: "My Success Data"});
        });
    }
}
