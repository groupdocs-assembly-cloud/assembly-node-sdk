# GroupDocs.Assembly.Cloud.Sdk - the C# library for the GroupDocs.Assembly for Cloud API References
This repository contains GroupDocs.Assembly Cloud SDK for Node.JS source code. This SDK allows you to work with GroupDocs.Assembly Cloud REST APIs in your Node.JS applications quickly and easily, with zero initial cost.

See [API Reference](https://apireference.groupdocs.cloud/) for full API specification.

## How to use the SDK?
The complete source code is available in this repository folder. You can either directly use it in your project via source code or get [nmpjs distribution](https://www.npmjs.com/package/asposewordscloud) (recommended)

### Prerequisites

To use GroupDocs.Assembly for Cloud Node.JS SDK you need to register an account with [GroupDocs Cloud](https://www.groupdocs.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.groupdocs.cloud/#/apps). There is free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.groupdocs.cloud/pricing).

### Installation

#### Install roupDocs.Assembly-Cloud via NuGet

#### Install Aspose.Words-Cloud via NPM

From the command line:

	npm install groupdocsassemblycloud --save

### Sample usage

The examples below show how your application have to assemble document using GroupDocs.Assembly-Cloud library:
``` js
const { AssemblyApi, PostAssembleDocumentRequest } = require("groupdocsassemblycloud");

const assemblyApi = new AssemblyApi(AppSid, AppKey);

const request = new PostAssembleDocumentRequest({
                name: fileName,
                folder: remoteBaseTestDataFolder + "GroupDocs.Assembly",
                data: readFileSync(localBaseTestDataFolder + dataName),
                saveOptions: {saveFormat: "docx"},
            });

assemblyApi.postAssembleDocument(request).then((result) => {
        console.log(result.body.code);   
    }).catch(function(err) {
    // Deal with an error
    console.log(err);
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
