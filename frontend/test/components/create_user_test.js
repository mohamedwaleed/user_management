import { renderComponent, expect } from '../test_helper';
import createUser from '../../src/components/create_user';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Create user', () => {

    let component;
    let mock ;
    beforeEach(() => {
      component = renderComponent(createUser);
      // mock = new MockAdapter(axios);
    });

    it('has a correct class' , () => {

        expect(component).to.have.class('create-user');
    });

    it('shows a navbar' , () => {
        expect(component.find('nav')).to.exist;
    });

    it('shows email textbox' , () => {
      expect(component.find('.email')).to.exist;
    });

    it('shows firstname textbox' , () => {
      expect(component.find('.firstname')).to.exist;
    });

    it('shows lastname textbox' , () => {
      expect(component.find('.lastname')).to.exist;
    });

    it('shows age textbox' , () => {
      expect(component.find('.gender')).to.exist;
    });

    it('shows avalible group option box' , () => {
      expect(component.find('select')).to.exist;
    });

    it('shows submit button' , () => {
      expect(component.find('.create')).to.exist;
    });

});
