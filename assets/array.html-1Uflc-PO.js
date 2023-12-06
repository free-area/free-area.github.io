import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as l,a as n,b as s,d as e,f as t}from"./app-ZPqsqvcT.js";const c="/assets/20230203105634-1LRTlk_r.png",r="/assets/20230112102848-ZqVNFgw_.png",u={},d=n("h1",{id:"数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数组","aria-hidden":"true"},"#"),s(" 数组")],-1),k=n("h2",{id:"分发饼干",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分发饼干","aria-hidden":"true"},"#"),s(" 分发饼干")],-1),v={href:"https://leetcode.cn/problems/assign-cookies/",target:"_blank",rel:"noopener noreferrer"},m=n("h3",{id:"排序-贪心法-双指针",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#排序-贪心法-双指针","aria-hidden":"true"},"#"),s(" 排序+贪心法+双指针")],-1),b={href:"https://programmercarl.com/0455.%E5%88%86%E5%8F%91%E9%A5%BC%E5%B9%B2.html",target:"_blank",rel:"noopener noreferrer"},h=t('<p>为了满足更多的小孩，就不要造成饼干尺寸的浪费。</p><p>大尺寸的饼干既可以满足胃口大的孩子也可以满足胃口小的孩子，那么就应该优先满足胃口大的。</p><p><mark>这里的局部最优就是大饼干喂给胃口大的，充分利用饼干尺寸喂饱一个，全局最优就是喂饱尽可能多的小孩。</mark></p><p>可以尝试使用贪心策略，先将饼干数组和小孩数组排序。</p><p>然后从后向前遍历小孩数组，用大饼干优先满足胃口大的，并统计满足小孩数量。</p><p>如图：</p><figure><img src="'+c+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这个例子可以看出饼干9只有喂给胃口为7的小孩，这样才是整体最优解，并想不出反例，那么就可以撸代码了。</p><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 版本一 </span>
<span class="token comment">// 时间复杂度：O(nlogn)</span>
<span class="token comment">// 空间复杂度：O(1)</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">findContentChildren</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> g<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">sort</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> g<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sort</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 饼干数组的下标</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历胃口 </span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> g<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历饼干 </span>
                result<span class="token operator">++</span><span class="token punctuation">;</span>
                index<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从代码中可以看出我用了一个index来控制饼干数组的遍历，遍历饼干并没有再起一个for循环，而是采用自减的方式，这也是常用的技巧。</p><p>有的同学看到要遍历两个数组，就想到用两个for循环，那样逻辑其实就复杂了</p><h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h4><p>注意版本一的代码中，可以看出来，是先遍历的胃口，在遍历的饼干，那么可不可以 先遍历 饼干，在遍历胃口呢？</p><p>其实是不可以的。</p><p>外面的for 是里的下标i 是固定移动的，而if里面的下标 index 是符合条件才移动的。</p><p>如果 for 控制的是饼干， if 控制胃口，就是出现如下情况 ：</p><figure><img src="`+r+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>if 里的 index 指向 胃口 10， for里的i指向饼干9，因为 饼干9 满足不了 胃口10，所以 i 持续向前移动，而index 走不到<code>s[index] &gt;= g[i]</code> 的逻辑，所以index不会移动，那么当i 持续向前移动，最后所有的饼干都匹配不上。</p><p>所以 一定要for 控制 胃口，里面的if控制饼干。</p><h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h4><p><strong>也可以换一个思路，小饼干先喂饱小胃口</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    int findContentChildren(vector&lt;int&gt;&amp; g, vector&lt;int&gt;&amp; s) {
        sort(g.begin(),g.end());
        sort(s.begin(),s.end());
        int index = 0;
        for(int i = 0; i &lt; s.size(); i++) { // 饼干
            if(index &lt; g.size() &amp;&amp; g[index] &lt;= s[i]){ // 胃口
                index++;
            }
        }
        return index;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),g={id:"有效的山脉数组",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#有效的山脉数组","aria-hidden":"true"},"#",-1),x={href:"https://leetcode.cn/problems/valid-mountain-array/",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"寻找数组的中心下标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#寻找数组的中心下标","aria-hidden":"true"},"#"),s(" 寻找数组的中心下标")],-1),y=n("p",null,"[数组]",-1),w={href:"https://leetcode.cn/problems/find-pivot-index/",target:"_blank",rel:"noopener noreferrer"},I=n("h2",{id:"按奇偶排序数组ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#按奇偶排序数组ii","aria-hidden":"true"},"#"),s(" 按奇偶排序数组II")],-1),z={href:"https://leetcode.cn/problems/sort-array-by-parity-ii/",target:"_blank",rel:"noopener noreferrer"},A=t(`<p>给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。</p><p>对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。</p><p>你可以返回任何满足上述条件的数组作为答案。</p><p>示例：</p><ul><li>输入：[4,2,5,7]</li><li>输出：[4,5,2,7]</li><li>解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。</li></ul><p>优化版本</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">sortArrayByParityII</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> A<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">result</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> evenIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 偶数下标</span>
        <span class="token keyword">int</span> oddIndex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>   <span class="token comment">// 奇数下标</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> A<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>evenIndex<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                evenIndex <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>oddIndex<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                oddIndex <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>空间复杂度o(1)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    bool validMountainArray(vector&lt;int&gt;&amp; arr) {
        int index=0;
        for(int i=1;i&lt;arr.size();i++){
            if(arr[i]==arr[i-1])return false;
            if(arr[i]&gt;arr[i-1]){
                index++;
            }
            else{
                break;
            }

        }
        cout&lt;&lt;index&lt;&lt;endl;
        //index==0表明arr[1]&lt;arrp[0]导致推出循环
        //index=arr.size()-1;一直到最后也没有找到index
        if(index==0||index==arr.size()-1){
            return false;
        }
        for(int i=index+1;i&lt;arr.size();i++){
            if(arr[i]&gt;=arr[i-1])return false;
        }
        return true;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="旋转数组" tabindex="-1"><a class="header-anchor" href="#旋转数组" aria-hidden="true">#</a> 旋转数组</h2>`,10),C={href:"https://leetcode.cn/problems/rotate-array/solutions/551039/xuan-zhuan-shu-zu-by-leetcode-solution-nipk/?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"},L=t(`<h3 id="使用额外的空间" tabindex="-1"><a class="header-anchor" href="#使用额外的空间" aria-hidden="true">#</a> 使用额外的空间</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    void rotate(vector&lt;int&gt;&amp; nums, int k) {
        vector&lt;int&gt; temp=nums;
        int n=k%nums.size();
        for(int i=0;i&lt;nums.size();i++){
            int index=(i+n)%(nums.size());
            nums[index]=temp[i];
        }
        return ;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组反转" tabindex="-1"><a class="header-anchor" href="#数组反转" aria-hidden="true">#</a> 数组反转</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:

    void rotate(vector&lt;int&gt;&amp; nums, int k) {
        if(nums.size()&lt;=1)return;
        k=k%nums.size();
        reverse(nums.begin(),nums.end());
        reverse(nums.begin(),nums.begin()+k);
        reverse(nums.begin()+k,nums.end());
        
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区间问题" tabindex="-1"><a class="header-anchor" href="#区间问题" aria-hidden="true">#</a> 区间问题</h2><h3 id="插入区间" tabindex="-1"><a class="header-anchor" href="#插入区间" aria-hidden="true">#</a> 插入区间</h3><p>给你一个 <strong>无重叠的</strong> *，*按照区间起始端点排序的区间列表。</p><p>在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intervals = [], newInterval = [5,7]
输出：[[5,7]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intervals = [[1,5]], newInterval = [2,3]
输出：[[1,5]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 5：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intervals = [[1,5]], newInterval = [2,7]
输出：[[1,7]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模拟法" tabindex="-1"><a class="header-anchor" href="#模拟法" aria-hidden="true">#</a> 模拟法</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> <span class="token function">insert</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span><span class="token operator">&amp;</span> intervals<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> newInterval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> left<span class="token operator">=</span>newInterval<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right<span class="token operator">=</span>newInterval<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">bool</span> placed<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
        vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> res<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">auto</span> interval<span class="token operator">:</span>intervals<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>placed<span class="token punctuation">)</span><span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>interval<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>left<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//interval在左边，不用管，直接加入</span>
                res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>interval<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token punctuation">{</span>left<span class="token punctuation">,</span>right<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                placed<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
                res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span><span class="token comment">//有重叠，开始合并</span>
                left<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>interval<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                right<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span>interval<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>placed<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token punctuation">{</span>left<span class="token punctuation">,</span>right<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环形数组" tabindex="-1"><a class="header-anchor" href="#环形数组" aria-hidden="true">#</a> 环形数组</h2>`,21),S={href:"https://leetcode.cn/problems/maximum-sum-circular-subarray/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.cn/problems/rotate-array/",target:"_blank",rel:"noopener noreferrer"},E=n("h2",{id:"矩阵",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#矩阵","aria-hidden":"true"},"#"),s(" 矩阵")],-1),N={id:"螺旋矩阵",tabindex:"-1"},V=n("a",{class:"header-anchor",href:"#螺旋矩阵","aria-hidden":"true"},"#",-1),O={href:"https://leetcode.cn/problems/spiral-matrix/",target:"_blank",rel:"noopener noreferrer"},T={id:"螺旋矩阵-ii",tabindex:"-1"},F=n("a",{class:"header-anchor",href:"#螺旋矩阵-ii","aria-hidden":"true"},"#",-1),q={href:"https://leetcode.cn/problems/spiral-matrix-ii/",target:"_blank",rel:"noopener noreferrer"},M={id:"旋转图像",tabindex:"-1"},P=n("a",{class:"header-anchor",href:"#旋转图像","aria-hidden":"true"},"#",-1),R={href:"https://leetcode.cn/problems/rotate-image/",target:"_blank",rel:"noopener noreferrer"},Z={id:"矩阵置零",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#矩阵置零","aria-hidden":"true"},"#",-1),D={href:"https://leetcode.cn/problems/set-matrix-zeroes/",target:"_blank",rel:"noopener noreferrer"},G=n("h3",{id:"扑克牌中的顺子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#扑克牌中的顺子","aria-hidden":"true"},"#"),s(" 扑克牌中的顺子")],-1),H={href:"https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/description/",target:"_blank",rel:"noopener noreferrer"};function J(K,Q){const a=i("ExternalLinkIcon");return o(),l("div",null,[d,k,n("p",null,[n("a",v,[s("455. 分发饼干 - 力扣（LeetCode）"),e(a)])]),m,n("p",null,[n("a",b,[s("代码随想录 (programmercarl.com)"),e(a)])]),h,n("h2",g,[f,s(),n("a",x,[s("有效的山脉数组"),e(a)])]),_,y,n("p",null,[n("a",w,[s("力扣题目链接(opens new window)a"),e(a)])]),I,n("p",null,[n("a",z,[s("922. 按奇偶排序数组 II - 力扣（LeetCode）"),e(a)])]),A,n("p",null,[n("a",C,[s("189. 轮转数组 - 力扣（LeetCode）"),e(a)])]),L,n("p",null,[n("a",S,[s("环形子数组的最大和"),e(a)])]),n("p",null,[n("a",B,[s("189. 轮转数组 - 力扣（LeetCode）"),e(a)])]),E,n("h3",N,[V,s(),n("a",O,[s("螺旋矩阵"),e(a)])]),n("h3",T,[F,s(),n("a",q,[s("螺旋矩阵 II"),e(a)])]),n("h3",M,[P,s(),n("a",R,[s("旋转图像"),e(a)])]),n("h3",Z,[j,s(),n("a",D,[s("矩阵置零"),e(a)])]),G,n("p",null,[n("a",H,[s("剑指 Offer 61. 扑克牌中的顺子 - 力扣（LeetCode）"),e(a)]),s("、")])])}const X=p(u,[["render",J],["__file","array.html.vue"]]);export{X as default};