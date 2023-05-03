import * as actionTypes from './actionTypes';

export const storeLearnerInformation = (learnerInformation) => {
    return {
      type: actionTypes.STORE_LEARNER_INFORMATION,
      learnerInformation: learnerInformation
    }
};

export const deleteLearnerInformation = () => {
    return {
        type: actionTypes.REMOVE_LEARNER_INFORMATION
    }
};