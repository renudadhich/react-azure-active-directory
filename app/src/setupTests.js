/* Copyright or trade secret notices included must be reproduced in
* any copies authorized by Honeywell Inc.
* The information in this software is subject to change without notice and
* should not be considered as a commitment by Honeywell Inc.
************************************************************  */
/* **********************************************************
* System:       Hive Interface
* Module Name:  setupTests
* Filename:     setupTests.js
* Language:     React.js
*
* History:
* 2020-04-09   Creation of file
*************************************************************  */
// Jest-dom adds custom jest matchers for asserting on DOM nodes.
// Allows you to do things like:
// Expect(element).toHaveTextContent(/react/i)
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {nodeCrypto } from 'crypto';
window.crypto = {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  }
};
configure({ adapter: new Adapter() });