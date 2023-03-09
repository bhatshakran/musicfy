export default function clipText(text: string): string {
  const splittedStr = text.split('');
  const arr = [];
  if (text.length > 25) {
    for (let i = 0; i < 15; i++) {
      arr.push(splittedStr[i]);
    }

    arr.push('...');
    return arr.join('');
  }

  return text;
}
