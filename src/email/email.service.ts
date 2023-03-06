import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendEmail(to: string, subject: string, message: string) {
    await this.mailerService.sendMail({
      to,
      from: 'shentimothy89@gmail.com', // sender address
      subject,
      text: message,
    });
  }

  async returnConfig() {
    const privateKey = this.configService.get('PRIVATE_KEY');
    const rpc = this.configService.get('ALCHEMY_API_KEY');
    return { privateKey, rpc };
  }
}
