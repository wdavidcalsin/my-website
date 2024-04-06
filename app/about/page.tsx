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
                            src="/images/mtb.webp"
                        />
                    </div>
                </div>
                <header className="max-w-2xl lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Soy Willian David. Vivo en Peru, donde dieño mi futuro.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Soy David, un desarrollador fullstack, aficionado por
                        las bicicletas y una fascinacion por el mundo 3D, donde
                        recientemente incursione en un nuevo pasatiempo aprender
                        Blender.
                    </p>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Hace poco egrese como estudiante en Ingenieria de
                        Sistemas de la{" "}
                        <Link
                            className="text-teal-600"
                            href={"https://www.portal.unap.edu.pe/"}
                        >
                            UNAP
                        </Link>{" "}
                        , donde adquiri conocimientos fundamentales en
                        programacion y desarrollo de software. Sin embargo hay
                        tecnologias emocionantes que no te lo enseñan en el
                        ambito universitario. Por lo tanto, me aventure a
                        aprender de manera autodidacta sobre programacion web
                        con Reactjs.
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
