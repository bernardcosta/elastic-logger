import{_ as o,r as i,o as t,c as l,a as e,b as a,F as r,d as n,e as c}from"./app.25a3213a.js";const d={},p=e("h1",{id:"run-api-on-your-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#run-api-on-your-server","aria-hidden":"true"},"#"),n(" Run API on your server")],-1),u=e("p",null,"Docker & docker-compose are needed to run elastic-logger as a server",-1),v=e("p",null,"Follow the official installation instructions:",-1),m={href:"https://docs.docker.com/desktop/linux/install/",target:"_blank",rel:"noopener noreferrer"},h=n("Docker installation instructions"),b={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},g=n("Docker compose installation instructions"),k=c(`<p>Next, clone this repository on your server:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:bernardcosta/elastic-logger.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>build &amp; run the docker container with <code>docker-compose.yml</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up -d <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default the API will be running on <code>127.0.0.1:3000</code> by port binding to the container&#39;s <code>3000</code> . This can be changed by adding this variable in a <code>.env </code> file:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">NODE_LISTEN</span><span class="token operator">=</span><span class="token operator">&lt;</span>some other IP<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>some other port<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After restarting the container, the API will be served on whatever the contents of <code>NODE_LISTEN</code> are.</p><h1 id="quick-local-dev-installation" tabindex="-1"><a class="header-anchor" href="#quick-local-dev-installation" aria-hidden="true">#</a> Quick local dev Installation</h1><p>The server can also be run without the container for dev purposes. Simply install an elasticsearch server locally and run the below setup.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Clone repository</span>
<span class="token function">git</span> clone git@github.com:bernardcosta/elastic-logger.git

<span class="token comment"># Go to project root</span>
<span class="token builtin class-name">cd</span> elastic-logger

<span class="token comment"># Install all dependencies</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># Install nodemon for monitoring during dev</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev nodemon

<span class="token comment"># Run the project</span>
nodemon index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function _(f,x){const s=i("ExternalLinkIcon");return t(),l(r,null,[p,u,v,e("ol",null,[e("li",null,[e("a",m,[h,a(s)])]),e("li",null,[e("a",b,[g,a(s)])])]),k],64)}var I=o(d,[["render",_],["__file","index.html.vue"]]);export{I as default};
