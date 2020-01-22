/*
* MIT License

* Copyright (c) 2019 GroupDocs Pty Ltd

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
import request = require("request");

import { AssemblyApiAvailiableVersions } from "../src/internal/assemblyApiAvailiableVersions";
import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";

export * from "./model/model";

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
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean, version?: AssemblyApiAvailiableVersions) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode, version);
    }

    /**
     * Builds a document using document template and XML or JSON data passed in request
     * @param requestObj contains request parameters
     */
    public async postAssembleDocument(requestObj: model.PostAssembleDocumentRequest): Promise<model.GroupDocsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAssembleDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/{name}/build"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling postAssembleDocument.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling postAssembleDocument.');
        }

        // verify required parameter 'requestObj.data' is not undefined
        if (requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was undefined when calling postAssembleDocument.');
        }

        // verify required parameter 'requestObj.data' is not null
        if (requestObj.data === null) {
            throw new Error('Required parameter "requestObj.data" was null when calling postAssembleDocument.');
        }

        // verify required parameter 'requestObj.saveOptions' is not undefined
        if (requestObj.saveOptions === undefined) {
            throw new Error('Required parameter "requestObj.saveOptions" was undefined when calling postAssembleDocument.');
        }

        // verify required parameter 'requestObj.saveOptions' is not null
        if (requestObj.saveOptions === null) {
            throw new Error('Required parameter "requestObj.saveOptions" was null when calling postAssembleDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        if (requestObj.saveOptions !== undefined) {
            formParams.SaveOptions = JSON.stringify(requestObj.saveOptions);
        }

        if (requestObj.data !== undefined) {
            formParams.Data = requestObj.data;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            formData: formParams,
        };
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.GroupDocsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

}
