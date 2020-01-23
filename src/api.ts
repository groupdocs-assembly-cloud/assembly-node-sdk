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
import http = require("http");
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
     * Copy file
     * @param requestObj contains request parameters
     */
    public async fileCopyFile(requestObj: model.FileCopyFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling fileCopyFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/copy/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling fileCopyFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling fileCopyFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling fileCopyFile.');
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
     * Delete file
     * @param requestObj contains request parameters
     */
    public async fileDeleteFile(requestObj: model.FileDeleteFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling fileDeleteFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling fileDeleteFile.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling fileDeleteFile.');
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
     * Download file
     * @param requestObj contains request parameters
     */
    public async fileDownloadFile(requestObj: model.FileDownloadFileRequest): Promise<model.GroupDocsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling fileDownloadFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling fileDownloadFile.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling fileDownloadFile.');
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
     * Move file
     * @param requestObj contains request parameters
     */
    public async fileMoveFile(requestObj: model.FileMoveFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling fileMoveFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/move/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling fileMoveFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling fileMoveFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling fileMoveFile.');
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
     * Upload file
     * @param requestObj contains request parameters
     */
    public async fileUploadFile(requestObj: model.FileUploadFileRequest): Promise<model.GroupDocsIncomingMessage<model.FilesUploadResult>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling fileUploadFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.fileData' is not undefined
        if (requestObj.fileData === undefined) {
            throw new Error('Required parameter "requestObj.fileData" was undefined when calling fileUploadFile.');
        }

        // verify required parameter 'requestObj.fileData' is not null
        if (requestObj.fileData === null) {
            throw new Error('Required parameter "requestObj.fileData" was null when calling fileUploadFile.');
        }

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling fileUploadFile.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling fileUploadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.fileData !== undefined) {
            formParams.FileData = requestObj.fileData;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            formData: formParams,
        };
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        const result: model.GroupDocsIncomingMessage<model.FilesUploadResult> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async folderCopyFolder(requestObj: model.FolderCopyFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling folderCopyFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/copy/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling folderCopyFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling folderCopyFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling folderCopyFolder.');
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
    public async folderCreateFolder(requestObj: model.FolderCreateFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling folderCreateFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling folderCreateFolder.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling folderCreateFolder.');
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
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async folderDeleteFolder(requestObj: model.FolderDeleteFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling folderDeleteFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling folderDeleteFolder.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling folderDeleteFolder.');
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
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async folderGetFilesList(requestObj: model.FolderGetFilesListRequest): Promise<model.GroupDocsIncomingMessage<model.FilesList>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling folderGetFilesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling folderGetFilesList.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling folderGetFilesList.');
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
     * Move folder
     * @param requestObj contains request parameters
     */
    public async folderMoveFolder(requestObj: model.FolderMoveFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling folderMoveFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/assembly/storage/folder/move/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling folderMoveFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling folderMoveFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling folderMoveFolder.');
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
     * Retrieves list of supported file formats.
     * @param requestObj contains request parameters
     */
    public async getSupportedFileFormats(requestObj: model.GetSupportedFileFormatsRequest): Promise<model.GroupDocsIncomingMessage<model.FormatCollection>> {
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
        const body =  ObjectSerializer.deserialize(response.body, "FormatCollection");
        const result: model.GroupDocsIncomingMessage<model.FormatCollection> = {body, response};
        return Promise.resolve(result);
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
