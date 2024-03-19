import React from "react";
import Articles from "./articles";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
    return (
        <div>
            <section className="flex flex-col gap-12">
                <h2 className="font-bold text-2xl">Articles Posts</h2>
                <Articles />
            </section>
        </div>
    );
};

export default Page;
