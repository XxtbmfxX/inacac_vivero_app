import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useSupabase } from "@/context/supabaseAuthContext";

type SupabaseDataContextProps = {
  semillas: any[];
  químicos: any[];
  materiales: any[];
  fetchSemillas: () => Promise<void>;
  fetchQuímicos: () => Promise<void>;
  fetchMateriales: () => Promise<void>;
  addSemilla: (data: any) => Promise<void>;
  addQuímico: (data: any) => Promise<void>;
  addMaterial: (data: any) => Promise<void>;
  updateSemilla: (id: number, data: any) => Promise<void>;
  updateQuímico: (id: number, data: any) => Promise<void>;
  updateMaterial: (id: number, data: any) => Promise<void>;
  deleteSemilla: (id: number) => Promise<void>;
  deleteQuímico: (id: number) => Promise<void>;
  deleteMaterial: (id: number) => Promise<void>;
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

  return (
    <SupabaseDataContext.Provider
      value={{
        semillas,
        químicos,
        materiales,
        fetchSemillas,
        fetchQuímicos,
        fetchMateriales,
        addSemilla,
        addQuímico,
        addMaterial,
        updateSemilla,
        updateQuímico,
        updateMaterial,
        deleteSemilla,
        deleteQuímico,
        deleteMaterial,
      }}
    >
      {children}
    </SupabaseDataContext.Provider>
  );
};
