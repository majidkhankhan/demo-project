const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength);
  }
  return text;
};

export const stripHtmlTags = (html: string, maxLength: number) => {
  html = html.replace(/<[^<>]+>/g, "");
  return truncateText(html, maxLength);
};
