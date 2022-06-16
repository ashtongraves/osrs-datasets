import * as PageContent from "./dumpers/page-content"
import WikiPageList from "../data/wiki-page-list";
import {
  WikiPageSlim,
  WikiPageWithContent,
  WikiRequest,
} from "./wiki/request"

jest.mock('axios', () => {
  return {
    get: () => {
      return {
        "test": {
          "test": null
        }
      }
    }
  }
})

jest.mock("./wiki/request", () => {
  return {
    WikiRequest: {
      getRedirectsToPage: () => { return 1; },
      query: (parse: any) => {
        return new Promise ((resolve, reject) => {
          resolve({
            parse: {
              properties: [{
                name: "",
                "*": null
              }],
              text: { "*": "" },
              wikitext: { "*": "" }
            }
          })
        })
      }
    },
    WikiPageSlim: {},
    WikiPageWithContent: {},
  }
})

describe("page-content", () => {
  test("dumpAllWikiPages() returns promise", () => {
    expect(PageContent.dumpAllWikiPages()).toBeInstanceOf(Promise)
  });
  test("dumpWikiPageById", async () => {
    const fsSpy = jest.spyOn(require('fs'), 'writeFileSync');
    
    await PageContent.dumpWikiPageById(1);
    expect(fsSpy).toHaveBeenCalled();
  });
});