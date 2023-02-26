import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { MailerService } from '@nestjs-modules/mailer';

@Controller()
export class AppController {
  constructor(private readonly emailService: EmailService) {}
  // constructor(private readonly mailerService: MailerService) {}

  @Post('send-email')
  async sendEmail(
    @Body() data: { to: string; subject: string; message: string },
  ) {
    const { to, subject, message } = data;
    console.log('data', data);

    await this.emailService.sendEmail(to, subject, message);
    return { message: 'Email sent successfully' };
  }

  // @Get('plain-text-email')
  // async plainTextEmail(@Query('toemail') toEmail) {
  //   const response = await this.mailerService.sendMail({
  //     to: 'timshen191@gmail.com',
  //     subject: 'Plain Text Email ✔',
  //     text: 'Welcome NestJS Email Sending Tutorial',
  //   });
  //   return response;
  // }
}
