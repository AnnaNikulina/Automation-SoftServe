export const roles = [
    'Software Developer',
    'Development Team Lead',
    'DevOps Engineer',
    'Systems Administrator',
    'Security Analyst',
    'Data Analyst',
    'Product Manager',
    'Product Designer',
    'Other'
];

export const reasons = [
    'I want to learn the basics of Git',
    'I want to move my repository to GitLab from somewhere else',
    'I want to explore GitLab to see if it’s worth switching to',
    'I want to store my code',
    'I want to use GitLab CI with my existing repository',
    'A different reason'
];

export function getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}