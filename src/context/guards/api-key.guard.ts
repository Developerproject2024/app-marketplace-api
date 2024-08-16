import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly validApiKey: string;
  constructor() {
    this.validApiKey = process.env.API_KEY;
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    if (!apiKey) {
      throw new UnauthorizedException('API key is missing');
    }
    const isValid = apiKey === this.validApiKey;

    if (!isValid) {
      throw new UnauthorizedException('Invalid API key');
    }

    return true;
  }
}
