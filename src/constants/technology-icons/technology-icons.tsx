import { IIconList } from '@/types';
import { AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiGitBranch } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
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

export const IconList: IIconList = {
  css: { icon: DiCss3, color: '#1D88C7' },
  javascript: { icon: SiJavascript, color: '#EAD41C' },
  'react.js': { icon: SiReact, color: '#61DBFB' },
  'next.js': { icon: TbBrandNextjs, color: '#1D88C7' },
  'typescript.js': { icon: SiTypescript, color: '#3178C6' },
  'tailwind.js': { icon: SiTailwindcss, color: '#07ADCA' },
  redux: { icon: SiRedux, color: '#764ABC' },
  figma: { icon: FiFigma, color: '#E64A1C' },
  'node.js': { icon: FaNodeJs, color: '#7BC326' },
  'express.js': { icon: SiExpress, color: '#1D88C7' },
  mongodb: { icon: SiMongodb, color: '#4BA13E' },
  sql: { icon: SiMysql, color: '#1D88C7' },
  firebase: { icon: SiFirebase, color: '#FFA60F' },
  git: { icon: DiGitBranch, color: '#E44C30' },
  github: { icon: AiFillGithub, color: '#1D88C7' },
};
