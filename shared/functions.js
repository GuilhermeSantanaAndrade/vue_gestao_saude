/* eslint-disable */

const functions = {
  install(Vue, options) {
    Vue.applyCPFMask = function applyCPFMask(value) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    };

    Vue.applyCNPJMask = function applyCNPJMask(value) {
      return value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        "$1.$2.$3/$4-$5"
      );
    };

    Vue.applyCNPJ_or_CPFMask = function applyCNPJ_or_CPFMask(value) {
      if (!value) value = "";

      if (value.length <= 11) return this.applyCPFMask(value);
      else return this.applyCNPJMask(value);
    };
  }
};

export default functions;
