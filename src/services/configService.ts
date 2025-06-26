import { load } from 'js-yaml';
import { CafeConfig } from '../types';

export class ConfigService {
  private static instance: ConfigService;
  private config: CafeConfig | null = null;

  static getInstance(): ConfigService {
    if (!ConfigService.instance) {
      ConfigService.instance = new ConfigService();
    }
    return ConfigService.instance;
  }

  async loadConfig(): Promise<CafeConfig> {
    if (this.config) {
      return this.config;
    }

    try {
      // Try to load cafe.yml first, then cafe.yaml
      let response: Response;
      try {
        response = await fetch('/cafe.yml');
      } catch {
        response = await fetch('/cafe.yaml');
      }

      if (!response.ok) {
        throw new Error(`Failed to load configuration: ${response.status}`);
      }

      const yamlText = await response.text();
      const config = load(yamlText) as CafeConfig;

      if (!this.validateConfig(config)) {
        throw new Error('Invalid configuration format');
      }

      this.config = config;
      return config;
    } catch (error) {
      console.error('Error loading configuration:', error);
      throw new Error(`Configuration load failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private validateConfig(config: any): config is CafeConfig {
    return (
      config &&
      typeof config.name === 'string' &&
      config.location &&
      typeof config.location.address === 'string' &&
      typeof config.location.city === 'string' &&
      typeof config.location.country === 'string' &&
      typeof config.about === 'string' &&
      typeof config.currency === 'string' &&
      config.hours &&
      typeof config.hours.monday === 'string' &&
      typeof config.hours.tuesday === 'string' &&
      typeof config.hours.wednesday === 'string' &&
      typeof config.hours.thursday === 'string' &&
      typeof config.hours.friday === 'string' &&
      typeof config.hours.saturday === 'string' &&
      typeof config.hours.sunday === 'string' &&
      config.contact &&
      typeof config.contact.phone === 'string' &&
      typeof config.contact.email === 'string' &&
      typeof config.contact.instagram === 'string' &&
      Array.isArray(config.categories) &&
      Array.isArray(config.items) &&
      config.theme &&
      typeof config.theme.primaryColor === 'string' &&
      typeof config.theme.secondaryColor === 'string' &&
      typeof config.theme.font === 'string'
    );
  }

  getConfig(): CafeConfig | null {
    return this.config;
  }
}
