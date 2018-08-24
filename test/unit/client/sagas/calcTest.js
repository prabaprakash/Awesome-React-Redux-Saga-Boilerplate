import { describe, it } from 'mocha';
import { expect } from 'chai';
import { takeEvery, put } from 'redux-saga/effects';
import {
  initalize,
  addnumber,
  subnumber,
  changenumber,
  addWatcher,
  subWatcher,
  changeWatcher,
  initalizeWatcher,
} from '../../../../src/client/sagas/calc';
import * as actions from '../../../../src/client/constants';
import * as action from '../../../../src/client/actions';

describe('calc sagatest', () => {
  describe('initalizeWatcher test', () => {
    const saga = initalizeWatcher();
    it('should listen to actions.INITALIZE_APPLICATION', () => {
      expect(saga.next().value).to.deep.equal(
        takeEvery(actions.INITALIZE_APPLICATION, initalize)
      );
    });
    it('should be done', () => {
      const next = saga.next();
      expect(next.done).to.equal(true);
    });
  });

  describe('addWatcher test', () => {
    const saga = addWatcher();
    it('should listen to actions.ADD', () => {
      expect(saga.next().value).to.deep.equal(
        takeEvery(actions.ADD, addnumber)
      );
    });
    it('should be done', () => {
      const next = saga.next();
      expect(next.done).to.equal(true);
    });
  });

  describe('subWatcher test', () => {
    const saga = subWatcher();
    it('should listen to actions.SUB', () => {
      expect(saga.next().value).to.deep.equal(
        takeEvery(actions.SUB, subnumber)
      );
    });
    it('should be done', () => {
      const next = saga.next();
      expect(next.done).to.equal(true);
    });
  });

  describe('changeWatcher test', () => {
    const saga = changeWatcher();
    it('should listen to actions.CHANGE', () => {
      expect(saga.next().value).to.deep.equal(
        takeEvery(actions.CHANGE, changenumber)
      );
    });
    it('should be done', () => {
      const next = saga.next();
      expect(next.done).to.equal(true);
    });
  });

  describe('addNumber test', () => {
    const saga = addnumber(action.add(100));
    it('should put actions.save', () => {
      expect(saga.next().value).to.deep.equal(
        put({
          type: actions.SAVE,
          number: 101,
        })
      );
    });
    it('should be done', () => {
      const next = saga.next();
      expect(next.done).to.equal(true);
    });
  });

  describe('subNumber test', () => {
    const saga = subnumber(action.sub(100));
    it('should put actions.save', () => {
      expect(saga.next().value).to.deep.equal(
        put({
          type: actions.SAVE,
          number: 99,
        })
      );
    });
    it('should be done', () => {
      const next = saga.next();
      expect(next.done).to.equal(true);
    });
  });

  describe('changeNumber test', () => {
    const saga = changenumber(action.change(100));
    it('should put actions.save', () => {
      expect(saga.next().value).to.deep.equal(
        put({
          type: actions.SAVE,
          number: 100,
        })
      );
    });
    it('should be done', () => {
      const next = saga.next();
      expect(next.done).to.equal(true);
    });
  });
});
