/*
* MIT License

* Copyright (c) 2020 Aspose Pty Ltd

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
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Builds a document using document template and XML or JSON data passed in request.
     * @param requestObj contains request parameters
     */
    public async assembleDocument(requestObj: model.AssembleDocumentRequest): Promise<model.GroupDocsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling assembleDocument.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/assembly/assemble";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.assembleOptions' is not undefined
        if (requestObj.assembleOptions === undefined) {
            throw new Error('Required parameter "requestObj.assembleOptions" was undefined when calling assembleDocument.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: ObjectSerializer.serialize(requestObj.assembleOptions, requestObj.assembleOptions.constructor.name === "Object" ? "AssembleOptions" : requestObj.assembleOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.GroupDocsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/copy/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling copyFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/copy/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling copyFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling createFolder.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling createFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling deleteFile.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling deleteFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling deleteFolder.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling deleteFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise<model.GroupDocsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling downloadFile.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling downloadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.GroupDocsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise<model.GroupDocsIncomingMessage<model.FilesList>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling getFilesList.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling getFilesList.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FilesList");
        const result: model.GroupDocsIncomingMessage<model.FilesList> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of supported file formats.
     * @param requestObj contains request parameters
     */
    public async getSupportedFileFormats(requestObj: model.GetSupportedFileFormatsRequest): Promise<model.GroupDocsIncomingMessage<model.FileFormatsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSupportedFileFormats.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/assembly/formats";
        const queryParameters: any = {};
        
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FileFormatsResponse");
        const result: model.GroupDocsIncomingMessage<model.FileFormatsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/move/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling moveFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/move/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling moveFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise<model.GroupDocsIncomingMessage<model.FilesUploadResult>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not undefined
        if (requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.file' is not null
        if (requestObj.file === null) {
            throw new Error('Required parameter "requestObj.file" was null when calling uploadFile.');
        }

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling uploadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        const result: model.GroupDocsIncomingMessage<model.FilesUploadResult> = {body, response};
        return Promise.resolve(result);
    }

}
