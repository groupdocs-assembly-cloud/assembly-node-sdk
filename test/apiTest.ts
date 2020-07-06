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
import { AssembleDocumentRequest, AssembleOptions, TemplateFileInfo, UploadFileRequest } from "../src/model/model";
import { initializeAssemblyApi, localBaseTestDataFolder, remoteBaseTestDataFolder } from "./baseTest";

import { expect } from "chai";
import { createReadStream, readFileSync } from "fs";
import "mocha";

describe("postAssemble function", () => {
    it("should return non empty document stream", () => {
        const assemblyApi = initializeAssemblyApi();

        const fileName = "TestAllChartTypes.docx";
        const dataName = "Teams.json";
        return new Promise((resolve) => {
            const request = new UploadFileRequest({
                file: createReadStream(localBaseTestDataFolder + "/" + fileName),
                path: remoteBaseTestDataFolder + "GroupDocs.Assembly" + "/" + fileName,
            });
            
            assemblyApi.uploadFile(request).then((result) => {
                expect(result.response.statusCode).to.equal(200);
                resolve();
            });
        }).then(() => {
            const assembleOptionsData = new AssembleOptions({ 
                saveFormat: "pdf", 
                reportData: readFileSync(localBaseTestDataFolder + dataName, "utf8"),
                templateFileInfo: new TemplateFileInfo({
                    filePath: remoteBaseTestDataFolder + "GroupDocs.Assembly" + "/" + fileName,
                }),
            });
            const request = new AssembleDocumentRequest({
                assembleOptions: assembleOptionsData,
            });

            return assemblyApi.assembleDocument(request)
			.then((result) => {
                expect(result.response.statusCode).to.equal(200);
                expect(result.body.byteLength).to.greaterThan(0);
            });
        });
    });
});
