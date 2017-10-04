import { renderComponent, expect } from '../../test_helper';
import searchWidget from '../../../src/components/search/search_widget';

describe('Search', () => {

    let component;

    beforeEach(() => {
      component = renderComponent(searchWidget);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('navbar-form');
    });

    it('shows an input' , () => {
      expect(component.find('input')).to.exist;
    });

    it('shows search button' , () => {
      expect(component.find('input')).to.exist;
    });


});
