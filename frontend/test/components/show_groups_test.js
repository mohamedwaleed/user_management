import { renderComponent, expect } from '../test_helper';
import showGroups from '../../src/components/show_groups';

describe('Show groups', () => {

    let component;

    beforeEach(() => {
      var groups = {groups: [{
        id: 1,
        name: 'Group1',
        category: 'Sports'
      }] };
      component = renderComponent(showGroups, null, groups);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('show_groups');
    });

    it('has a table for displaying groups' , () => {
        expect(component.find('.table')).to.exist;
    });

    it('shows correct columns' , () => {
      expect(component).to.contain('#');
      expect(component).to.contain('Name');
      expect(component).to.contain('Category');
    });

    it('shows correct number of groups' , () => {
      expect(component.find('tr').length).to.equal(2);
    });

    it('shows correct groups data' , () => {
      expect(component).to.contain(1);
      expect(component).to.contain('Group1');
      expect(component).to.contain('Sports');
    });

    it('shows delete button for each group' , () => {
      expect(component.find('.btn-danger')).to.exist;
      expect(component.find('.btn-danger')).to.have.html('Delete');
    });

    describe('Groups pagination', () => {

      beforeEach(() => {
        var groups = {groups: [{
          id: 1,
          name: 'Group1',
          category: 'Sports'
        },
        {
          id: 2,
          name: 'Group2',
          category: 'Social'
        },
        {
          id: 3,
          name: 'Group3',
          category: 'Mecial'
        },
        {
          id: 4,
          name: 'Group4',
          category: 'Sports'
        },
        {
          id: 5,
          name: 'Group5',
          category: 'Sports'
        },{
          id: 6,
          name: 'Group6',
          category: 'Sports'
        },{
          id: 7,
          name: 'Group7',
          category: 'Sports'
        }],
         totalGroupsCount: 7};
        component = renderComponent(showGroups, null, groups);
      });

      it('shows a pagaination' , () => {
        expect(component.find('.paginator-area')).to.exist;
      });

      it('shows correct number of pages' , () => {
        expect(component.find('.paginator-area').find('li').length).to.equal(4);
      });

    });


});
