function formatDate(date){
    newDate = new Date(date);
    dataFormatada = newDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    return dataFormatada;
}

module.exports = formatDate;