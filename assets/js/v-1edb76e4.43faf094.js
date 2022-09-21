"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1962],{43197:(s,e,n)=>{n.r(e),n.d(e,{data:()=>a});const a={key:"v-1edb76e4",path:"/guide/configuration/block-pass-list.html",title:"Device blocklist / passlist",lang:"en-US",frontmatter:{sidebarDepth:1,pageClass:"content-page"},excerpt:"",headers:[],filePathRelative:"guide/configuration/block-pass-list.md",git:{updatedTime:1663774242e3}}},25636:(s,e,n)=>{n.r(e),n.d(e,{default:()=>l});const a=(0,n(66252).uE)('<h1 id="device-blocklist-passlist" tabindex="-1"><a class="header-anchor" href="#device-blocklist-passlist" aria-hidden="true">#</a> Device blocklist / passlist</h1><p>You can define blocked devices as well as a list of devices allowed joining the network.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Optional: Block devices from the network (by ieeeAddr) (default: empty)</span>\n<span class="token key atrule">blocklist</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token string">&#39;0x000b57fffec6a5b2&#39;</span>\n\n<span class="token comment"># Optional: Allow only certain devices to join the network (by ieeeAddr)</span>\n<span class="token comment"># Note that all devices not on the passlist will be removed from the network!</span>\n<span class="token comment"># (default: empty)</span>\n<span class="token key atrule">passlist</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token string">&#39;0x000b57fffec6a5b3&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',3),t={},l=(0,n(83744).Z)(t,[["render",function(s,e){return a}]])},83744:(s,e)=>{e.Z=(s,e)=>{for(const[n,a]of e)s[n]=a;return s}}}]);