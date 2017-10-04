import { renderComponent, expect } from '../test_helper';
import dashboard from '../../src/components/dashboard';

describe('Dashboard', () => {

    let component;

    beforeEach(() => {
      component = renderComponent(dashboard);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('dashboard');
    });

    it('shows navbar' , () => {
      expect(component.find('nav')).to.exist;
    });

    it('shows control board' , () => {
      expect(component.find('.control-board')).to.exist;
    });
});
