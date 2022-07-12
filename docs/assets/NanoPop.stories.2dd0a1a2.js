import{i as o,t as r}from"./web.a6138b5f.js";const l=r("<div></div>");console.log(["top","right","bottom","left"].reduce((e,t)=>[...e,["start","middle","end"].map(n=>`${t}-${n}`)],[]));var d={parameters:{storySource:{source:`import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(\`<div></div>\`, 2);

console.log(["top", "right", "bottom", "left"].reduce((result, sideA) => {
  return [...result, ["start", "middle", "end"].map(sideB => \`\${sideA}-\${sideB}\`)];
}, []));
export default {
  title: "Amyda/NanoPop",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    margin: {
      control: "number",
      defaultValue: 8
    },
    position: {
      control: {
        type: "select"
      },
      options: ["top", "right", "bottom", "left"].reduce((result, sideA) => {
        return [...result, ["start", "middle", "end"].map(sideB => \`\${sideA}-\${sideB}\`)];
      }, []),
      defaultValue: "top-start"
    } // backgroundColor: { control: "color" },
    // children: { control: "text", defaultValue: "" },
    // onClick: { action: "onClick" },
    // primary: { control: "boolean" },
    // size: {
    // 	control: { type: "select" },
    // 	options: ["small", "medium", "large"],
    // },

  }
};

const Template = props => {
  // You can either use a function to create DOM elements or use a plain html string!
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _$insert(_el$, () => props.children);

    return _el$;
  })();
};

export const Default = Template.bind({});
Default.args = {};`,locationsMap:{default:{startLoc:{col:17,line:37},endLoc:{col:1,line:46},startBody:{col:17,line:37},endBody:{col:1,line:46}}}}},title:"Amyda/NanoPop",argTypes:{margin:{control:"number",defaultValue:8},position:{control:{type:"select"},options:["top","right","bottom","left"].reduce((e,t)=>[...e,["start","middle","end"].map(n=>`${t}-${n}`)],[]),defaultValue:"top-start"}}};const s=e=>(()=>{const t=l.cloneNode(!0);return o(t,()=>e.children),t})(),a=s.bind({});a.args={};const p=["Default"];export{a as Default,p as __namedExportsOrder,d as default};
//# sourceMappingURL=NanoPop.stories.2dd0a1a2.js.map
