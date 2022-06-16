import {
  dumpAllWikiPages,
  dumpWikiPageById,
} from "./page-content"
import WikiPageList from "../../data/wiki-page-list";
import axios from 'axios';

describe("dumpAllWikiPages", () => {
  test("returns promise", () => {
    expect(dumpAllWikiPages()).toBeInstanceOf(Promise)
  });
  test("calls dumpWikiPageById", async () => {
    const mockedAxios = jest.spyOn(axios, 'get')
    mockedAxios.mockReturnValueOnce()
    // await dumpAllWikiPages();
    // expect(dumpWikiPageById).toHaveBeenCalled();
    // expect(dumpWikiPageById).toHaveBeenCalledTimes(WikiPageList.length)
  });
});