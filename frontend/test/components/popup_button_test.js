import { renderComponent, expect } from '../test_helper';
import groupsDetails from '../../src/components/popup_button';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Popup button', () => {

    let component;

    beforeEach(() => {
      var state = {
        showModal: false
      };
      var content = function(){
        return "<h3>Message<h3>";
      };
      component = renderComponent(groupsDetails, {
        content: content
      }, state);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('popup-button');
    });

    it('has 1 buttons in case showModal=false', () => {
        expect(component.find('button').length).to.equal(1);
    });



});
