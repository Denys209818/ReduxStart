import { combineReducers } from "redux";

import cars from './cars';
import trucks from './trucks';

export default combineReducers({
    cars,
    trucks
});