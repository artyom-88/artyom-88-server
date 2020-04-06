import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import app from './app';
import blog from './blog';

export default combineReducers({ app, blog, routing });
