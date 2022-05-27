import{_ as l,r as o,o as c,c as r,a as e,b as s,w as d,F as p,d as n,e as t}from"./app.e06f9581.js";const u={},h=e("h1",{id:"quick-local-dev-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-local-dev-installation","aria-hidden":"true"},"#"),n(" Quick local dev Installation")],-1),m=n("The server can also be run without the container for dev purposes. Simply install an "),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html",target:"_blank",rel:"noopener noreferrer"},_=n("elasticsearch server locally"),g=n(" and run the below setup."),b=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Clone repository</span>
<span class="token function">git</span> clone git@github.com:bernardcosta/elastic-logger.git

<span class="token comment"># Go to project root</span>
<span class="token builtin class-name">cd</span> elastic-logger

<span class="token comment"># Install all dependencies</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># Install nodemon for monitoring during dev</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev nodemon

<span class="token comment"># Run the project</span>
nodemon index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="self-host-elastic-logger" tabindex="-1"><a class="header-anchor" href="#self-host-elastic-logger" aria-hidden="true">#</a> Self-host elastic-logger</h1><p>Docker &amp; docker-compose are needed to run elastic-logger as a server</p><p>Follow the official installation instructions:</p>`,4),k={href:"https://docs.docker.com/desktop/linux/install/",target:"_blank",rel:"noopener noreferrer"},f=n("Docker installation instructions"),x={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},w=n("Docker compose installation instructions"),I=t(`<p>Next, clone this repository on your server:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:bernardcosta/elastic-logger.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>build &amp; run the docker container with <code>docker-compose.yml</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up -d <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default the API will be running on <code>127.0.0.1:3000</code> by port binding to the container&#39;s <code>3000</code> . This can be changed by adding this variable in a <code>.env </code> file at the root level directory:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">NODE_LISTEN</span><span class="token operator">=</span><span class="token operator">&lt;</span>some other IP<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>some other port<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),y=n("After restarting the container, the API will be served on whatever the contents of "),N=e("code",null,"NODE_LISTEN",-1),E=n(" are. Go to "),L=n("API reference"),D=n(" for more details regarding the "),S=e("code",null,".env",-1),T=n(" file.");function A(B,P){const a=o("ExternalLinkIcon"),i=o("RouterLink");return c(),r(p,null,[h,e("p",null,[m,e("a",v,[_,s(a)]),g]),b,e("ol",null,[e("li",null,[e("a",k,[f,s(a)])]),e("li",null,[e("a",x,[w,s(a)])])]),I,e("p",null,[y,N,E,s(i,{to:"/api-guide.html"},{default:d(()=>[L]),_:1}),D,S,T])],64)}var j=l(u,[["render",A],["__file","index.html.vue"]]);export{j as default};
