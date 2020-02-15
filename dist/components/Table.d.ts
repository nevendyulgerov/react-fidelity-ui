import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare const TableShape: {
    name: PropTypes.Validator<string>;
    label: PropTypes.Validator<string>;
    width: PropTypes.Requireable<string>;
    selected: PropTypes.Requireable<boolean>;
    default: PropTypes.Requireable<boolean>;
    render: PropTypes.Validator<(...args: any[]) => any>;
};
export declare const sortShape: {
    name: PropTypes.Validator<string>;
    asc: PropTypes.Validator<boolean>;
};
export interface ITableItem {
    [key: string]: any;
}
export interface ITableColumn {
    name: string;
    label: string;
    width?: string;
    selected?: boolean;
    default?: boolean;
    render: (item: ITableItem, name: string, rowIndex: number, colIndex: number) => React.ReactNode;
}
export interface ITableSort {
    name: string;
    asc: boolean;
}
export declare type TableProps = {
    items: Array<ITableItem>;
    columns: Array<ITableColumn>;
    sort: ITableSort;
    itemId?: string;
    loading?: boolean;
    sorting?: boolean;
    selectable?: boolean;
    onClickItem?: (item: ITableItem, rowIndex: number, colIndex: number) => void | null;
    onSort?: (column: ITableColumn, isAscSort: boolean) => void | null;
    renderFilters?: () => React.ReactNode | null;
    renderHeader?: () => React.ReactNode | null;
    renderItemCheckbox?: (item: ITableItem) => React.ReactNode;
    renderSortIcon?: (sort: ITableSort, isSorted: boolean) => React.ReactNode;
};
declare const Table: {
    (props: TableProps): JSX.Element;
    propTypes: {
        items: PropTypes.Validator<(object | null | undefined)[]>;
        columns: PropTypes.Validator<(PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
            label: PropTypes.Validator<string>;
            width: PropTypes.Requireable<string>;
            selected: PropTypes.Requireable<boolean>;
            default: PropTypes.Requireable<boolean>;
            render: PropTypes.Validator<(...args: any[]) => any>;
        }> | null | undefined)[]>;
        sort: PropTypes.Validator<PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
            asc: PropTypes.Validator<boolean>;
        }>>;
        itemId: PropTypes.Requireable<string>;
        loading: PropTypes.Requireable<boolean>;
        sorting: PropTypes.Requireable<boolean>;
        selectable: PropTypes.Requireable<boolean>;
        onClickItem: PropTypes.Requireable<(...args: any[]) => any>;
        onSort: PropTypes.Requireable<(...args: any[]) => any>;
        renderFilters: PropTypes.Requireable<(...args: any[]) => any>;
        renderHeader: PropTypes.Requireable<(...args: any[]) => any>;
        renderItemCheckbox: PropTypes.Requireable<(...args: any[]) => any>;
        renderSortIcon: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        itemId: string;
        loading: boolean;
        sorting: boolean;
        selectable: boolean;
        onClickItem: null;
        onSort: null;
        renderFilters: null;
        renderHeader: null;
        renderItemCheckbox: () => void;
        renderSortIcon: () => void;
    };
};
export default Table;
