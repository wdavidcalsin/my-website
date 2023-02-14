import { useStyledTechnologyIcons } from '@/styles';
import { IListTechnologiesIcons } from '@/types';
import { AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiGitBranch } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { IoIosCreate } from 'react-icons/io';
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const nameOfTechnologies: IListTechnologiesIcons = {
  css: { slug: 'css', color: '#1D88C7' },
  javascript: { slug: 'javascript', color: '#EAD41C' },
  react: { slug: 'react.js', color: '#61DBFB' },
  next: { slug: 'next.js', color: '#1D88C7' },
  typescript: { slug: 'typescript.js', color: '#3178C6' },
  tailwind: { slug: 'tailwind.js', color: '#07ADCA' },
  redux: { slug: 'redux', color: '#764ABC' },
  figma: { slug: 'figma', color: '#E64A1C' },
  node: { slug: 'node.js', color: '#7BC326' },
  express: { slug: 'express.js', color: '#1D88C7' },
  mongodb: { slug: 'mongodb', color: '#4BA13E' },
  sql: { slug: 'sql', color: '#1D88C7' },
  firebase: { slug: 'firebase', color: '#FFA60F' },
  git: { slug: 'git', color: '#E44C30' },
  github: { slug: 'github', color: '#1D88C7' },
};

export const technologyIcons = (slugIcons: string) => {
  switch (slugIcons) {
    case nameOfTechnologies.css.slug:
      return (
        <DiCss3
          className={
            useStyledTechnologyIcons({ color: nameOfTechnologies.css.color })
              .root
          }
        />
      );
      break;
    case nameOfTechnologies.javascript.slug:
      return (
        <SiJavascript
          className={
            useStyledTechnologyIcons({
              color: nameOfTechnologies.javascript.color,
            }).root
          }
        />
      );
      break;
    case nameOfTechnologies.react.slug:
      return (
        <SiReact
          className={
            useStyledTechnologyIcons({ color: nameOfTechnologies.react.color })
              .root
          }
        />
      );
      break;
    case nameOfTechnologies.next.slug:
      return (
        <TbBrandNextjs
          className={
            useStyledTechnologyIcons({ color: nameOfTechnologies.next.color })
              .root
          }
        />
      );
      break;
    case nameOfTechnologies.typescript.slug:
      return (
        <SiTypescript
          className={
            useStyledTechnologyIcons({
              color: nameOfTechnologies.typescript.color,
            }).root
          }
        />
      );
      break;
    case nameOfTechnologies.tailwind.slug:
      return (
        <SiTailwindcss
          className={
            useStyledTechnologyIcons({
              color: nameOfTechnologies.tailwind.color,
            }).root
          }
        />
      );
      break;
    case nameOfTechnologies.redux.slug:
      return (
        <SiRedux
          className={
            useStyledTechnologyIcons({ color: nameOfTechnologies.redux.color })
              .root
          }
        />
      );
      break;
    case nameOfTechnologies.figma.slug:
      return (
        <FiFigma
          className={
            useStyledTechnologyIcons({ color: nameOfTechnologies.figma.color })
              .root
          }
        />
      );
      break;
    case nameOfTechnologies.node.slug:
      return (
        <FaNodeJs
          className={
            useStyledTechnologyIcons({ color: nameOfTechnologies.node.color })
              .root
          }
        />
      );
      break;
    case nameOfTechnologies.express.slug:
      return (
        <SiExpress
          className={
            useStyledTechnologyIcons({
              color: nameOfTechnologies.express.color,
            }).root
          }
        />
      );
      break;
    case nameOfTechnologies.mongodb.slug:
      return (
        <SiMongodb
          className={
            useStyledTechnologyIcons({
              color: nameOfTechnologies.mongodb.color,
            }).root
          }
        />
      );
      break;
    case nameOfTechnologies.sql.slug:
      return (
        <SiMysql
          className={
            useStyledTechnologyIcons({ color: nameOfTechnologies.sql.color })
              .root
          }
        />
      );
      break;
    case nameOfTechnologies.firebase.slug:
      return (
        <SiFirebase
          className={
            useStyledTechnologyIcons({
              color: nameOfTechnologies.firebase.color,
            }).root
          }
        />
      );
      break;
    case nameOfTechnologies.git.slug:
      return (
        <DiGitBranch
          className={
            useStyledTechnologyIcons({ color: nameOfTechnologies.git.color })
              .root
          }
        />
      );
      break;
    case nameOfTechnologies.github.slug:
      return (
        <AiFillGithub
          className={
            useStyledTechnologyIcons({ color: nameOfTechnologies.github.color })
              .root
          }
        />
      );
      break;
    default:
      return (
        <IoIosCreate
          className={useStyledTechnologyIcons({ color: 'orange' }).root}
        />
      );
      break;
  }
};
