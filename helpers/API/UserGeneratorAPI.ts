import {faker} from '@faker-js/faker';

export interface UserGeneratorAPI {
  name: string;
  username: string;
  email: string;
  password: string;
  skip_confirmation: boolean;
}
    
export function generateUser(): UserGeneratorAPI {
  return {
    name: faker.person.fullName(),
    username: faker.internet.username() + Date.now(),
    email:  faker.internet.email(),
    password: faker.internet.password(),
    skip_confirmation: true
  };
}