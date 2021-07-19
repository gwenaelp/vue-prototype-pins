import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("Demo", module).add("Demo2", () => {
  return {
    template: `
      <div>
        <prototype-pins>
          content there
           <prototype-pin label="A" x="50px" y="50px">
           test helpxy
          </prototype-pin>
          <prototype-pin label="B" x="150px" y="150px">
           help 2
          </prototype-pin>
        </prototype-pins>
      </div>
    `
  };
});
