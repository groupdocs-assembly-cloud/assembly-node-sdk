/*
* MIT License

* Copyright (c) 2018 GroupDocs Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import http = require("http");
import request = require("request");

import { AssemblyApiAvailiableVersions } from "./internal/assemblyApiAvailiableVersions";
import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";

export * from "./model/model";
export * from "./internal/assemblyApiAvailiableVersions";

/**
 * Library for communicating with the GroupDocs.Assembly Cloud API
 */
export class AssemblyApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     * @param version API version.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean, version?: AssemblyApiAvailiableVersions) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode, version);
    }

    /**
     * Builds a document using document template and XML or JSON data passed in request
     * @param requestObj contains request parameters
     */
    // tslint:disable-next-line:completed-docs
    public async postAssembleDocument(requestObj: model.Request): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAssembleDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/{name}/build"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postAssembleDocument.');
        }

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling postAssembleDocument.');
        }

        // verify required parameter 'requestObj.saveOptions' is not null or undefined
        if (requestObj.saveOptions === null || requestObj.saveOptions === undefined) {
            throw new Error('Required parameter "requestObj.saveOptions" was null or undefined when calling postAssembleDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        formParams.saveOptions = JSON.stringify(requestObj.saveOptions);
        if (requestObj.data !== undefined) {
            formParams.Data = requestObj.data;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            formData: formParams,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

}
