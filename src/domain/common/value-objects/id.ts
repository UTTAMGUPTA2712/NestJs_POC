import * as Joi from "joi";
import { InvalidArgumentException } from "node-exceptions";

export class Id {
    private readonly value: string;

    constructor(value: string) {
        Joi.assert(value, Joi.string().uuid(), new InvalidArgumentException('Invalid Id'))
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}
