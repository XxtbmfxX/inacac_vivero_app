export interface FormValues {
  cantidad: number;
  fecha_recepcion: Date | null;
  fecha_colecta: Date | null;
  porcentaje_germinacion: number;
  peso_enviado: number;
  peso_100_semillas: number;
  peso_recibido: number;
  condicion_semilla: string;
  id_especie: number | null;
  id_procedencia: number | null;
  rut_colector: string;
}

export interface TextInputFieldProps {
  placeholder: string;
  value: string;
  error?: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  label: string 
}

export interface PickerFieldProps {
  selectedValue: number | null;
  onValueChange: (itemValue: any) => void;
  options: { label: string; value: number }[];
  error?: string;
  label: string 
  valores: any
}

export interface DatePickerFieldProps {
  value: Date;
  onChange: (event: any, date?: Date) => void;
  error?: string;
  label: string 
}
