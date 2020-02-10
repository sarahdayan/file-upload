import { shallowMount } from "@vue/test-utils";
import FileLoader from "@/components/FileLoader";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(FileLoader);
});

afterEach(() => {
  wrapper.destroy();
});

describe("FileLoader", () => {});
