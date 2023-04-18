import * as actionTypes from './actionTypes';

export const storeContactInformation = (contactInformation) => {
    return {
      type: actionTypes.STORE_CONTACT_INFORMATION,
      contactInformation: contactInformation
    }
};

export const deleteContactInformation = (id) => {
    return {
        type: actionTypes.REMOVE_CONTACT_INFORMATION,
        id: id
    }
};