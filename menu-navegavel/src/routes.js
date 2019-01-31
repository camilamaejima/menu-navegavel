import Projects from  './components/projects/Projects.vue';
import Home from  './components/home/Home.vue';
import Contacts from  './components/contacts/Contacts.vue';
import Services from  './components/services/Services.vue';

export const routes = [
    {path: '',component: Home},
    {path: '/projects',component: Projects},
    {path: '/contacts',component: Contacts},
    {path: '/services',component: Services},
];

