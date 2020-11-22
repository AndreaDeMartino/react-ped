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
export const filterAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const homeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const activityAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

//Cascade Childreen left
export const left = {
  hidden: { x: -2500 },
  show: { x: 0, transition: { duration: 1.5 } },
};

//Cascade Childreen right
export const right = {
  hidden: { x: 2500 },
  show: { x: 0, transition: { duration: 1.5 } },
};

//Cascade Childreen left
export const leftLong = {
  hidden: { x: -2500 },
  show: { x: 0, transition: { duration: 2 } },
};

//Cascade Childreen right
export const rightLong = {
  hidden: { x: 2500 },
  show: { x: 0, transition: { duration: 2 } },
};


//Cascade Childreen top
export const top = {
  hidden: { y: 2000 },
  show: { y: 0, transition: { duration: 1.5 } },
};

export const boxAnimation = {
  hidden: { opacity: 0, bottom: -100 },
  show: { opacity: 1, bottom: -130, transition: { duration: 0.3 } }
};
