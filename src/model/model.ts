/*
* MIT License

* Copyright (c) 2021 Aspose Pty Ltd

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
 * Error class.             
 */
export class ApiError {

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
            name: "dateTime",
            baseName: "DateTime",
            type: "Date",
        },        
        {
            name: "innerError",
            baseName: "InnerError",
            type: "ApiError",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }

    /**
     * Gets or sets api error code.
     */
    public code: string;
    
    /**
     * Gets or sets error message.
     */
    public message: string;
    
    /**
     * Gets or sets error description.
     */
    public description: string;
    
    /**
     * Gets or sets server datetime.
     */
    public dateTime: Date;
    
    /**
     * Gets or sets inner error.
     */
    public innerError: ApiError;
    
    public constructor(init?: Partial<ApiError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Assemble options data which is using for specifying assemble options, like template name, save format, report data and etc.
 */
export class AssembleOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "templateFileInfo",
            baseName: "TemplateFileInfo",
            type: "TemplateFileInfo",
        },        
        {
            name: "saveFormat",
            baseName: "SaveFormat",
            type: "string",
        },        
        {
            name: "reportData",
            baseName: "ReportData",
            type: "string",
        },        
        {
            name: "outputPath",
            baseName: "OutputPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AssembleOptions.attributeTypeMap;
    }

    /**
     * Gets or sets the template name which is located on storage.
     */
    public templateFileInfo: TemplateFileInfo;
    
    /**
     * Gets or sets a save format for assembled document.
     */
    public saveFormat: string;
    
    /**
     * Gets or sets a data for report.
     */
    public reportData: string;
    
    /**
     * Gets or sets result path of a built document.
     */
    public outputPath: string;
    
    public constructor(init?: Partial<AssembleOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base class for all responses.
 */
export class AssemblyResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "requestId",
            baseName: "RequestId",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AssemblyResponse.attributeTypeMap;
    }

    /**
     * Gets or sets request Id.
     */
    public requestId: string;
    
    public constructor(init?: Partial<AssemblyResponse>) {
        
        Object.assign(this, init);
    }        
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
            name: "errorDateTime",
            baseName: "ErrorDateTime",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id.
     */
    public requestId: string;
    
    /**
     * Error datetime.
     */
    public errorDateTime: Date;
    
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
     * Gets or sets file format.
     */
    public fileFormat: string;
    
    /**
     * Gets or sets file extension.
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
     * Gets or sets supported file formats.
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatCollection>) {
        
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

/**
 * TemplateFileInfo dto.             
 */
export class TemplateFileInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "filePath",
            baseName: "FilePath",
            type: "string",
        },        
        {
            name: "storageName",
            baseName: "StorageName",
            type: "string",
        },        
        {
            name: "versionId",
            baseName: "VersionId",
            type: "string",
        },        
        {
            name: "password",
            baseName: "Password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TemplateFileInfo.attributeTypeMap;
    }

    /**
     * Gets or sets path to file.             
     */
    public filePath: string;
    
    /**
     * Gets or sets the name of storage.             
     */
    public storageName: string;
    
    /**
     * Gets or sets the name of storage.             
     */
    public versionId: string;
    
    /**
     * Gets or sets the password.             
     */
    public password: string;
    
    public constructor(init?: Partial<TemplateFileInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error response for exceptions.             
 */
export class AssemblyApiErrorResponse extends AssemblyResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "error",
            baseName: "Error",
            type: "ApiError",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssemblyApiErrorResponse.attributeTypeMap);
    }

    /**
     * Gets or sets error.
     */
    public error: ApiError;
    
    public constructor(init?: Partial<AssemblyApiErrorResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Response with file formats.
 */
export class FileFormatsResponse extends AssemblyResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "fileFormats",
            baseName: "FileFormats",
            type: "FormatCollection",
        },        
        {
            name: "code",
            baseName: "Code",
            type: "number",
        },        
        {
            name: "status",
            baseName: "Status",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileFormatsResponse.attributeTypeMap);
    }

    /**
     * Gets or sets file formats.
     */
    public fileFormats: FormatCollection;
    
    /**
     * Gets response status code.
     */
    public code: number;
    
    /**
     * Gets or sets response status.
     */
    public status: string;
    
    public constructor(init?: Partial<FileFormatsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
};

const typeMap = {
            ApiError,
            AssembleOptions,
            AssemblyResponse,
            ErrorDetails,
            FileResponse,
            FilesList,
            FilesUploadResult,
            Format,
            FormatCollection,
            StorageApiError,
            StorageFile,
            TemplateFileInfo,
            AssemblyApiErrorResponse,
            FileFormatsResponse,
};

export {enumsMap, typeMap};

/**
 * Request model for AssembleDocument operation.
 */
export class AssembleDocumentRequest {
    /**
     * Assemble Options. It should be JSON or XML with TemplateFileInfo, SaveFormat, ReportData and etc.             
     */
    public assembleOptions: AssembleOptions;
    
    public constructor(init?: Partial<AssembleDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
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
    
    public constructor(init?: Partial<CopyFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
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
    
    public constructor(init?: Partial<CopyFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Target folder's path e.g. Folder1/Folder2/. The folders will be created recursively
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<CreateFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
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
    
    public constructor(init?: Partial<DeleteFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
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
    
    public constructor(init?: Partial<DeleteFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
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
    
    public constructor(init?: Partial<DownloadFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. /Folder1
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<GetFilesListRequest>) {        
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
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
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
    
    public constructor(init?: Partial<MoveFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
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
    
    public constructor(init?: Partial<MoveFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * File to upload
     */
    public fileContent: Readable;

    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext              If the content is multipart and path does not contains the file name it tries to get them from filename parameter              from Content-Disposition header.
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<UploadFileRequest>) {        
        Object.assign(this, init);
    } 
}
