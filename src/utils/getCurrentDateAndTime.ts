import dayjs from "dayjs";

export const getCurrentDateAndTime = (format: string) => dayjs().format(format);
