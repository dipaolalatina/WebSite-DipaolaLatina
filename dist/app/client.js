import { ClientBase } from "../app/clientBase.js";
export class AwardClient extends ClientBase {
    constructor(baseUrl, http) {
        super();
        this.jsonParseReviver = undefined;
        this.http = http ? http : window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getAll() {
        let url_ = this.baseUrl + "/api/Award";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response) => {
            return this.processGetAll(_response);
        });
    }
    processGetAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(AwardDto.fromJS(item));
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    create(command) {
        let url_ = this.baseUrl + "/api/Award";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(command);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response) => {
            return this.processCreate(_response);
        });
    }
    processCreate(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    get(id) {
        let url_ = this.baseUrl + "/api/Award/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response) => {
            return this.processGet(_response);
        });
    }
    processGet(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = AwardDto.fromJS(resultData200);
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    update(id, command) {
        let url_ = this.baseUrl + "/api/Award/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(command);
        let options_ = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            }
        };
        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response) => {
            return this.processUpdate(_response);
        });
    }
    processUpdate(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    delete(id) {
        let url_ = this.baseUrl + "/api/Award/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "DELETE",
            headers: {
                "Accept": "application/octet-stream"
            }
        };
        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response) => {
            return this.processDelete(_response);
        });
    }
    processDelete(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
}
export class ImageClient extends ClientBase {
    constructor(baseUrl, http) {
        super();
        this.jsonParseReviver = undefined;
        this.http = http ? http : window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    get(id) {
        let url_ = this.baseUrl + "/api/Image?";
        if (id !== undefined && id !== null)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };
        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response) => {
            return this.processGet(_response);
        });
    }
    processGet(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
}
export class AwardDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.image = _data["image"];
            this.name = _data["name"];
            this.description = _data["description"];
            this.order = _data["order"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new AwardDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["image"] = this.image;
        data["name"] = this.name;
        data["description"] = this.description;
        data["order"] = this.order;
        return data;
    }
}
export class CreateAwardCommand {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.image = _data["image"];
            this.name = _data["name"];
            this.description = _data["description"];
            this.order = _data["order"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CreateAwardCommand();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["image"] = this.image;
        data["name"] = this.name;
        data["description"] = this.description;
        data["order"] = this.order;
        return data;
    }
}
export class UpdateAwardCommand {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.image = _data["image"];
            this.name = _data["name"];
            this.description = _data["description"];
            this.order = _data["order"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateAwardCommand();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["image"] = this.image;
        data["name"] = this.name;
        data["description"] = this.description;
        data["order"] = this.order;
        return data;
    }
}
export class ApiException extends Error {
    constructor(message, status, response, headers, result) {
        super();
        this.isApiException = true;
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    static isApiException(obj) {
        return obj.isApiException === true;
    }
}
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}
//# sourceMappingURL=client.js.map