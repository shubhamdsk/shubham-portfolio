import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { About } from "../about/about";
import { Skills } from "../skills/skills";
import { TechBadge } from '@models/tech-badge.model';
import { SocialLink } from '@models/social-link.model';
import { SOCIAL_LINKS } from '@core/constants/portfolio.constant';
import { HeroAction, HeroCodeLine, HeroContent, HeroStat } from '@models/hero.model';

import { Contact } from "@features/contact/contact";
import { Projects } from "@features/projects/projects";

import { Experience } from "@features/experience/experience";
import { ResumeDownload } from '@services/resume-download-service/resume-download';
import { RevealOnScroll } from "@core/directives/reveal-on-scroll/reveal-on-scroll";
import { AppLoader } from '@shared/components/loader/loader';

@Component({
  selector: 'app-home',
  imports: [RouterLink, About, Skills, Experience, Projects, Contact, RevealOnScroll, AppLoader],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly resumeDownloadService = inject(ResumeDownload);
  protected readonly isResumeDownloading = this.resumeDownloadService.isDownloading;
  protected readonly resumeButtonLabel = computed(() =>
    this.isResumeDownloading() ? 'Downloading Resume...' : 'Download Resume'
  );

  protected readonly heroContent: HeroContent = {
    eyebrow: 'Frontend Developer | Angular | TypeScript',
    title: 'Building Angular apps for AI and engineering workflows.',
    description:
      'Hi, I\'m Shubham Deshmukh. I work with Angular, TypeScript, RxJS, Signals, SCSS, REST APIs, and SignalR to build production-ready frontend applications for global client teams.',
  };

  protected readonly heroActions: readonly HeroAction[] = [
    {
      label: 'View Projects',
      path: '/projects',
      variant: 'primary',
    },
  ];

  protected readonly socialLinks: readonly SocialLink[] = SOCIAL_LINKS;

  protected readonly techBadges: readonly TechBadge[] = [
    { label: 'Angular' },
    { label: 'TypeScript' },
    { label: 'SignalR' },
    { label: 'Signals' },
    { label: 'RxJS' },
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
      content: "  focus: ['Angular', 'AI Workflows', 'MBD'],",
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
      value: '3',
      label: 'Client Projects',
    },
  ];

  protected async onResumeDownload(): Promise<void> {
    await this.resumeDownloadService.downloadResume();
  }
}
