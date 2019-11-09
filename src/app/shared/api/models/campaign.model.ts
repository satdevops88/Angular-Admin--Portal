/**
 * Publiers APP
 * @author Aaron Dominguez <aaron@nube53.com>
 * @version 1.0.0
 * @description
 */

import { Resource } from './abstract.resource';

export class Campaign extends Resource {
    // Inherited from Resource
    // Id: string;
    // Name: string;
    // CreatedDate: string;
    // LastModifiedDate: string;
    // OwnerId: string;
    // ParentId?: string;

    EndDate : string;
    MaxVehicles : string;
    StartDate : string;
    Status : string;
    Images : {};
    CampaignActions : {};
}