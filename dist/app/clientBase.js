export class ClientBase {
    transformOptions(options) {
        options.mode = "cors";
        options.headers = {
            ...options.headers,
            "Access-Control-Allow-Origin": window.location.protocol + "//" + window.location.hostname
        };
        return Promise.resolve(options);
    }
    transformResult(url, response, processor) {
        return processor(response);
    }
}
//# sourceMappingURL=clientBase.js.map