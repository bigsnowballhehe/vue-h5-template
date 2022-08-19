import{_ as s,c as n,o as a,a as p}from"./app.614cd5ee.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"","slug":"\u2705-splitchunks-\u5355\u72EC\u6253\u5305\u7B2C\u4E09\u65B9\u6A21\u5757"}],"relativePath":"guide/vue2/chunks.md","lastUpdated":1660905312000}'),l={name:"guide/vue2/chunks.md"},o=p(`<h3 id="\u2705-splitchunks-\u5355\u72EC\u6253\u5305\u7B2C\u4E09\u65B9\u6A21\u5757" tabindex="-1"><span id="chunks">\u2705 splitChunks \u5355\u72EC\u6253\u5305\u7B2C\u4E09\u65B9\u6A21\u5757</span> <a class="header-anchor" href="#\u2705-splitchunks-\u5355\u72EC\u6253\u5305\u7B2C\u4E09\u65B9\u6A21\u5757" aria-hidden="true">#</a></h3><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">chainWebpack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">when</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">IS_PROD</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">config</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">config</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">plugin</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ScriptExtHtmlWebpackPlugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">after</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script-ext-html-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                        </span><span style="color:#676E95;">// \u5C06 runtime \u4F5C\u4E3A\u5185\u8054\u5F15\u5165\u4E0D\u5355\u72EC\u5B58\u5728</span></span>
<span class="line"><span style="color:#F07178;">                        inline</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">runtime</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                ])</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">optimization</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splitChunks</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                chunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                cacheGroups</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#676E95;">// cacheGroups \u4E0B\u53EF\u4EE5\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A\u7EC4\uFF0C\u6BCF\u4E2A\u7EC4\u6839\u636Etest\u8BBE\u7F6E\u6761\u4EF6\uFF0C\u7B26\u5408test\u6761\u4EF6\u7684\u6A21\u5757</span></span>
<span class="line"><span style="color:#F07178;">                    commons</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chunk-commons</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        test</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src/components</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        minChunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//  \u88AB\u81F3\u5C11\u7528\u4E09\u6B21\u4EE5\u4E0A\u6253\u5305\u5206\u79BB</span></span>
<span class="line"><span style="color:#F07178;">                        priority</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#F07178;">                        reuseExistingChunk</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u8868\u793A\u662F\u5426\u4F7F\u7528\u5DF2\u6709\u7684 chunk\uFF0C\u5982\u679C\u4E3A true \u5219\u8868\u793A\u5982\u679C\u5F53\u524D\u7684 chunk \u5305\u542B\u7684\u6A21\u5757\u5DF2\u7ECF\u88AB\u62BD\u53D6\u51FA\u53BB\u4E86\uFF0C\u90A3\u4E48\u5C06\u4E0D\u4F1A\u91CD\u65B0\u751F\u6210\u65B0\u7684\u3002</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                    node_vendors</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chunk-libs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        chunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">initial</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u53EA\u6253\u5305\u521D\u59CB\u65F6\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9</span></span>
<span class="line"><span style="color:#F07178;">                        test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        priority</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                    vantUI</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chunk-vantUI</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u5355\u72EC\u5C06 vantUI \u62C6\u5305</span></span>
<span class="line"><span style="color:#F07178;">                        priority</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u6570\u5B57\u5927\u6743\u91CD\u5230\uFF0C\u6EE1\u8DB3\u591A\u4E2A cacheGroups \u7684\u6761\u4EF6\u65F6\u5019\u5206\u5230\u6743\u91CD\u9AD8\u7684</span></span>
<span class="line"><span style="color:#F07178;">                        test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">_</span><span style="color:#89DDFF;">?</span><span style="color:#C3E88D;">vant</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*)/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">optimization</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">runtimeChunk</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">single</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function c(t,F,r,D,y,i){return a(),n("div",null,e)}const u=s(l,[["render",c]]);export{A as __pageData,u as default};