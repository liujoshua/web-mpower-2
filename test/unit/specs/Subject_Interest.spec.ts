import { expect } from "chai";

import Vue from "vue";
import Subject_Interest from "@/components/Subject_Interest.vue";

describe("Subject_Interest.vue", () => {
  it("should render correct contents", () => {
    const vm = new Vue({
      el: document.createElement("div"),
      render: (h) => h(Subject_Interest),
    });
    const subtitle: Element | null = vm.$el.querySelector("subtitle");
    if (subtitle !== null) {
      expect(subtitle.textContent).to.equal("Welcome to Your Vue.js App");
    }
  });
});
