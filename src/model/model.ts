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
import { IncomingMessage } from "http";
import { Readable } from "stream";

/**
 * Generic class for GroupDocs.Assembly Cloud API response
 */
export class GroupDocsIncomingMessage<T> {
    /**
     * Gets or sets raw response
     */
    public response: IncomingMessage;
    
    /**
     * Get or set parsed response
     */
    public body: T;
}

/**
 * Attribute description
 */
export class AttributeInfo {
    /**
     * Gets or sets attribute name
     */
    public name: string;
    
    /**
     * Gets or sets attribute base name
     */
    public baseName: string;
    
    /**
     * Gets or sets attribute type name
     */
    public type: string;
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "requestId",
            baseName: "RequestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "Date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The empty type used as a flag.             
 */
export class FileResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileResponse.attributeTypeMap;
    }

    public constructor(init?: Partial<FileResponse>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "value",
            baseName: "Value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder .
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "uploaded",
            baseName: "Uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "Errors",
            type: "Array<StorageApiError>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<StorageApiError>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Format description.
 */
export class Format {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "fileFormat",
            baseName: "FileFormat",
            type: "string",
        },        
        {
            name: "extension",
            baseName: "Extension",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Format.attributeTypeMap;
    }

    /**
     * File format.
     */
    public fileFormat: string;
    
    /**
     * File extension.
     */
    public extension: string;
    
    public constructor(init?: Partial<Format>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes object which contains list of supported file formats.
 */
export class FormatCollection {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "formats",
            baseName: "Formats",
            type: "Array<Format>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormatCollection.attributeTypeMap;
    }

    /**
     * Supported file formats.
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatCollection>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Save options data which is using for specifying additional save options, like save format and etc.
 */
export class LoadSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "saveFormat",
            baseName: "SaveFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LoadSaveOptionsData.attributeTypeMap;
    }

    /**
     * Save format for assembled document
     */
    public saveFormat: string;
    
    public constructor(init?: Partial<LoadSaveOptionsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class StorageApiError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "code",
            baseName: "Code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "Message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "Description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "InnerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageApiError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<StorageApiError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "IsFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "ModifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "Size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "Path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified .
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

const enumsMap = {
};

const typeMap = {
            ErrorDetails,
            FileResponse,
            FilesList,
            FilesUploadResult,
            Format,
            FormatCollection,
            LoadSaveOptionsData,
            StorageApiError,
            StorageFile,
};

export {enumsMap, typeMap};

/**
 * Request model for FileCopyFile operation.
 */
export class FileCopyFileRequest {
    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source file's path e.g. '/Folder 1/file.ext' or '/Bucket/Folder 1/file.ext'
     */
    public srcPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(init?: Partial<FileCopyFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for FileDeleteFile operation.
 */
export class FileDeleteFileRequest {
    /**
     * Path of the file including file name and extension e.g. /Folder1/file.ext
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(init?: Partial<FileDeleteFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for FileDownloadFile operation.
 */
export class FileDownloadFileRequest {
    /**
     * Path of the file including the file name and extension e.g. /folder1/file.ext
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(init?: Partial<FileDownloadFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for FileMoveFile operation.
 */
export class FileMoveFileRequest {
    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source file's path e.g. '/Folder 1/file.ext' or '/Bucket/Folder 1/file.ext'
     */
    public srcPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(init?: Partial<FileMoveFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for FileUploadFile operation.
 */
export class FileUploadFileRequest {
    /**
     * File to upload
     */
    public fileData: Readable;

    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext              If the content is multipart and path does not contains the file name it tries to get them from filename parameter              from Content-Disposition header.
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<FileUploadFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for FolderCopyFolder operation.
 */
export class FolderCopyFolderRequest {
    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source folder path e.g. /Folder1
     */
    public srcPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(init?: Partial<FolderCopyFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for FolderCreateFolder operation.
 */
export class FolderCreateFolderRequest {
    /**
     * Target folder's path e.g. Folder1/Folder2/. The folders will be created recursively
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<FolderCreateFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for FolderDeleteFolder operation.
 */
export class FolderDeleteFolderRequest {
    /**
     * Folder path e.g. /Folder1s
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(init?: Partial<FolderDeleteFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for FolderGetFilesList operation.
 */
export class FolderGetFilesListRequest {
    /**
     * Folder path e.g. /Folder1
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<FolderGetFilesListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for FolderMoveFolder operation.
 */
export class FolderMoveFolderRequest {
    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source folder path e.g. /Folder1
     */
    public srcPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(init?: Partial<FolderMoveFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSupportedFileFormats operation.
 */
export class GetSupportedFileFormatsRequest {
    
    public constructor(init?: Partial<GetSupportedFileFormatsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostAssembleDocument operation.
 */
export class PostAssembleDocumentRequest {
    /**
     * File name of template, which is located on a storage
     */
    public name: string;

    /**
     * Report data in JSON or XML format
     */
    public data: Readable;

    /**
     * Save options in json format
     */
    public saveOptions: LoadSaveOptionsData;

    /**
     * Folder path where template file is located(on a storage)
     */
    public folder: string;

    /**
     * Result name of built document
     */
    public destFileName: string;
    
    public constructor(init?: Partial<PostAssembleDocumentRequest>) {        
        Object.assign(this, init);
    } 
}
