import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { About } from "../about/about";
import { Skills } from "../skills/skills";
import { TechBadge } from '@models/tech-badge.model';
import { SocialLink } from '@models/social-link.model';
import { PORTFOLIO_LINKS, SOCIAL_LINKS } from '@core/constants/portfolio.constant';
import { HeroAction, HeroCodeLine, HeroContent, HeroStat } from '@models/hero.model';
import { Experience } from "@features/experience/experience";
import { Projects } from "@features/projects/projects";

@Component({
  selector: 'app-home',
  imports: [RouterLink, About, Skills, Experience, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

  protected readonly heroContent: HeroContent = {
    eyebrow: 'Frontend Developer • Angular Specialist',
    title: 'Building clean, scalable, and user-friendly Angular applications.',
    description:
      'Hi, I\'m Shubham Deshmukh. I work with Angular, TypeScript, JavaScript, SCSS, RxJS, and modern frontend architecture to build enterprise-ready web applications.',
  };

  protected readonly heroActions: readonly HeroAction[] = [
    {
      label: 'View Projects',
      path: '/projects',
      variant: 'primary',
    },
    {
      label: 'Download Resume',
      href: PORTFOLIO_LINKS.resume.path,
      download: PORTFOLIO_LINKS.resume.fileName,
      variant: 'secondary',
    },
  ];

  protected readonly socialLinks: readonly SocialLink[] = SOCIAL_LINKS;

  protected readonly techBadges: readonly TechBadge[] = [
    { label: 'Angular' },
    { label: 'TypeScript' },
    { label: 'Signals' },
    { label: 'RxJS' },
    { label: 'SCSS' },
    { label: 'REST APIs' },
  ];

  protected readonly codeLines: readonly HeroCodeLine[] = [
    {
      prefix: 'const',
      content: ' developer = {',
    },
    {
      content: "  name: 'Shubham Deshmukh',",
    },
    {
      content: "  role: 'Frontend Developer',",
    },
    {
      content: "  focus: ['Angular', 'TypeScript', 'UI'],",
    },
    {
      content: "  mindset: 'Clean, scalable code'",
    },
    {
      content: '};',
    },
  ];

  protected readonly heroStats: readonly HeroStat[] = [
    {
      value: '2+',
      label: 'Years Experience',
    },
    {
      value: 'Angular',
      label: 'Primary Stack',
    },
    {
      value: 'AI',
      label: 'Assisted Workflow',
    },
  ];
}