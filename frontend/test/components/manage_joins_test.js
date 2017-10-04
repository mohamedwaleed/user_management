import { renderComponent, expect } from '../test_helper';
import manageJoins from '../../src/components/manage_joins';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Manage joins', () => {

    let component;

    beforeEach(() => {
      var state = {
        users: [{
          id: 1,
          email: 'mohamedwaleed2012@gmail.com',
          firstName: "mohamed",
          lastName: "waleed",
          gender: "male",
          group : "1"
        }],
        groups: [{
          id: 1,
          name: 'Group1',
          category: 'Sports'
        }]
      };
      component = renderComponent(manageJoins, null, state);
    });

    it('has a correct class' , () => {

        expect(component).to.have.class('join-group');
    });

    it('shows a navbar' , () => {
        expect(component.find('nav')).to.exist;
    });

    it('has 2 option box', () => {
        expect(component.find('select').length).to.equal(2);
    });

    it('shows option box for users' , () => {
      expect(component.find('.user')).to.exist;
    });

    it('shows option box for groups' , () => {
      expect(component.find('.group')).to.exist;
    });

    it('has 2 buttons (join , disjoin)' , () => {
      expect(component.find('.join')).to.exist;
      expect(component.find('.disjoin')).to.exist;
    });



});
