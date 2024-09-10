import { Email } from './email';
import { BadRequestException } from '@nestjs/common';

describe('Testing ID object', () => {
  let testEmail: string;
  let email: Email;
  beforeEach(() => {
    testEmail = 'test@mail.com';
    email = new Email(testEmail);
  });
  describe('Get good email', () => {
    it('Return value', () => {
      expect(email.getValue()).toBe(testEmail);
    });
  });
  describe('Get bad email', () => {
    it('Return value', () => {
      try {
        testEmail = 'test12345';
        email = new Email(testEmail);
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
        expect(e.message).toBe('Invalid email');
      }
    });
  });
});
