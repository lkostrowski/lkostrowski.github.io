import cover1 from '../assets/dummy-images/issue1.png';
import cover2 from '../assets/dummy-images/issue2.png';

const issueData = {
    name: 'Batman 1 - Revenge of the dark knight',
    covers: [{src: cover1, alt: '', active: true}, {src: cover2, alt: '', active: false}],
    id: 1,
    characters: ['Batman', 'Joker'],
    description: 'Batman: Hush is a landmark story arc in which the Dark Knight is confronted with a mysterious new enemy, resulting in a story line which draws from the Bat Universe\'s rich array of villains whilst introducing a new and enduring adversary. Written by Jeff Loeb and featuring art from Jim Lee that goes a long way to defining Batman\'s 21st Century imagery, Batman: Hush split opinion upon release yet has proved to be a popular and much-referenced addition to the Batman library. The story concerns a new and mysterious enemy from Bruce Wayne\'s past, who manages to recruit multiple members of the Gotham underworld to his cause. The original story line was played out over the course of a year. Hush proved a commercial success, with pre-order sales of 110,061 and ranking number 1 in the 300 top comics of 2002. This collection features BATMAN #608-619 as well as the 6-page segment from Wizard #0 and a 2-page origin story that originally appeared at dccomics.com',
    issueNumber: 1,
    volume: 'Batman base',
    creators: [
        {
            name: 'John Smith',
            role: 'Writer',
            id: 0
        },
        {
            name: 'Lukasz Ostrowski',
            role: 'penciler',
            id: 1
        }
    ],
    originalName: 'Batman #1',
    userRating: '60%',
    concepts: ['Detectives', 'Crime'],
    locations: ['gotham', 'usa'],
    objects: ['Batmobil', 'Gadgets'],
    rating: 4,
    teams: ['JLA']
};

export default () => {
    return issueData;
}