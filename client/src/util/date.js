import { utc } from 'moment';

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

export const dateFromString = (dateStr, format = DEFAULT_DATE_FORMAT) => (dateStr && utc(dateStr, format)) || null;
