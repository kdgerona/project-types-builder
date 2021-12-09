import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const WizardData: IEntitySchemaConfig = {
  entity: 'wizard_data',
  schema_version: 'v4',
  properties: [
    {
      id: 'id',
      name: 'id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'additional_driver_ids',
      name: 'additional_driver_ids',
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'addon_ids',
      name: 'addon_ids',
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'booked_by_id',
      name: 'booked_by_id',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'booking_status',
      name: 'booking_status',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'charge',
      name: 'charge',
      type: EPropertyTypes.OBJECT,
      nullable: true,
      additional_properties: [],
    },
    {
      id: 'code',
      name: 'code',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'dropoff_address',
      name: 'dropoff_address',
      type: EPropertyTypes.OBJECT,
      nullable: false,
    },
    {
      id: 'dropoff_counter_id',
      name: 'dropoff_counter_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'entity_code',
      name: 'entity_code',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'event_id',
      name: 'event_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'extras',
      name: 'extras',
      type: EPropertyTypes.ARRAY,
      nullable: false,
    },
    {
      id: 'guest_id',
      name: 'guest_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'image_url',
      name: 'image_url',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'notification_option',
      name: 'notification_option',
      type: EPropertyTypes.OBJECT,
      nullable: false,
    },
    {
      id: 'partner_ids',
      name: 'partner_ids',
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'partner_representative_id',
      name: 'partner_representative_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'payment_option',
      name: 'payment_option',
      type: EPropertyTypes.OBJECT,
      nullable: false,
    },
    {
      id: 'pickup_address',
      name: 'pickup_address',
      type: EPropertyTypes.OBJECT,
      nullable: false,
    },
    {
      id: 'pickup_counter_id',
      name: 'pickup_counter_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'poc_ids',
      name: 'poc_ids',
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'status',
      name: 'status',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'tail_number_id',
      name: 'tail_number_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'user_id',
      name: 'user_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'vehicle_class_id',
      name: 'vehicle_class_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'vehicle_id',
      name: 'vehicle_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'steps',
      name: 'steps',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'attribute',
      name: 'attribute',
      type: EPropertyTypes.DICTIONARY,
      nullable: false,
      additional_properties: [
        {
          id: 'category',
          name: 'category',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'category_settings',
          name: 'category_settings',
          type: EPropertyTypes.ARRAY,
          data_type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'categories',
          name: 'categories',
          type: EPropertyTypes.COLLECTION,
          nullable: false,
          additional_properties: [
            {
              id: 'name',
              name: 'name',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
            {
              id: 'category_type',
              name: 'category_type',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
            {
              id: 'id',
              name: 'id',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
          ],
        },
        {
          id: 'addon_charges',
          name: 'addon_charges',
          type: EPropertyTypes.OBJECT,
          nullable: false,
        },
      ],
    },
    {
      id: 'partner_details',
      name: 'partner_details',
      type: EPropertyTypes.OBJECT,
      nullable: false,
    },
    {
      id: 'booking_type',
      name: 'booking_type',
      type: EPropertyTypes.OBJECT,
      nullable: false,
      additional_properties: [
        {
          id: 'id',
          name: 'id',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'name',
          name: 'name',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'duration_type',
          name: 'duration_type',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
      ],
    },
    {
      id: 'step_config',
      name: 'step_config',
      type: EPropertyTypes.OBJECT,
      nullable: false,
      additional_properties: [
        {
          id: 'current_step',
          name: 'current_step',
          type: EPropertyTypes.NUMBER,
          nullable: false,
        },
        {
          id: 'traverse_counter',
          name: 'traverse_counter',
          type: EPropertyTypes.NUMBER,
          nullable: false,
        },
        {
          id: 'traverse_step_data',
          name: 'traverse_stap_data',
          type: EPropertyTypes.ANY,
          nullable: false,
        },
      ],
    },
  ],
};

export default WizardData;