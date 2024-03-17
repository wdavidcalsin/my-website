import Image from "next/image";
import React from "react";
import { socialNetworks } from "../constants/social-networks";
import Link from "next/link";
import MailIcon from "../components/icons/mail-icon";

const Page: React.FC = () => {
    return (
        <main>
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            alt=""
                            loading="lazy"
                            width="800"
                            height="800"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            src="/images/about-image.webp"
                        />
                    </div>
                </div>
                <header className="max-w-2xl lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I’m Willian David. I live in New York City, where I
                        design the future.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I’m Spencer, a software designer and entrepreneur based
                        in New York City. I’m the founder and CEO of Planetaria,
                        where we develop technologies that empower regular
                        people to explore space on their own terms.
                    </p>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        The only thing I loved more than computers as a kid was
                        space. When I was 8, I climbed the 40-foot oak tree at
                        the back of our yard while wearing my older sister’s
                        motorcycle helmet, counted down from three, and jumped —
                        hoping the tree was tall enough that with just a bit of
                        momentum I’d be able to get to orbit.
                    </p>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I spent the next few summers indoors working on a rocket
                        design, while I recovered from the multiple surgeries it
                        took to fix my badly broken legs. It took nine
                        iterations, but when I was 15 I sent my dad’s Blackberry
                        into orbit and was able to transmit a photo back down to
                        our family computer from space.
                    </p>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Today, I’m the founder of Planetaria, where we’re
                        working on civilian space suits and manned shuttle kits
                        you can assemble at home so that the next generation of
                        kids really can make it to orbit — from the comfort of
                        their own backyards.{" "}
                    </p>
                </header>
                <div className="lg:pl-20">
                    <ul role="list" className="flex flex-col gap-6">
                        {socialNetworks.map((item, index) => (
                            <li key={index} className="">
                                <Link
                                    href={""}
                                    className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                >
                                    <div className="text-zinc-500 group-hover:text-teal-500">
                                        {item.children}
                                    </div>
                                    <span className="group">
                                        Follow on {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}

                        <li className=" border-t border-zinc-100 pt-6 dark:border-zinc-700/40 flex">
                            <Link
                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                href="mailto:wdavidcalsin@gmail.com"
                            >
                                <MailIcon className="text-zinc-500 group-hover:text-teal-500" />

                                <span className="ml-4">@wdavidcalsin</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Page;
