import{s as t,r as s,$ as e}from"./9e53947f.js";class i extends t{static get tag(){return"user-ip"}constructor(){super(),this.ip=null,this.ipLookUp="https://ip-fast.com/api/ip/?format=json&location=False"}static get properties(){return{ip:{type:String,reflect:!0}}}updated(t){t.forEach(((t,s)=>{if("ip"===s&&this[s]){const t=new CustomEvent("ip-changed",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:this.ip}});this.dispatchEvent(t)}}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),null===this.ip&&this.updateUserIP()}async updateUserIP(){return fetch(this.ipLookUp).then((t=>!!t.ok&&t.json())).then((t=>(this.ip=t.ip,t)))}static get styles(){return[s`:host{display:block}ul{margin:0 8px;list-style-type:square;font-size:20px}li{margin:0;padding:0}.ipaddress{font-style:var(--user-ip-ipaddress-font-style,italic)}`]}render(){return e` <ul> <li><strong class="ipaddress">IP address:</strong> ${this.ip}</li> <li></li> </ul>`}}customElements.define(i.tag,i);export{i as U};
