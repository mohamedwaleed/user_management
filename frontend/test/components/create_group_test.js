import { renderComponent, expect } from '../test_helper';
import createUser from '../../src/components/create_group';

describe('Create group', () => {

    let component;

    beforeEach(() => {
      component = renderComponent(createUser);
    });

    it('has a correct class' , () => {

        expect(component).to.have.class('create-group');
    });

    it('shows a navbar' , () => {
        expect(component.find('nav')).to.exist;
    });

    it('shows email textbox' , () => {
      expect(component.find('.name')).to.exist;
    });

    it('shows firstname textbox' , () => {
      expect(component.find('.category')).to.exist;
    });


});
