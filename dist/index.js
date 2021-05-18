var{resolve:e}=require("path"),{walkthrough:t}=require("filewtf"),{readFileSync:r}=require("fs"),{from:i}=require("env-var"),n=require("conventional-changelog"),{setOutput:o,setFailed:s,debug:c,getInput:a}=require("@actions/core"),{omitBy:d,isUndefined:u}=require("lodash");const h=n,p=e=>new RegExp("^[^/]+/[^/]+$").test(e),g=e=>new RegExp("^refs/heads/").test(e),l=e=>new RegExp("^refs/pull/[0-9]+").test(e),f=e=>new RegExp("^refs/tags/").test(e),y=["workflow_dispatch"],w=i(process.env,{asRepoWithoutOwner:e=>{if(!p(e))throw new Error(`Repository ${e} is not valid`);const t=String(e).split("/");if(t.length<2)throw new Error('must contain at least one "/"');return t[1]},asGitHubRef:e=>{if(e){if(g(e))return e;if(l(e))return e;if(f(e))return e;throw new Error("must be a valid github ref")}throw new Error("GITHUB_REF not set")}});class R{constructor(){this.config={writerOpts:{},options:{preset:{name:"conventionalcommits",header:"# Changelog",issuePrefixes:["#"],issueUrlFormat:"{{host}}/{{owner}}/{{repository}}/issues/{{id}}",compareUrlFormat:"{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}",userUrlFormat:"{{host}}/{{user}}",types:[{type:"feat",hidden:!1,section:"Features"},{type:"feature",hidden:!1,section:"Features"},{type:"fix",hidden:!1,section:"Bug Fixes"},{type:"bug",hidden:!1,section:"Bug Fixes"},{type:"perf",hidden:!1,section:"Performance Improvements"},{type:"revert",hidden:!1,section:"Reverts"},{type:"docs",hidden:!1,section:"Documentation"},{type:"style",hidden:!1,section:"Styles"},{type:"chore",hidden:!1,section:"Chores"},{type:"node",hidden:!1,section:"Chores"},{type:"git",hidden:!1,section:"Chores"},{type:"refactor",hidden:!1,section:"Refactor"},{type:"ref",hidden:!1,section:"Refactor"},{type:"test",hidden:!1,section:"Tests"},{type:"build",hidden:!1,section:"Automation"},{type:"ci",hidden:!1,section:"Continuous Integration"},{type:"perf",hidden:!1},{type:"",hidden:!1,section:"Refactor"}]}}},this.ci=w.get("CI").default("false").asBool(),this.workspace=w.get("GITHUB_WORKSPACE").required(this.ci).example("src").asString(),this.repo=w.get("GITHUB_REPOSITORY").required().asRepoWithoutOwner(),this.owner=w.get("GITHUB_REPOSITORY_OWNER").required().example("github").asString(),this.ref=w.get("GITHUB_REF").required(this.ci).asGitHubRef(),this.sha=w.get("GITHUB_SHA").required(this.ci).asString(),this.apiUrl=w.get("GITHUB_API_URL").default("https://api.github.com").asString(),this.serverUrl=w.get("GITHUB_SERVER_URL").default("https://github.com").asString(),this.event=w.get("GITHUB_EVENT_NAME").required(this.ci).asEnum(y),this.token=w.get("GITHUB_TOKEN").required(this.ci).default(a("token")).asString()}}const m={};(function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function s(e){try{a(i.next(e))}catch(e){o(e)}}function c(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}a((i=i.apply(e,t||[])).next())}))})(void 0,void 0,void 0,(function*(){const e=new R;console.log(e.apiUrl);const t=d({preset:require(m(process.cwd(),"./preset.json")).preset,append:!1,releaseCount:0,skipUnstable:!1,outputUnreleased:!0,config:require(m(process.cwd(),"./preset.json"))},u);try{console.log(process.cwd()),c(`changelog options: ${JSON.stringify(t)}`);const e=yield(r=t,new Promise(((e,t)=>{const i=h(r);let n="";i.on("data",(e=>{const t=e.toString();n+=t})).on("error",(e=>{console.log(`Error: changelog ${e}`),t(e)})).on("end",(()=>e(n)))})));console.log(e),o("config","test")}catch(e){s(e)}var r})).then((()=>{}));
//# sourceMappingURL=index.js.map
