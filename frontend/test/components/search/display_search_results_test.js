import { renderComponent, expect } from '../../test_helper';
import displaySearchResults from '../../../src/components/search/display_search_results';

describe('Search', () => {

    let component;

    beforeEach(() => {
      var state =  {searchResult: {
        group: [{id:1, name: "Group1"}]
      }};
      component = renderComponent(displaySearchResults, null, state);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('search_result');
    });

    it('shows correct data' , () => {
      expect(component.find('.search_result').find('li').length).to.equal(1);
    });


});
