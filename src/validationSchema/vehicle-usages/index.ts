import * as yup from 'yup';

export const vehicleUsageValidationSchema = yup.object().shape({
  date: yup.date().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  vehicle_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
