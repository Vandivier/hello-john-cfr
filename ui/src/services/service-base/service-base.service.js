/**
 *  file name: service-base-service.js
 *  aliases: mBaseService, ServiceBaseService
 *
 *  description:
 *      wraps a number of commonly used services into one injectable base service.
 *
 * TODO: rxjs and typescript (tsx)
 * TODO: make rella-utils npm module (like ella-utils for react; ServiceBaseService and ServiceUrlManager)
 * 
 * note: taken directly from below ref
 * ref: https://github.com/Vandivier/react-report-maker/blob/master/services/service-base/service-base.service.js
 **/

import { ServiceUrlManager } from '../service-url-manager/service-url-manager.service';

const EllaUtils = require('ella-utils');

export class ServiceBaseService {
    mUrlManager = new ServiceUrlManager();
    State = EllaUtils.State;
    Utils = EllaUtils;

    constructor(ServiceUrlManager) {}

    fpGet(sUrlKey, oOptions) {
        return this.mUrlManager.fpGet(sUrlKey, oOptions);
    }

    fpPost(sUrlKey, oOptions) {
        return this.mUrlManager.fpPost(sUrlKey, oOptions);
    }
}
