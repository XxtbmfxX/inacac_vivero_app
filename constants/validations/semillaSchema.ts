
import * as Yup from 'yup';

export const semillaValidationSchema = Yup.object().shape({
    cantidad: Yup.number().required('La cantidad es requerida'),
    fecha_recepcion: Yup.date().required('La fecha de recepción es requerida'),
    fecha_colecta: Yup.date().required('La fecha de colecta es requerida'),
    porcentaje_germinacion: Yup.number().min(0).max(100).required('El porcentaje de germinación es requerido'),
    peso_enviado: Yup.number().required('El peso enviado es requerido'),
    peso_100_semillas: Yup.number().required('El peso de 100 semillas es requerido'),
    peso_recibido: Yup.number().required('El peso recibido es requerido'),
    condicion_semilla: Yup.string().required('La condición de la semilla es requerida'),
    id_especie: Yup.number().required('La especie es requerida'),
    id_procedencia: Yup.number().required('La procedencia es requerida'),
    rut_colector: Yup.string().required('El RUT del colector es requerido'),
  });
