import { renderComponent, expect } from '../test_helper';
import showUsers from '../../src/components/show_users';

describe('Show users', () => {

    let component;

    beforeEach(() => {
      var users = {users: [{
        id: 1,
        email: 'mohamedwaleed2012@gmail.com',
        firstName: "mohamed",
        lastName: "waleed",
        gender: "male",
        group : "1"
      }] };
      component = renderComponent(showUsers, null, users);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('show_users');
    });

    it('has a table for displaying users' , () => {
        expect(component.find('.table')).to.exist;
    });

    it('shows correct columns' , () => {
      expect(component).to.contain('#');
      expect(component).to.contain('Email');
      expect(component).to.contain('First name');
      expect(component).to.contain('Last name');
      expect(component).to.contain('Gender');

    });

    it('shows correct number of users' , () => {
      expect(component.find('tr').length).to.equal(2);
    });

    it('shows correct users data' , () => {
      expect(component).to.contain(1);
      expect(component).to.contain('mohamedwaleed2012@gmail.com');
      expect(component).to.contain('mohamed');
      expect(component).to.contain('waleed');
      expect(component).to.contain('male');
    });

    it('shows delete button for each user' , () => {
      expect(component.find('.btn-danger')).to.exist;
      expect(component.find('.btn-danger')).to.have.html('Delete');
    });

    describe('Groups pagination', () => {

      beforeEach(() => {
        var users = {users: [{
          id: 1,
          email: 'mohamedwaleed2012@gmail.com',
          firstName: "mohamed",
          lastName: "waleed",
          gender: "male",
          group : "1"
        },{
          id: 2,
          email: 'mohamed@gmail.com',
          firstName: "mohamed",
          lastName: "waleed",
          gender: "male",
          group : "1"
        },{
          id: 3,
          email: 'ahmed@gmail.com',
          firstName: "mohamed",
          lastName: "waleed",
          gender: "male",
          group : "1"
        },{
          id: 4,
          email: 'alex@gmail.com',
          firstName: "mohamed",
          lastName: "waleed",
          gender: "male",
          group : "1"
        },{
          id: 5,
          email: 'ali@gmail.com',
          firstName: "mohamed",
          lastName: "waleed",
          gender: "male",
          group : "1"
        },{
          id: 6,
          email: 'max@gmail.com',
          firstName: "mohamed",
          lastName: "waleed",
          gender: "male",
          group : "1"
        },{
          id: 7,
          email: 'pop@gmail.com',
          firstName: "mohamed",
          lastName: "waleed",
          gender: "male",
          group : "1"
        }],
         totalUsersCount: 7};
        component = renderComponent(showUsers, null, users);
      });

      it('shows a pagaination' , () => {
        expect(component.find('.paginator-area')).to.exist;
      });

      it('shows correct number of pages' , () => {
        expect(component.find('.paginator-area').find('li').length).to.equal(4);
      });

    });


});
