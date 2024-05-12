import { formatDistanceToNow } from 'date-fns';
import format from 'date-fns/format';
import locale from 'date-fns/locale/en-US';

export const formatDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export function convertDate(date) {
  return format(new Date(date), 'MM/dd/yyyy h:mm p');
}

console.log(locale)