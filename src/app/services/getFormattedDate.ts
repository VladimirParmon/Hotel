export function getFormattedDate(initialValue: number): string {
  const date = new Date(initialValue);
  const day = date.getDate().toString().padStart(2, "0");
  const indexedMonth = date.getMonth() + 1;
  const month = indexedMonth.toString().padStart(2, "0");
  const year = date.getFullYear();
  const y = `${day}/${month}/${year}`;
  return y;
}
