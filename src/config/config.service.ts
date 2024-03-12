import { Inject, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { ConfigOptions } from './types/config-options';

type EnvConfig = Record<string, string>;

@Injectable()
export class ConfigService {
  private readonly config: EnvConfig;

  constructor(@Inject('CONFIG_OPTIONS') private options: ConfigOptions) {
    const envFilePath = path.resolve(__dirname, '../../', options.envFile);
    this.config = dotenv.parse(fs.readFileSync(envFilePath));
  }

  get(key: string): any {
    return this.config[key];
  }
}
