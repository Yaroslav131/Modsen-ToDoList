export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}

export function getRandomColor(colorsArray: string[]): string {
  const randomIndex = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomIndex];
}