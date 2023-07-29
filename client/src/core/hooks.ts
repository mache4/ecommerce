import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as api from "./api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { QueryType } from "./types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useCategories() {
    return useQuery(["categories"], async () => api.getCategories().then((res) => res.data));
};

// export function useHomePhotos() {
//     return useQuery(["home-photos"], async () => api.getHomePhotos().then((res) => res.data.data));
// };

export function useProducts(query: QueryType, search: any) {
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

export function useHomePhotos() {
    const [data, setData]: any = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await api.getHomePhotos();
                setData(res.data.data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return { data, loading, error };
};