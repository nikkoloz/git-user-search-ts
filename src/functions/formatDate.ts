type FormatType = (dateToFormat: string) => string;

const formatDate: FormatType = (dateToFormat) => {
  const datearr = new Date(dateToFormat).toString().split(" ");
  return datearr[2] + " " + datearr[1] + " " + datearr[3];
};
export default formatDate;
