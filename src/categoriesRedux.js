// selectors
export const getAllCategories = ({ categories }) => categories || [];
export const getCategoryById = ({ categories }, id) =>
  (categories || []).find(category => category.id === id);

// reducer
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoriesReducer;
