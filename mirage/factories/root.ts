import { association, Factory, ModelInstance, trait, Trait } from 'ember-cli-mirage';
import config from 'ember-get-config';
import { Links } from 'jsonapi-typescript';

import User from 'ember-osf-web/models/user';

const {
    featureFlagNames: {
        routes,
        navigation,
        storageI18n,
        verifyEmailModals,
    },
} = config;

export interface Root {
    activeFlags: string[];
    message: string;
    version: string;
    links: Links;
    currentUser?: User;
}

interface RootTraits {
    withNewRegistriesStyle: Trait;
}

export default Factory.extend<Root & RootTraits>({
    activeFlags: [
        ...Object.values(routes),
        ...Object.values(navigation),
        storageI18n,
        verifyEmailModals,
    ],
    message: 'Welcome to the OSF API.',
    version: '2.8',
    links: {},
    currentUser: association() as User,

    withNewRegistriesStyle: trait({
        afterCreate(root: ModelInstance<Root>) {
            root.activeFlags.push('ember_registries_new_style');
        },
    }),
});
