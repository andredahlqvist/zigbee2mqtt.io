"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[22753],{24054:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-4c2b535f",path:"/devices/DG15S-1BW.html",title:"Leviton DG15S-1BW control via MQTT",lang:"en-US",frontmatter:{title:"Leviton DG15S-1BW control via MQTT",description:"Integrate your Leviton DG15S-1BW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-09-01T18:11:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/DG15S-1BW.md",git:{updatedTime:1663774242e3}}},78589:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const o=(0,i(66252).uE)('<h1 id="leviton-dg15s-1bw" tabindex="-1"><a class="header-anchor" href="#leviton-dg15s-1bw" aria-hidden="true">#</a> Leviton DG15S-1BW</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>DG15S-1BW</td></tr><tr><td>Vendor</td><td>Leviton</td></tr><tr><td>Description</td><td>Decora smart Zigbee 3.0 certified 15A switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/DG15S-1BW.jpg" alt="Leviton DG15S-1BW"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},a=(0,i(83744).Z)(d,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);