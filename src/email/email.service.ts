import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, message: string) {
    console.log('to', to);
    console.log('subject', subject);
    console.log('message', message);
    const response = await this.mailerService.sendMail({
      to,
      subject,
      text: message,
    });
    console.log(response);
  }
}
