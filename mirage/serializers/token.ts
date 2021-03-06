import { SingleResourceDocument } from 'osf-api';

import Token from 'ember-osf-web/models/token';
import ApplicationSerializer from './application';

export default class TokenSerializer extends ApplicationSerializer<Token> {
    normalize(json: SingleResourceDocument) {
        if (json.data.attributes && json.data.attributes.scopes) {
            const { scopes } = json.data.attributes;

            if (typeof scopes === 'string') {
                /* eslint-disable no-param-reassign */
                delete json.data.attributes.scopes;

                json.data.relationships = {
                    ...json.data.relationships,
                    scopes: {
                        data: scopes.split(' ').map(s => ({ id: s, type: 'scopes' })),
                        links: {},
                    },
                };
                /* eslint-enable no-param-reassign */
            }
        }
        return super.normalize(json);
    }

    serialize(token: any, request: any) {
        const scopeIds = token.attrs.scopeIds || [];

        delete token.attrs.scopeIds; // eslint-disable-line no-param-reassign

        const json = super.serialize(token, request);
        json.data.attributes.scopes = scopeIds.join(' ');
        return json;
    }
}
