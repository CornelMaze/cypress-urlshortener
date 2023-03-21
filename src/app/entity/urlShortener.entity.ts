import { GeneralUtil } from '../utils/general-utils';

export class UrlShortenerEntity {
  public code!: string;
  public short_link!: string;
  public full_short_link!: string;
  public full_share_link!: string;
  public original_link!: string;

  public mapToUrlShortenerEntity(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.code = data.code;
      this.short_link = data.short_link;
      this.full_short_link = data.full_short_link;
      this.full_share_link = data.full_share_link;
      this.original_link = data.original_link;
    }
  }
}
