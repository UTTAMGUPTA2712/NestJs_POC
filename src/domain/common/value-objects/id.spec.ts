import { Id } from "./id"
import {v4 as uuid4} from 'uuid';
import {validate as validateUUID} from 'uuid';
import { InvalidArgumentException } from "node-exceptions";
import { exception } from "console";



describe('Testing ID object', () => {
    let uuid: string;
    let id: Id;
    beforeEach(() => {
        uuid = uuid4();
        id = new Id(uuid);
    })
    describe('Get value object', () => {
        it('Return value', () => {
            expect(id.getValue()).toBe(uuid);        
        })
        it('Return validated uuid', () => {
            expect(validateUUID(id.getValue())).toBe(true);        
        })
    })

    describe('Get bad value', () => {
        it('Return exception', () => {
            try {
                uuid = "sddf";
                id = new Id(uuid);
            }
            catch(e) {
                expect(e).toBeInstanceOf(InvalidArgumentException);
                expect(e.message).toBe('Invalid Id');
            }
        })
        
    })
})