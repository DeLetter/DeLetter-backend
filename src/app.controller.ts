import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email/email.service';

@Controller()
export class AppController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-email')
  async sendEmail(
    @Body() data: { to: string; subject: string; message: string },
  ) {
    const { to, subject, message } = data;

    await this.emailService.sendEmail(to, subject, message);
    return { message: 'Email sent successfully' };
  }
}
