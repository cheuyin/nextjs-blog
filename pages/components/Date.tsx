// Parse yyyy-mm-dd into a more readable format
import { format, parseISO } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
