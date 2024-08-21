import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useSupabase } from "@/context/supabaseAuthContext";

type SelectFields = string[];

type SupabaseDataContextProps = {
  semillas: any[];
  químicos: any[];
  materiales: any[];
  tareas: any[];
  plantas: any[];
  plantación: any[];
  especies: any[];
  procedencias: any[];
  fetchData: (
    table: string,
    fields?: SelectFields
  ) => Promise<null | undefined>;
  addData: (table: string, data: any) => Promise<true | null | undefined>;
  updateData: (
    table: string,
    id: number,
    data: any
  ) => Promise<true | null | undefined>;
  deleteData: (table: string, data: any) => Promise<true | null | undefined>;
};

const SupabaseDataContext = createContext<SupabaseDataContextProps | undefined>(
  undefined
);

export const useSupabaseData = () => {
  const context = useContext(SupabaseDataContext);
  if (!context) {
    throw new Error(
      "useSupabaseData debe ser usado dentro de un SupabaseDataProvider"
    );
  }
  return context;
};

export const SupabaseDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { session } = useSupabase(); // Accede a la sesión desde el contexto de Supabase
  const [semillas, setSemillas] = useState<any[]>([]);
  const [químicos, setQuímicos] = useState<any[]>([]);
  const [materiales, setMateriales] = useState<any[]>([]);
  const [tareas, setTareas] = useState<any[]>([]);
  const [plantas, setPlantas] = useState<any[]>([]);
  const [plantación, setPlantación] = useState<any[]>([]);
  const [procedencias, setProcedencias] = useState<any[]>([]);

  const [especies, setEspecies] = useState<any[]>([]);

  const fetchData = async (table: string, fields: SelectFields = ["*"]) => {
    if (!session) return;

    console.log("==========")
    console.log(fields.join(", "))
    console.log("==========")
    
    const { data, error } = await supabase
      .from(table)
      .select(fields.join(", "));

    if (error) {
      console.error(`Error fetching data from ${table}:`, error);
      return null;
    }
    if (table === "semilla") {
      setSemillas(data || []);
      // .select("*, especie (nombre_especie), procedencia (nombre_procedencia)");
    } else if (table === "químico") {
      setQuímicos(data || []);
      // .select("*, categoría (nombre_categoría), etiqueta (color_etiqueta)");
    } else if (table === "material") {
      setMateriales(data || []);
    } else if (table === "tarea") {
      setTareas(data || []);
    } else if (table === "planta") {
      setPlantas(data || []);
    } else if (table === "plantación") {
      setPlantación(data || []);
    } else if (table === "especie") {
      setEspecies(data || []);
    } else if (table === "procedencia") {
      setProcedencias(data || []);
    } else {
      return error;
    }
  };

  const addData = async (table: string, data: any) => {
    if (!session) return;

    const { error } = await supabase.from(table).insert(data);

    if (error) {
      console.error(`Error adding data to ${table}:`, error);
      return null;
    }
    return true; // Devuelve true si se insertó correctamente
  };

  const updateData = async (table: string, id: number, data: any) => {
    if (!session) return;

    const { error } = await supabase.from(table).update(data).eq("id", id);

    if (error) {
      console.error(`Error updating data in ${table}:`, error);
      return null;
    }

    return true; // Devuelve true si se actualizó correctamente
  };

  const deleteData = async (table: string, id: number) => {
    if (!session) return;

    const { error } = await supabase.from(table).delete().eq("id", id);

    if (error) {
      console.error(`Error deleting data from ${table}:`, error);
      return null;
    }

    return true; // Devuelve true si se eliminó correctamente
  };

  return (
    <SupabaseDataContext.Provider
      value={{
        semillas,
        químicos,
        materiales,
        tareas,
        plantas,
        plantación,
        especies,
        procedencias,
        fetchData,
        addData,
        updateData,
        deleteData,
      }}
    >
      {children}
    </SupabaseDataContext.Provider>
  );
};
