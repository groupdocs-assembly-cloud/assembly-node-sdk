This repository contains GroupDocs.Assembly Cloud SDK for Node.JS source code. This SDK allows you to work with GroupDocs.Assembly Cloud REST APIs in your Node.JS applications quickly and easily, with zero initial cost.

See [API Reference](https://apireference.groupdocs.cloud/assembly) for full API specification.

# Key Features
* API to Define Templates, Fetch Data Source, Insert Data in Template & Generate on the fly Reports.

## How to use the SDK?
The complete source code is available in this repository folder. You can either directly use it in your project via source code or get [nmpjs distribution](https://www.npmjs.com/package/groupdoc-sassembly-cloud) (recommended)

### Prerequisites

To use GroupDocs.Assembly for Cloud Node.JS SDK you need to register an account with [GroupDocs Cloud](https://www.groupdocs.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.groupdocs.cloud/applications). There is free quota available. For more details, see [GroupDocs Cloud Pricing](https://purchase.groupdocs.cloud/pricing).

### Installation

From the command line:

	npm install groupdoc-sassembly-cloud --save

### Sample usage

The examples below show how your application have to assemble document using GroupDocs.Assembly-Cloud library:
``` js
const { AssemblyApi, PostAssembleDocumentRequest } = require("groupdocs-assembly-cloud");

const assemblyApi = new AssemblyApi(AppSid, AppKey);

const assembleOptionsData = new AssembleOptions({ 
        saveFormat: "pdf", 
        reportData: readFileSync(pathToFile, "utf8"),
        templateFileInfo: new TemplateFileInfo({
            filePath: pathToRemoteFile,
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


```

[Tests](test) contain various examples of using the SDK. You have to create "testConfig.json" file in project root to run them.
"testConfig.json" has the following structure
``` json
{
    "AppSid": "Youre AppSid here",
    "AppKey": "Youre AppKey here",
    "BaseUrl": "http://api.groupdocs.cloud"
}
```
## Contact Us
[Product Page](https://products.groupdocs.cloud/assembly/nodejs) | [Documentation](https://docs.groupdocs.cloud/display/assemblycloud/Home) | [API Reference](https://apireference.groupdocs.cloud/assembly/) | [Code Samples](https://github.com/groupdocs-assembly-cloud/groupdocs-assembly-cloud-node) | [Blog](https://blog.groupdocs.cloud/category/assembly/) | [Free Support](https://forum.groupdocs.cloud/c/assembly) | [Free Trial](https://dashboard.groupdocs.cloud/applications)
