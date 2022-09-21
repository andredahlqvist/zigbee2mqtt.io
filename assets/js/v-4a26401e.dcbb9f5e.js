"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45228],{75897:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-4a26401e",path:"/devices/4500994.html",title:"Connecte 4500994 control via MQTT",lang:"en-US",frontmatter:{title:"Connecte 4500994 control via MQTT",description:"Integrate your Connecte 4500994 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-04-30T08:00:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"State (binary)",slug:"state-binary",children:[]},{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Switch",slug:"switch-1",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"External_temperature (numeric)",slug:"external-temperature-numeric",children:[]},{level:3,title:"Hysteresis (numeric)",slug:"hysteresis-numeric",children:[]},{level:3,title:"Max_temperature_protection (numeric)",slug:"max-temperature-protection-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/4500994.md",git:{updatedTime:1663774242e3}}},91714:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const a=(0,o(66252).uE)('<h1 id="connecte-4500994" tabindex="-1"><a class="header-anchor" href="#connecte-4500994" aria-hidden="true">#</a> Connecte 4500994</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>4500994</td></tr><tr><td>Vendor</td><td>Connecte</td></tr><tr><td>Description</td><td>Smart thermostat</td></tr><tr><td>Exposes</td><td>state, lock (state), switch (state), climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, sensor), external_temperature, hysteresis, max_temperature_protection, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/4500994.jpg" alt="Connecte 4500994"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary" aria-hidden="true">#</a> State (binary)</h3><p>On/off state of the switch. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-1" tabindex="-1"><a class="header-anchor" href="#switch-1" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>away_mode</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: &quot;ON&quot;}</code>, <code>{&quot;away_mode&quot;: &quot;OFF&quot;}</code> or <code>{&quot;away_mode&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>, <code>sensor</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>, <code>auto</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code></li></ul><h3 id="external-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#external-temperature-numeric" aria-hidden="true">#</a> External_temperature (numeric)</h3><p>Current temperature measured on the external sensor (floor). Value can be found in the published state on the <code>external_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="hysteresis-numeric" tabindex="-1"><a class="header-anchor" href="#hysteresis-numeric" aria-hidden="true">#</a> Hysteresis (numeric)</h3><p>The difference between the temperature at which the thermostat switches off, and the temperature at which it switches on again.. Value can be found in the published state on the <code>hysteresis</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;hysteresis&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>9</code>.</p><h3 id="max-temperature-protection-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-protection-numeric" aria-hidden="true">#</a> Max_temperature_protection (numeric)</h3><p>Max guarding temperature. Value can be found in the published state on the <code>max_temperature_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_protection&quot;: NEW_VALUE}</code>. The minimal value is <code>20</code> and the maximum value is <code>95</code>. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),d={},i=(0,o(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);