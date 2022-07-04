import{i as n,t as r,c as e}from"./web.4f37df11.js";const i=r('<button type="button" class="button"></button>'),a=t=>(()=>{const o=i.cloneNode(!0);return n(o,()=>t.children),o})();var u={parameters:{storySource:{source:`import { createComponent as _$createComponent } from "solid-js/web";
import { Button } from "./Button"; // More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export

export default {
  title: "Amyda/Button",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    children: {
      control: "text",
      defaultValue: "Button"
    } // onClick: { action: "onClick" },
    // primary: { control: "boolean" },
    // size: {
    // 	control: { type: "select" },
    // 	options: ["small", "medium", "large"],
    // },

  }
}; // // More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args

const Template = props => {
  // You can either use a function to create DOM elements or use a plain html string!
  return _$createComponent(Button, {
    get children() {
      return props.children;
    }

  });
}; // export const Primary = Template.bind({
// 	test: 1234,
// });
// // More on args: https://storybook.js.org/docs/html/writing-stories/args
// // Primary.args = {
// // 	primary: true,
// // 	label: "Button",
// // };


export const Default = Template.bind({});
Default.args = {};`,locationsMap:{default:{startLoc:{col:17,line:22},endLoc:{col:1,line:30},startBody:{col:17,line:22},endBody:{col:1,line:30}}}}},title:"Amyda/Button",argTypes:{children:{control:"text",defaultValue:"Button"}}};const s=t=>e(a,{get children(){return t.children}}),c=s.bind({});c.args={};const p=["Default"];export{c as Default,p as __namedExportsOrder,u as default};
//# sourceMappingURL=Button.stories.7fb65674.js.map
