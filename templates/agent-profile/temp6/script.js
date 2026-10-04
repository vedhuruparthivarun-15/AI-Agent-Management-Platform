
const KEY="agentflow-agents-v1";
const defaults=[
 {id:"AG-001",name:"Nova Support",type:"Customer Support",description:"Handles customer questions and support requests.",status:"Active",permissions:["Read Data","Execute Tasks"]},
 {id:"AG-002",name:"Atlas Analyst",type:"Data Analyst",description:"Analyzes datasets and prepares business insights.",status:"Idle",permissions:["Read Data","Write Data"]},
 {id:"AG-003",name:"Echo Assistant",type:"Automation",description:"Automates repetitive communication workflows.",status:"Active",permissions:["Read Data","Execute Tasks"]},
 {id:"AG-004",name:"Orion Research",type:"Research",description:"Collects and summarizes research information.",status:"Offline",permissions:["Read Data"]}
];
let agents=JSON.parse(localStorage.getItem(KEY)||"null")||defaults;
function saveAgents(){localStorage.setItem(KEY,JSON.stringify(agents))}
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function statusClass(s){return s==="Active"?"active":s==="Idle"?"idle":"offline"}
function agentOptions(){return agents.map(a=>`<option value="${esc(a.id)}">${esc(a.id)} · ${esc(a.name)}</option>`).join("")}
function getAgent(id){return agents.find(a=>a.id===id)}
pick.innerHTML=agentOptions();function render(){const a=getAgent(pick.value)||agents[0];dash.innerHTML=`<article class="ui-card"><span class="template-kicker">IDENTITY</span><h2>${esc(a.name)}</h2><p>${esc(a.description)}</p></article><article class="ui-card"><span class="template-kicker">CURRENT STATUS</span><strong style="display:block;margin-top:12px"><span class="status ${statusClass(a.status)}">${esc(a.status)}</span></strong></article><article class="ui-card"><span class="template-kicker">PERMISSIONS</span><strong style="display:block;margin-top:12px">${a.permissions.length}</strong><p>Assigned capabilities</p></article>`}pick.addEventListener("change",render);render();