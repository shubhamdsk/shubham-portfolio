import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

import { PORTFOLIO_LINKS } from '@core/constants/portfolio.constant';

@Injectable({
  providedIn: 'root',
})
export class ResumeDownload {
  private static readonly minimumLoaderDuration = 700;

  private readonly document = inject(DOCUMENT);

  readonly isDownloading = signal(false);

  async downloadResume(): Promise<void> {
    if (this.isDownloading()) {
      return;
    }

    const downloadStartTime = performance.now();

    try {
      this.isDownloading.set(true);

      const response = await fetch(PORTFOLIO_LINKS.resume.path);

      if (!response.ok) {
        throw new Error('Resume download failed');
      }

      const resumeBlob = await response.blob();
      const resumeUrl = URL.createObjectURL(resumeBlob);

      const anchor = this.document.createElement('a');
      anchor.href = resumeUrl;
      anchor.download = PORTFOLIO_LINKS.resume.fileName;
      anchor.style.display = 'none';

      this.document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      URL.revokeObjectURL(resumeUrl);
    } catch (error) {
      console.error('Resume download failed:', error);
    } finally {
      const elapsedTime = performance.now() - downloadStartTime;
      const remainingDelay = ResumeDownload.minimumLoaderDuration - elapsedTime;

      if (remainingDelay > 0) {
        await new Promise((resolve) => window.setTimeout(resolve, remainingDelay));
      }

      this.isDownloading.set(false);
    }
  }
}
