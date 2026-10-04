
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
function render(){const q=search.value.toLowerCase();directory.innerHTML=agents.filter(a=>(a.id+" "+a.name+" "+a.type).toLowerCase().includes(q)).map(a=>`<div class="agent-row" style="padding:16px 0;border-bottom:1px solid #202638"><span class="avatar">${esc(a.name[0])}</span><div class="grow"><b>${esc(a.name)}</b><div class="muted">${esc(a.id)} · ${esc(a.type)}</div></div><span class="status ${statusClass(a.status)}">${esc(a.status)}</span></div>`).join("")||"<p class='muted'>No matching agents.</p>"}search.addEventListener("input",render);render();