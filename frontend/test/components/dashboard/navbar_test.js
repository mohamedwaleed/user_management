import { renderComponent, expect } from '../../test_helper';
import navbar from '../../../src/components/dashboard-feature/navbar';

describe('Navbar', () => {

    let component;

    beforeEach(() => {
      component = renderComponent(navbar);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('navbar');
    });

    it('shows a navbar title' , () => {
        expect(component).to.contain('User managment');
    });

    it('shows a li for each nav bil' , () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows a search form' , () => {
        expect(component.find('form')).to.exist;
    });

    it('has a search button' , () => {
        expect(component.find('button')).to.exist;
    });

    it('has a search box' , () => {
        expect(component.find('input')).to.exist;
    });
});
