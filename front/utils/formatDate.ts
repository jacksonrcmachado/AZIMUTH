function formatDate(d: Date, local: boolean = true) {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = local ? String(d.getFullYear()).slice(-2) : String(d.getFullYear());
  if (!local) return `${year}-${month}-${day}`;
  return `${day}/${month}/${year}`;
}

export default formatDate