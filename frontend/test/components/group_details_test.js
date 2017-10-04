import { renderComponent, expect } from '../test_helper';
import groupsDetails from '../../src/components/group_details';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Group details', () => {

    let component;

    beforeEach(() => {
      var state = {
        groups: {
            1:{
            id: 1,
            name: 'Group1',
            category: "Sports",
            users: [
              {email: "mohamed@gmail.com"},
              {email: "ahmed@gmail.com"}
            ]
          }
        }
      };
      component = renderComponent(groupsDetails, {match:{
        params: {
          id: 1
        }
      }}, state);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('group_details');
    });

    it('shows a navbar' , () => {
        expect(component.find('nav')).to.exist;
    });

    it('shows a table', () => {
        expect(component.find('.table')).to.exist;
    });

    it('shows a correct content', () => {
        expect(component.find('tr').length).to.equal(3);
        expect(component).to.contain("Group1");
        expect(component).to.contain("Sports");
        expect(component.find('tr').last().find('th')).to.contain("Users");
        expect(component.find('tr').last().find('td')).to.contain("mohamed@gmail.com, ahmed@gmail.com");
    });
});
