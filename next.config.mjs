import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
