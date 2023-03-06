import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { Alchemy, Network, Wallet, Utils } from 'alchemy-sdk';
import { ethers } from 'ethers';

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
    const settings = {
      apiKey: this.configService.get('ALCHEMY_API_KEY'),
      network: Network.ETH_GOERLI, // Replace with your network.
    };
    const alchemy = new Alchemy(settings);
    const privateKey = this.configService.get('PRIVATE_KEY');
    const etherProvider = await alchemy.config.getProvider();
    const wallet = new Wallet(privateKey, etherProvider);
    return wallet;
  }
}
