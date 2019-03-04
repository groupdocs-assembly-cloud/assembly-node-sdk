import { expect } from 'chai';
import { readFileSync } from 'fs';
import 'mocha';
import { Request } from '../src/model/model'
import { remoteBaseTestDataFolder, initializeStorageApi, initializeAssemblyApi, localBaseTestDataFolder } from "./baseTest";
import { MatchStats, TeamStats, QuarterStats } from "./dto/index";


function getMatchStats(
    team1Name: string,
    team2Name: string,
    team1QuarterStats: TeamStats[],
    team2QuarterStats: TeamStats[]): MatchStats {
    let quarterStats: QuarterStats[] = [];
    for (let i = 0; i < 4; i++) {
        quarterStats.push(new QuarterStats(i + 1, team1QuarterStats[i], team2QuarterStats[i]));
    }

    return new MatchStats(team1Name, team2Name, quarterStats);
}

function getSingleMatchStats(): MatchStats {
    let team1 = [
        new TeamStats(27, 36.7, 45.3),
        new TeamStats(21, 33, 40.5),
        new TeamStats(33, 39.1, 42),
        new TeamStats(29, 35.1, 43.5)
    ],
        team2 = [
            new TeamStats(23, 35.5, 44),
            new TeamStats(26, 34, 41.7),
            new TeamStats(25, 25.9, 35.9),
            new TeamStats(33, 36.5, 51),
        ];

    return getMatchStats(
        "Cleveland Cavaliers",
        "Golden State Warriors",
        team1,
        team2
    );
}

describe("postAssemble function", () => {
    it("should return non empty document stream", () => {
        const storageApi = initializeStorageApi();
        const assemblyApi = initializeAssemblyApi();

        const fileName = "TestAllChartTypes.docx";
        const dataName = "Teams.json";
        let str = JSON.stringify({ SaveFormat: "pdf" });
        str += JSON.stringify(getSingleMatchStats());
        return new Promise((resolve) => {
            storageApi.PutCreate(remoteBaseTestDataFolder + "GroupDocs.Assembly" + "/" + fileName,
                null, null,
                localBaseTestDataFolder + "/" + fileName, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                })
        }).then(() => {
            const request = new Request({
                name: fileName,
                folder: remoteBaseTestDataFolder + "GroupDocs.Assembly",
                data: readFileSync(localBaseTestDataFolder + dataName),
                saveOptions: {saveFormat: 'docx'}
            });

            return assemblyApi.postAssembleDocument(request).then((result) => {
                expect(result.response.statusCode).to.equal(200);
                expect(result.body.byteLength).to.greaterThan(0);
            })
        })
    })
});


