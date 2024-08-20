import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useSupabase } from "@/context/supabaseAuthContext";

type SupabaseDataContextProps = {
  semillas: any[];
  fetchSemillas: () => Promise<void>;
  addSemilla: (data: any) => Promise<void>;
  updateSemilla: (id: number, data: any) => Promise<void>;
  deleteSemilla: (id: number) => Promise<void>;
  químicos: any[];
  fetchQuímicos: () => Promise<void>;
  addQuímico: (data: any) => Promise<void>;
  updateQuímico: (id: number, data: any) => Promise<void>;
  deleteQuímico: (id: number) => Promise<void>;
  materiales: any[];
  fetchMateriales: () => Promise<void>;
  addMaterial: (data: any) => Promise<void>;
  updateMaterial: (id: number, data: any) => Promise<void>;
  deleteMaterial: (id: number) => Promise<void>;
  tareas: any[];
  fetchTareas: () => Promise<void>;
  addTarea: (data: any) => Promise<void>;
  updateTarea: (id: number, data: any) => Promise<void>;
  deleteTarea: (id: number) => Promise<void>;
  plantas: any[];
  fetchPlanta: () => Promise<void>;
  addPlanta: (data: any) => Promise<void>;
  updatePlanta: (id: number, data: any) => Promise<void>;
  deletePlanta: (id: number) => Promise<void>;
  plantación: any[];
  fetchPlantación: () => Promise<void>;
  addPlantación: (data: any) => Promise<void>;
  updatePlantación: (id: number, data: any) => Promise<void>;
  deletePlantación: (id: number) => Promise<void>;
  especies: any[];
  fetchEspecies: () => Promise<void>;
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

  const [especies, setEspecies] = useState<any[]>([]);


  const fetchData = async (table: string, selectQuery: string) => {
    const { data, error } = await supabase.from(table).select(selectQuery);
    if (error) {
      console.error(`Error fetching ${table}:`, error);
      return [];
    }
    return data || [];
  };
  

  // Fetch Functions
  const fetchSemillas = async () => {
    if (!session) return;
    const { data, error } = await supabase
      .from("semilla")
      .select("*, especie (nombre_especie), procedencia (nombre_procedencia)");
    if (error) {
      console.error("Error fetching semillas:", error);
      return;
    }
    setSemillas(data || []);
  };

  const fetchQuímicos = async () => {
    if (!session) return;
    const { data, error } = await supabase
      .from("químico")
      .select("*, categoría (nombre_categoría), etiqueta (color_etiqueta)");
    if (error) {
      console.error("Error fetching químicos:", error);
      return;
    }
    setQuímicos(data || []);
  };

  const fetchMateriales = async () => {
    if (!session) return;
    const { data, error } = await supabase.from("material").select("*");
    if (error) {
      console.error("Error fetching materiales:", error);
      return;
    }
    setMateriales(data || []);
  };

  const fetchTareas = async () => {
    if (!session) return;
    const { data, error } = await supabase.from("tarea").select("*");
    if (error) {
      console.error("Error fetching tareas:", error);
      return;
    }
    setTareas(data || []);
  };

  const fetchPlanta = async () => {
    if (!session) return;
    const { data, error } = await supabase
      .from("planta")
      .select("*, especie (nombre_especie)");
    if (error) {
      console.error("Error fetching tareas:", error);
      return;
    }
    setPlantas(data || []);
  };

  const fetchPlantación = async () => {
    if (!session) return;
    const { data, error } = await supabase.from("plantación").select("*");
    if (error) {
      console.error("Error fetching tareas:", error);
      return;
    }
    setPlantación(data || []);
  };

  const fetchEspecies = async () => {
    if (!session) return;
    const { data, error } = await supabase.from("especie").select("*");
    if (error) {
      console.error("Error fetching tareas:", error);
      return;
    }
    setEspecies(data || []);
  };

  // Add Functions
  const addSemilla = async (data: any) => {
    if (!session) return;
    const { error } = await supabase.from("semillas").insert(data);
    if (error) {
      console.error("Error adding semilla:", error);
    } else {
      fetchSemillas(); // Refresh after adding
    }
  };

  const addQuímico = async (data: any) => {
    if (!session) return;
    const { error } = await supabase.from("químicos").insert(data);
    if (error) {
      console.error("Error adding químico:", error);
    } else {
      fetchQuímicos(); // Refresh after adding
    }
  };

  const addMaterial = async (data: any) => {
    if (!session) return;
    const { error } = await supabase.from("materiales").insert(data);
    if (error) {
      console.error("Error adding material:", error);
    } else {
      fetchMateriales(); // Refresh after adding
    }
  };

  const addTarea = async (data: any) => {
    if (!session) return;
    const { error } = await supabase.from("tarea").insert(data);
    if (error) {
      console.error("Error adding tarea:", error);
    } else {
      fetchTareas(); // Refresh after adding
    }
  };

  const addPlanta = async (data: any) => {
    if (!session) return;
    const { error } = await supabase.from("planta").insert(data);
    if (error) {
      console.error("Error adding planta:", error);
    } else {
      fetchPlanta(); // Refresh after adding
    }
  };

  const addPlantación = async (data: any) => {
    if (!session) return;
    const { error } = await supabase.from("plantación").insert(data);
    if (error) {
      console.error("Error adding plantación:", error);
    } else {
      fetchPlantación(); // Refresh after adding
    }
  };

  // Update Functions
  const updateSemilla = async (id: number, data: any) => {
    if (!session) return;
    const { error } = await supabase.from("semillas").update(data).eq("id", id);
    if (error) {
      console.error("Error updating semilla:", error);
    } else {
      fetchSemillas(); // Refresh after updating
    }
  };

  const updateQuímico = async (id: number, data: any) => {
    if (!session) return;
    const { error } = await supabase.from("químicos").update(data).eq("id", id);
    if (error) {
      console.error("Error updating químico:", error);
    } else {
      fetchQuímicos(); // Refresh after updating
    }
  };

  const updateMaterial = async (id: number, data: any) => {
    if (!session) return;
    const { error } = await supabase
      .from("materiales")
      .update(data)
      .eq("id", id);
    if (error) {
      console.error("Error updating material:", error);
    } else {
      fetchMateriales(); // Refresh after updating
    }
  };

  const updateTarea = async (id: number, data: any) => {
    if (!session) return;
    const { error } = await supabase.from("tarea").update(data).eq("id", id);
    if (error) {
      console.error("Error updating material:", error);
    } else {
      fetchTareas(); // Refresh after updating
    }
  };

  const updatePlanta = async (id: number, data: any) => {
    if (!session) return;
    const { error } = await supabase.from("planta").update(data).eq("id", id);
    if (error) {
      console.error("Error updating planta:", error);
    } else {
      fetchPlanta(); // Refresh after updating
    }
  };

  const updatePlantación = async (id: number, data: any) => {
    if (!session) return;
    const { error } = await supabase
      .from("plantación")
      .update(data)
      .eq("id", id);
    if (error) {
      console.error("Error updating plantación:", error);
    } else {
      fetchPlanta(); // Refresh after updating
    }
  };

  // Delete Functions
  const deleteSemilla = async (id: number) => {
    if (!session) return;
    const { error } = await supabase.from("semillas").delete().eq("id", id);
    if (error) {
      console.error("Error deleting semilla:", error);
    } else {
      fetchSemillas(); // Refresh after deleting
    }
  };

  const deleteQuímico = async (id: number) => {
    if (!session) return;
    const { error } = await supabase.from("químicos").delete().eq("id", id);
    if (error) {
      console.error("Error deleting químico:", error);
    } else {
      fetchQuímicos(); // Refresh after deleting
    }
  };

  const deleteMaterial = async (id: number) => {
    if (!session) return;
    const { error } = await supabase.from("materiales").delete().eq("id", id);
    if (error) {
      console.error("Error deleting material:", error);
    } else {
      fetchMateriales(); // Refresh after deleting
    }
  };

  const deleteTarea = async (id: number) => {
    if (!session) return;
    const { error } = await supabase.from("tarea").delete().eq("id", id);
    if (error) {
      console.error("Error deleting tarea:", error);
    } else {
      fetchTareas(); // Refresh after deleting
    }
  };

  const deletePlanta = async (id: number) => {
    if (!session) return;
    const { error } = await supabase.from("planta").delete().eq("id", id);
    if (error) {
      console.error("Error deleting planta:", error);
    } else {
      fetchPlanta(); // Refresh after deleting
    }
  };

  const deletePlantación = async (id: number) => {
    if (!session) return;
    const { error } = await supabase.from("plantación").delete().eq("id", id);
    if (error) {
      console.error("Error deleting plantación:", error);
    } else {
      fetchPlantación(); // Refresh after deleting
    }
  };

  return (
    <SupabaseDataContext.Provider
      value={{
        semillas,
        fetchSemillas,
        addSemilla,
        químicos,
        fetchQuímicos,
        addQuímico,

        materiales,
        fetchMateriales,
        addMaterial,

        tareas,
        fetchTareas,
        addTarea,

        plantas,
        fetchPlanta,
        addPlanta,

        plantación,
        fetchPlantación,
        addPlantación,

        especies,
        fetchEspecies,

        updateSemilla,
        updateQuímico,
        updateMaterial,
        updateTarea,
        updatePlanta,
        updatePlantación,
        deleteSemilla,
        deleteQuímico,
        deleteMaterial,
        deleteTarea,
        deletePlanta,
        deletePlantación,
      }}
    >
      {children}
    </SupabaseDataContext.Provider>
  );
};
