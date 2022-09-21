"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75185],{26510:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-7edcd76e",path:"/devices/IM6001-MPP01.html",title:"SmartThings IM6001-MPP01 control via MQTT",lang:"en-US",frontmatter:{title:"SmartThings IM6001-MPP01 control via MQTT",description:"Integrate your SmartThings IM6001-MPP01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Contact (binary)",slug:"contact-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Moving (binary)",slug:"moving-binary",children:[]},{level:3,title:"X_axis (numeric)",slug:"x-axis-numeric",children:[]},{level:3,title:"Y_axis (numeric)",slug:"y-axis-numeric",children:[]},{level:3,title:"Z_axis (numeric)",slug:"z-axis-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/IM6001-MPP01.md",git:{updatedTime:1663774242e3}}},6013:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var i=a(66252);const r=(0,i.uE)('<h1 id="smartthings-im6001-mpp01" tabindex="-1"><a class="header-anchor" href="#smartthings-im6001-mpp01" aria-hidden="true">#</a> SmartThings IM6001-MPP01</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>IM6001-MPP01</td></tr><tr><td>Vendor</td><td>SmartThings</td></tr><tr><td>Description</td><td>Multipurpose sensor (2018 model)</td></tr><tr><td>Exposes</td><td>temperature, contact, battery_low, tamper, battery, moving, x_axis, y_axis, z_axis, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/IM6001-MPP01.jpg" alt="SmartThings IM6001-MPP01"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>When pairing, make sure to keep the sensor awake for 20 seconds by opening and closing the contact every second. Reset Procedure - https://www.youtube.com/watch?v=yT3iVHuO7Qk</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),o=(0,i.Uk)("How to use device type specific configuration"),d=(0,i.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="moving-binary" tabindex="-1"><a class="header-anchor" href="#moving-binary" aria-hidden="true">#</a> Moving (binary)</h3><p>Indicates if the device is moving. Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> moving is ON, if <code>false</code> OFF.</p><h3 id="x-axis-numeric" tabindex="-1"><a class="header-anchor" href="#x-axis-numeric" aria-hidden="true">#</a> X_axis (numeric)</h3><p>Accelerometer X value. Value can be found in the published state on the <code>x_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="y-axis-numeric" tabindex="-1"><a class="header-anchor" href="#y-axis-numeric" aria-hidden="true">#</a> Y_axis (numeric)</h3><p>Accelerometer Y value. Value can be found in the published state on the <code>y_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="z-axis-numeric" tabindex="-1"><a class="header-anchor" href="#z-axis-numeric" aria-hidden="true">#</a> Z_axis (numeric)</h3><p>Accelerometer Z value. Value can be found in the published state on the <code>z_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),n={},c=(0,a(83744).Z)(n,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[o])),_:1})])]),d],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);