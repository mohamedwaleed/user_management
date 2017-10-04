import { renderComponent, expect } from '../test_helper';
import userDetails from '../../src/components/user_details';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Group details', () => {

    let component;

    beforeEach(() => {
      var state = {
        users: {
            1:{
              id: 1,
              email: 'mohamedwaleed2012@gmail.com',
              firstName: "mohamed",
              lastName: "waleed",
              gender: "male",
              groups : [{name:"Group1"}, {name:"Group2"}]
            }
        }
      };
      component = renderComponent(userDetails, {match:{
        params: {
          id: 1
        }
      }}, state);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('user_details');
    });

    it('shows a navbar' , () => {
        expect(component.find('nav')).to.exist;
    });

    it('shows a table', () => {
        expect(component.find('.table')).to.exist;
    });

    it('shows a correct content', () => {
        expect(component.find('tr').length).to.equal(5);
        expect(component).to.contain("mohamedwaleed2012@gmail.com");
        expect(component).to.contain("mohamed");
        expect(component).to.contain("waleed");
        expect(component).to.contain("male");
        expect(component.find('img')).to.exist;
        expect(component.find('tr').last().find('th')).to.contain("Groups");
        expect(component.find('tr').last().find('td')).to.contain("Group1, Group2");
    });
});
