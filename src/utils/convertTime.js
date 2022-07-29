export const convertTime = (time) => {
  const [hours, minutes] = [Math.floor(time / 60), time % 60];
  return `${hours}h  ${minutes}min`;
};
