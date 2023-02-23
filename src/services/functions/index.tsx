export const reduceTitle = (title: string) => {
  if (title.length > 17) return title.slice(0, 18) + '...';
  else {
    return title;
  }
};
