import dayjs from 'dayjs';

export class DateHelpers {
  public static formatStringToDate(dateString: string): string {
    return dayjs(dateString).format('DD MMM YYYY');
  }
}
