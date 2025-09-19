import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison([
        rules.skipEmptyTargetValues,
        rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)
    ]);


    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(row => {
            const value = state.search?.toLowerCase();
            return ['date', 'customer', 'seller'].some(field => {
                return row[field]?.toLowerCase().includes(value);
            });
        });
    }
}