import { SSTConfig } from "sst";
// import { NextjsSite } from "sst/constructs";
import { NextjsSite } from "nextsite";


export default {
  config(_input) {
    return {
      name: "umami",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site")

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;