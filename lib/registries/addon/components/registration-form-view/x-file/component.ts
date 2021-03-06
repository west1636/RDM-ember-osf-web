import { tagName } from '@ember-decorators/component';
import { alias } from '@ember-decorators/object/computed';
import Component from '@ember/component';

import { layout } from 'ember-osf-web/decorators/component';
import { Answerable } from '../component';
import template from './template';

@tagName('')
@layout(template)
export default class ViewFile extends Component {
    static positionalParams = ['part'];

    part!: Answerable;

    @alias('part.extra') fileList!: object[];
}
