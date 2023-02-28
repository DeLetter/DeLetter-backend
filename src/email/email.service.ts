import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, message: string) {
    await this.mailerService.sendMail({
      to,
      from: 'shentimothy89@gmail.com', // sender address
      subject,
      text: message,
    });
  }
}
