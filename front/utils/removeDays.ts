function removeDays(date: Date, days: number): string {
    date.setDate(date.getDate() - (days));

    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0'); // meses começam do 0
    const dia = String(date.getDate()).padStart(2, '0');

    return new Date(`${ano}-${mes}-${dia}`).toISOString();
}

export default removeDays