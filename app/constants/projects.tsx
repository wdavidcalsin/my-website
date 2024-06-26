import { IProject } from "../types/project";

const BASE_PATH = "/images/projects";

export const listOfProjects: IProject[] = [
    {
        title: "Dictionary Sandy",
        description:
            "Una plataforma de web scraping que permite a los usuarios buscar y aprender palabras en español de manera eficiente. Los datos se recopilan de varias fuentes confiables para proporcionar la información más precisa y actualizada.",
        githubLink: "https://github.com/wdavidcalsin/dictionary",
        previewLink: "https://dictionary-sandy.vercel.app/",
        logo: `${BASE_PATH}/icon-dictionary-sandy-2.webp`,
        coverImage: `${BASE_PATH}/cover-image-dictionary-sandy-2.webp`,
        createdAt: "2023-02-08",
    },
    {
        title: "Calculator",
        description: "Simple calculator built with Vite react_ts",
        githubLink: "https://github.com/wdavidcalsin/calculator-react-ts",
        previewLink: "https://calculator-wd.vercel.app/",
        logo: `${BASE_PATH}/icon-calculator.webp`,
        coverImage: `${BASE_PATH}/cover-image-calculator.webp`,
        createdAt: "2023-01-16",
    },
    {
        title: "Instagram UI Clone",

        githubLink: "https://github.com/wdavidcalsin/instagram-clone",
        previewLink: "https://instagram-clone-gamma-two.vercel.app/",
        logo: `${BASE_PATH}/icon-instagram-ui-clone.webp`,
        coverImage: `${BASE_PATH}/cover-image-instagram-ui-clone.webp`,
        createdAt: "2023-01-26",
    },
    {
        title: "MUI Theme Pack",

        githubLink: "https://github.com/wdavidcalsin/mui-theme-pack",
        previewLink: "https://www.npmjs.com/package/mui-theme-pack",
        logo: `${BASE_PATH}/icon-mui-theme-pack.webp`,
        coverImage: `${BASE_PATH}/cover-image-mui-theme-pack.webp`,
        createdAt: "2023-02-15",
    },
    {
        title: "Image Search",

        githubLink: "https://github.com/wdavidcalsin/image-searcher",
        previewLink: "https://image-searcher-wdavid.vercel.app/",
        logo: `${BASE_PATH}/icon-image-search.webp`,
        coverImage: `${BASE_PATH}/cover-image-image-search.webp`,
        createdAt: "2023-02-20",
    },
    {
        title: "Commit Genius",

        githubLink: "https://github.com/wdavidcalsin/commit-genius",
        previewLink: "https://commit-genius.vercel.app/",
        logo: `${BASE_PATH}/icon-commit-genius.webp`,
        coverImage: `${BASE_PATH}/cover-image-commit-genius.webp`,
        createdAt: "2023-03-10",
    },
    {
        title: "Code Xplain",

        githubLink: "https://github.com/wdavidcalsin/code-xplain",
        logo: `${BASE_PATH}/icon-code-xplain.webp`,
        coverImage: `${BASE_PATH}/cover-image-code-xplain.webp`,
        createdAt: "2023-03-23",
    },
    {
        title: "Weather Forecast",

        githubLink: "https://github.com/wdavidcalsin/weather-forecast",
        previewLink: "https://weather-forecast-two-kappa.vercel.app/",
        logo: `${BASE_PATH}/icon-weather-forecast.webp`,
        coverImage: `${BASE_PATH}/cover-image-weather-forecast.webp`,
        createdAt: "2023-04-2",
    },
    {
        title: "Blender Xplorer",

        githubLink: "https://github.com/wdavidcalsin/blender-xplorer",
        previewLink: "https://blender-xplorer.vercel.app/",
        logo: `${BASE_PATH}/icon-blender-xplorer.webp`,
        coverImage: `${BASE_PATH}/cover-image-blender-xplorer.webp`,
        createdAt: "2024-03-17",
    },
    {
        title: "Bici Benchmark",

        githubLink: "https://github.com/wdavidcalsin/bici-benchmark",
        previewLink: "https://bici-benchmark.vercel.app/",
        logo: `${BASE_PATH}/icon-bici-benchmark.webp`,
        coverImage: `${BASE_PATH}/cover-image-bici-benchmark.webp`,
        createdAt: "2024-03-27",
    },
];

export const rotates = [
    "rotate-2",
    "rotate-3",
    "rotate-4",
    "rotate-6",
    "-rotate-2",
    "-rotate-3",
    "-rotate-4",
    "-rotate-6",
];
