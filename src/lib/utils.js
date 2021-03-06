const Intl = require('intl');

module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const hour = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);

    return {
      day,
      month,
      year,
      hour,
      minutes,
      format: `${day}/${month}/${year}`,
      birthDay: `${day}/${month}`,
      iso:`${year}-${month}-${day}`,
    }
  },

  formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(price / 100);
  },

  formatCpfCnpj(value) {
    value = value.replace(/\D/g, '');

    if (value.length > 14) value = value.slice(0, -1);

    if (value.length > 11) {
      value = value.replace(/(\d{2})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
      
    } else {
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1-$2");

    }

    return value;
  },

  formatCep(value) {
    value = value.replace(/\D/g, '');

    if (value.length > 8) value = value.slice(0, -1);
  
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1-$2");
    
    return value;
  },
};
