import { combineReducers } from 'redux';
import contact from './contactReducer';
import gradeLearner from './gradeLearnerReducer';
import learner from './learnerReducer';
 
export default combineReducers({
    contact: contact,
    gradeLearner: gradeLearner,
    learner: learner
});