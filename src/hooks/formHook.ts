import { useState, useEffect } from "react";

interface paramsIf {
    initialState: { [key: string]: any }
}

const useForm = (initialState: paramsIf) => {
    const [form, setForm] = useState(initialState)
    const [error, setError] = useState<string | undefined>(undefined);

    const setField = (key: string, value: any) => {
        setForm(prev => ({ ...prev, [key]: { value, error: value ? false : true } }))
    }

    const clearAll = () => {
        setForm(initialState)
    }

    useEffect(() => {
        // if any field has error, display main message
        if (Object.values(form).some(val => val.error === true)) {
            setError(`One or more fields have invalid values`)
        } else {
            setError(undefined)
        }
    }, [form])


    return [form, setField, clearAll, error]
}

export default useForm