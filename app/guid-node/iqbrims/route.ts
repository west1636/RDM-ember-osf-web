import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import Route from '@ember/routing/route';

import Node from 'ember-osf-web/models/node';
import { GuidRouteModel } from 'ember-osf-web/resolve-guid/guid-route';
import Analytics from 'ember-osf-web/services/analytics';
import Ready from 'ember-osf-web/services/ready';

function preventDrop(e: DragEvent) {
    if ((e.target as HTMLDivElement).id === 'manuscript-dropzone') {
        return;
    }
    if ((e.target as HTMLDivElement).id === 'data-dropzone') {
        return;
    }
    if ((e.target as HTMLDivElement).id === 'checklist-dropzone') {
        return;
    }

    e.preventDefault();
    e.dataTransfer!.effectAllowed = 'none';
    e.dataTransfer!.dropEffect = 'none';
}

export default class GuidNodeIQBRIMS extends Route {
    @service analytics!: Analytics;
    @service ready!: Ready;

    model(this: GuidNodeIQBRIMS) {
        return this.modelFor('guid-node');
    }

    @action
    async didTransition() {
        const { taskInstance } = this.controller.model as GuidRouteModel<Node>;
        await taskInstance;
        const node = taskInstance.value;
        window.addEventListener('dragover', preventDrop);
        window.addEventListener('drop', preventDrop);

        this.analytics.trackPage(node ? node.public : undefined, 'nodes');
    }
}