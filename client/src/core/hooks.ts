import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as api from "./api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { Query } from "./types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useCategories(): any {
    return useQuery(["categories"], async () => api.getCategories().then((res) => res.data));
};

export function useProducts(query: Query, search: any) {
    const [data, setData]: any = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await api.getProducts(query);
                setData(res.data.data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [search]);

    return { data, loading, error };
};

export function useProduct(id: number) {
    const [data, setData]: any = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await api.getProduct(id)
                setData(res.data.data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [id]);

    return { data, loading, error };
};