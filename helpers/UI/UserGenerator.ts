import {faker} from '@faker-js/faker';

export class UserGenerator {
    
    static generateUser() {
      return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.username() + Date.now(), 
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.helpers.arrayElement (['Software Developer', 'Development Team Lead', 'DevOps Engineer', 'Systems Administrator', 'Security Analyst', 'Data Analyst', "Product Manager", 'Product Designer', 'Other']), 
        reason: faker.helpers.arrayElement (['I want to learn the basics of Git', 'I want to move my repository to GitLab from somewhere else', 'I want to explore GitLab to see if it’s worth switching to', 'I want to store my code', 'I want to use GitLab CI with my existing repository', 'A different reason'])
    }
    }
}