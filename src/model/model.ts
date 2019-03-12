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

/**
 * The empty type used as a flag.             
 */
export class FileResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
 * Save options data which is using for specifying additional save options, like save format and etc.
 */
export class LoadSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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

const enumsMap = {
};

const typeMap = {
            FileResponse,
            LoadSaveOptionsData,
};

export {enumsMap, typeMap};

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
    public data: Buffer;

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
