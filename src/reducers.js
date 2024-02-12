export const ItemReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ITEM':
      return action.payload;
    default:
      return state;
  }
};

export const formulationReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_FORMULATION':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const baseReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_BASE':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const concernReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_CONCERN':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const concentrationReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_CONCENTRATION':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const volumeReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_VOLUME':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const caseReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_CASE':
        return action.payload;
      default:
        return state;
    }
  };

  export const nameReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_NAME':
        return action.payload;
      default:
        return state;
    }
  };
  