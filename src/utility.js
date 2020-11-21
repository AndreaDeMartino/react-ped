/****************************************************
 * Functions
 ****************************************************/

// Get Categories
export const getSelector = (list, type) => {
  const array = [];
  switch (type) {
    case "category":
      list.map((item) => {
        array.push("Tutte le categorie");
        array.push(item.category);
      });
      return array;
    case "club":
      list.map((item) => {
        array.push("Tutti i club");
        array.push(item.club);
      });
      return array;
    case "name":
      list.map((item) => {
        array.push("Tutte le attivita");
        array.push(item.name);
      });
      return array;
    default:
      return "error";
  }
};

// Remove Duplicates
export const removeDuplicate = (list) => {
  const array = list.filter((item, index) => {
    return list.indexOf(item) === index;
  });
  return array;
};
