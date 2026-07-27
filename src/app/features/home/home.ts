import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { About } from "../about/about";
import { Skills } from "../skills/skills";
import { HOME_CONTENT } from '@core/constants/section-content.constant';
import { HeroAction, HeroCodeLine, HeroContent, HeroStat } from '@models/hero.model';
import { SocialLink } from '@models/social-link.model';
import { TechBadge } from '@models/tech-badge.model';

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

  protected readonly heroContent: HeroContent = HOME_CONTENT.hero;
  protected readonly heroActions: readonly HeroAction[] = HOME_CONTENT.actions;
  protected readonly socialLinks: readonly SocialLink[] = HOME_CONTENT.socialLinks;
  protected readonly techBadges: readonly TechBadge[] = HOME_CONTENT.techBadges;
  protected readonly codeLines: readonly HeroCodeLine[] = HOME_CONTENT.codeLines;
  protected readonly heroStats: readonly HeroStat[] = HOME_CONTENT.stats;

  protected async onResumeDownload(): Promise<void> {
    await this.resumeDownloadService.downloadResume();
  }
}
