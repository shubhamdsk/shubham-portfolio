import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

import { PORTFOLIO_LINKS } from '@core/constants/portfolio.constant';

@Injectable({
  providedIn: 'root',
})
export class ResumeDownload {
  private readonly document = inject(DOCUMENT);

  async downloadResume(): Promise<void> {

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
  }
}