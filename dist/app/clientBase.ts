export class ClientBase {
    protected transformOptions(options: RequestInit) {
        options.mode = "cors";
        options.headers = {
            ...options.headers,
            "Access-Control-Allow-Origin": window.location.protocol + "//" + window.location.hostname
          }
        return Promise.resolve(options);
    }

    protected transformResult(url: string, response: Response, processor: (response: Response) => any) {
        return processor(response); 
    }
}