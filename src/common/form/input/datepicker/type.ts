export interface Labels {
  days: string[];
  months: string[];
}

export interface ExtraProps {
  formatOutput?: (d: Date) => string; // how is date displayed (what the user sees)
  formatOutProp?: (d: Date) => string; // how is date passed as prop. BY default iso format: yyyy-mm-dd (note that this is not a Date format)
  labels?: Labels; // override default english months
}
