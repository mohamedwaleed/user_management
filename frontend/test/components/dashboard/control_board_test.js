import { renderComponent, expect } from '../../test_helper';
import controlBoard from '../../../src/components/dashboard-feature/control_board';

describe('Control board', () => {

    let component;

    beforeEach(() => {
      component = renderComponent(controlBoard);
    });

    it('has a correct class' , () => {
        expect(component).to.have.class('control-board');
    });

    it('show a 3 buttons' , () => {
        expect(component.find('a').length).to.equal(3);
    });

});
