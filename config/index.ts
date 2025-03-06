export class Config {
  private static instance: Config;

  readonly smtp: {
    host: string;
    port: number;
    user: string;
    pass: string;
    from: string;
    to: string;
    secure: boolean;
  };

  private constructor() {
    // SMTP Configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const smtpTo = process.env.SMTP_TO || 'contact@skppd.com';
    const smtpSecure = process.env.SMTP_SECURE === 'true';
    const debug = process.env.DEBUG === 'true';

    if (!smtpHost) throw new Error('SMTP_HOST is not defined');
    if (!smtpPort || isNaN(Number(smtpPort))) throw new Error('SMTP_PORT is not defined or invalid');
    if (!smtpUser) throw new Error('SMTP_USER is not defined');
    if (!smtpPass) throw new Error('SMTP_PASS is not defined');
    if (!smtpFrom) throw new Error('SMTP_FROM is not defined');
    if (!smtpTo) throw new Error('SMTP_TO is not defined');

    this.smtp = {
      host: smtpHost,
      port: Number(smtpPort),
      user: smtpUser,
      pass: smtpPass,
      from: smtpFrom,
      to: smtpTo,
      secure: smtpSecure,
    };


    // Print configuration in debug mode
    if (debug) {
      console.log('=== Configuration Values ===');
      console.log('SMTP Host:', smtpHost);
      console.log('SMTP Port:', smtpPort);
      console.log('SMTP From:', smtpFrom);
      console.log('SMTP To:', smtpTo);
      console.log('SMTP Secure:', smtpSecure);
      console.log('========================');
    }
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

export const config = Config.getInstance();
