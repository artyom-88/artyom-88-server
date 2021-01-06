export class CreateCareerDto {
  readonly title: string;
  readonly site: string;
  readonly post: string;
  readonly description: string;
  readonly tools: string;
  readonly startDate: Date;
  readonly endDate: Date;
}
