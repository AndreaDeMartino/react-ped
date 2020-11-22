/****************************************************
 * FUNCTIONS
 ****************************************************/

// Get Categories
export const getSelector = (list, type) => {
  const array = [];
  switch (type) {
    case "category":
      list.map((item) => {
        array.push("Tutte le categorie");
        array.push(item.category);
        return "";
      });
      return array;
    case "club":
      list.map((item) => {
        array.push("Tutti i club");
        array.push(item.club);
        return "";
      });
      return array;
    case "name":
      list.map((item) => {
        array.push("Tutte le attivita");
        array.push(item.name);
        return "";
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

/****************************************************
 * ANIMATIONS
 ****************************************************/

//Cascade Container
export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const componentsAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

//Cascade Childreen left
export const left = {
  hidden: { x: -2000 },
  show: { x: 0, transition: { duration: 1.5 } },
};

//Cascade Childreen right
export const right = {
  hidden: { x: 2000 },
  show: { x: 0, transition: { duration: 1.5 } },
};


//Cascade Childreen top
export const top = {
  hidden: { y: 2000 },
  show: { y: 0, transition: { duration: 1.5 } },
};