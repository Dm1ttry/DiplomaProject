import superagent from "superagent"

export default class HttpClient {
    static readonly url = 'https://jsonplaceholder.typicode.com/'

    static async get(path: string, queryValue: string | object): Promise<any> {
        let response: unknown;
        try {
         response = await superagent.get(`${HttpClient.url}${path}`).query(queryValue); 
         }
        catch (err: any) {
        console.log(err.message);
        }
        finally {
            return response;
        }
    }
    static async delete(path: string, queryValue?: object): Promise<any> {
        let response: unknown;
        try{
            if(queryValue) {
                response = await superagent.delete(`${HttpClient.url}${path}`).query(queryValue);               
            }
            else{
                response = await superagent.delete(`${HttpClient.url}${path}`);
            }
    }
    catch(err: any){
        console.log(err.message);
    }
    finally{
        return response;
    }}
    static async post(path: string, Val: object): Promise<any> {
        let response: unknown;
        try {
          response = await superagent.post(`${HttpClient.url}${path}`).send(Val);
        } catch (err: any) {
          console.log(err.message);
        //   response = err.response;
        } finally {
          return response;
        }
      }
    static async put(path: string, Val: object): Promise<any> {
        let response: unknown;
        try {
          response = await superagent.put(`${HttpClient.url}${path}`).send(Val);
        } catch (err: any) {
          console.log(err.message);
        //   response = err.response;
        } finally {
          return response;
        }
      }
}