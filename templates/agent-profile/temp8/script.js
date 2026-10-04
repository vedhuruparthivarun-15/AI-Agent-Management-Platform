
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
pick.innerHTML=agentOptions();function render(){const a=getAgent(pick.value)||agents[0];details.innerHTML=`<div><small>Agent ID</small><b>${esc(a.id)}</b></div><div><small>Name</small><b>${esc(a.name)}</b></div><div><small>Type</small><b>${esc(a.type)}</b></div><div><small>Current Status</small><b>${esc(a.status)}</b></div><div><small>Description</small><b>${esc(a.description)}</b></div><div><small>Allowed Actions</small><b>${a.permissions.map(esc).join(", ")||"None"}</b></div>`}pick.addEventListener("change",render);render();