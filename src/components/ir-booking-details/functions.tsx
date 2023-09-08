import moment from 'moment';
import accounting from 'accounting';

export const _formatDate = (date: string) => {
  // Month Name 3 letters, Day, Year
  return moment(date).format('MMM DD, YYYY');
};

export const _formatAmount = (amount: string) => {
  // format the amount using accounting.js
  return accounting.formatMoney(amount);
};

export const _getDay = (date: string) => {
  // formate it as day number/month number and day name
  return moment(date).format('DD/MM ddd');
};

export const _formatTime = (hour: string, minute: string) => {
  // format them as AM/PM using moment.js
  return moment(`${hour}:${minute}`, 'HH:mm').format('hh:mm A');
};
