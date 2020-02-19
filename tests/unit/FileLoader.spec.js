import { shallowMount } from "@vue/test-utils";
import FileLoader from "@/components/FileLoader";

let wrapper = null;

const files = [
  {
    name: "Document.pdf",
    size: 3200000
  },
  {
    name: "Document_2.pdf",
    size: 4300000
  }
];

beforeEach(() => {
  wrapper = shallowMount(FileLoader, {
    propsData: {
      files,
      progression: 50
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("FileLoader", () => {
  it("renders how many files are being uploaded", () => {
    expect(wrapper.find(".title").text()).toBe("Uploading 2 files");
  });
  it("renders the total file size", () => {
    expect(wrapper.find(".size").text()).toBe("7.5 MB");
  });
  it("renders the progression as a progressbar", () => {
    expect(wrapper.find(".progressbar").attributes("style")).toContain(
      "width: 50%"
    );
  });
  it("renders the size as kilobytes when under 1000", () => {
    wrapper = shallowMount(FileLoader, {
      propsData: {
        files: [
          {
            name: "Document.pdf",
            size: 320
          },
          {
            name: "Document_2.pdf",
            size: 430
          }
        ]
      }
    });

    expect(wrapper.find(".size").text()).toBe("0.75 KB");
  });
  it("renders the size as gigabytes when over 9999999", () => {
    wrapper = shallowMount(FileLoader, {
      propsData: {
        files: [
          {
            name: "Document.pdf",
            size: 9000000000
          }
        ]
      }
    });

    expect(wrapper.find(".size").text()).toBe("9 GB");
  });
});
