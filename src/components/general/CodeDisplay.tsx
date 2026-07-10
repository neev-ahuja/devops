const CodeDisplay = () => (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-lg pr-50">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-gray-400">solution.cpp</span>
        </div>

        <pre className="overflow-x-auto p-6 font-code-md text-code-md leading-7 text-white/90">
            <code>
                <span className="text-primary-fixed-dim">#include</span>{" "}
                <span className="text-secondary-fixed-dim">&lt;iostream&gt;</span>
                {"\n"}
                <span className="text-primary-fixed-dim">#include</span>{" "}
                <span className="text-secondary-fixed-dim">&lt;vector&gt;</span>

                {"\n\n"}
                <span className="text-primary-fixed-dim">class</span> Solution {"{"}
                {"\n"}
                <span className="text-primary-fixed-dim">public</span>:
                {"\n    "}
                <span className="text-primary-fixed-dim">int</span> maxProfit(std::vector&lt;
                <span className="text-primary-fixed-dim">int</span>
                &gt;&amp; prices) {"{"}
                {"\n        "}
                <span className="text-primary-fixed-dim">int</span> minPrice = 1e9;
                {"\n        "}
                <span className="text-primary-fixed-dim">int</span> maxP = 0;

                {"\n\n        "}
                <span className="text-primary-fixed-dim">for</span> (
                <span className="text-primary-fixed-dim">int</span> p : prices) {"{"}
                {"\n            "}
                minPrice = std::min(minPrice, p);
                {"\n            "}
                maxP = std::max(maxP, p - minPrice);
                {"\n        }"}

                {"\n\n        "}
                <span className="text-primary-fixed-dim">return</span> maxP;
                {"\n    }"}
                {"\n};"}
            </code>
        </pre>
    </div>
);

export default CodeDisplay;