export const formatDate = () => {
  const dateFormatted = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());

  const upperCasedWeekday = dateFormatted.replace(/^\w/, (l) =>
    l.toUpperCase()
  );

  return upperCasedWeekday;
};
