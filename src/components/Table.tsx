import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isFunc, isNonEmptyStr } from '../utils';

export const TableShape = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  selected: PropTypes.bool,
  default: PropTypes.bool,
  render: PropTypes.func.isRequired
};

export const sortShape = {
  name: PropTypes.string.isRequired,
  asc: PropTypes.bool.isRequired
};

export interface ITableItem {
  [key: string]: any
}

export interface ITableColumn {
  name: string,
  label: string,
  width?: string,
  selected?: boolean,
  default?: boolean,
  render: (item: ITableItem, name: string, rowIndex: number, colIndex: number) => React.ReactNode
}

export interface ITableSort {
  name: string,
  asc: boolean
}

export type TableProps = {
  items: Array<ITableItem>,
  columns: Array<ITableColumn>,
  sort: ITableSort,
  itemId?: string,
  loading?: boolean,
  sorting?: boolean,
  selectable?: boolean,
  onClickItem?: (item: ITableItem, rowIndex: number, colIndex: number) => void | null,
  onSort?: (column: ITableColumn, isAscSort: boolean) => void | null,
  renderFilters?: () => React.ReactNode | null,
  renderHeader?: () => React.ReactNode | null,
  renderItemCheckbox?: (item: ITableItem) => React.ReactNode,
  renderSortIcon?: (sort: ITableSort, isSorted: boolean) => React.ReactNode
}

const Table = (props: TableProps) => {
  const { items, columns, sort, itemId, loading, sorting, selectable, onClickItem, onSort, renderFilters, renderHeader, renderItemCheckbox, renderSortIcon } = props;
  const hasSort: boolean = isFunc(onSort);
  const hasRenderFilters: boolean = isFunc(renderFilters);
  const hasRenderHeader: boolean = isFunc(renderHeader);
  const hasOnClickItem: boolean = isFunc(onClickItem);
  const tableClassName: string = classNames({
    table: true,
    'table--loading': loading
  });

  return (
    <div className={tableClassName}>
      {hasRenderFilters && (
        <div className="table__filters">
          {/*
          // @ts-ignore */}
          {renderFilters()}
        </div>
      )}

      {hasRenderHeader && (
        <div className="table__header">
          {/*
          // @ts-ignore */}
          {renderHeader()}
        </div>
      )}

      <div className="table__body">
        <table>
          <thead>
            <tr>
              {selectable && (
                <th className="table__sort">
                  <span />
                </th>
              )}

              {columns.map((column) => {
                const { name, label, width } = column;
                const isSorted = name === sort.name;
                const isAscSort = !isSorted || !sort.asc;
                const tHeadColStyle = isNonEmptyStr(width) ? { width } : {};
                const columnClassName = classNames({
                  table__sort: true,
                  'table__sort--active': isSorted,
                  'table__sort--ascending': isSorted && sort.asc,
                  'table__sort--descending': isSorted && !sort.asc,
                  'table__sort--loading': isSorted && sorting
                });

                return (
                  <th
                    key={`thead-col-${name}`}
                    style={tHeadColStyle}
                  >
                    <div
                      className={columnClassName}
                      title={label}
                      role="button"
                      onClick={() => {
                        if (hasSort) {
                          // @ts-ignore
                          onSort(column, isAscSort);
                        }
                      }}
                    >
                      <span className="table__title">
                        {label}
                      </span>

                      <span className="table__sort__icon">
                        {/*
                        // @ts-ignore */}
                        {renderSortIcon(sort, isSorted)}
                      </span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {items.map((item, rowIndex) => {
              // @ts-ignore
              const rowId = item[itemId];

              return (
                <tr key={`tbody-row-${rowId}`}>
                  {selectable && (
                    <td className="table__checkbox">
                      {/*
                      // @ts-ignore */}
                      {renderItemCheckbox(item)}
                    </td>
                  )}

                  {columns.map(({ name, render, width }, colIndex) => {
                    const tbodyColStyle = isNonEmptyStr(width) ? { width } : {};

                    return (
                      <td
                        key={`tbody-col-${name}`}
                        style={tbodyColStyle}
                        onClick={() => {
                          if (hasOnClickItem) {
                            // @ts-ignore
                            onClickItem(item, rowIndex, colIndex)
                          }
                        }}
                      >
                        {render(item, name, rowIndex, colIndex)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape(TableShape)
  ).isRequired,
  sort: PropTypes.shape(sortShape).isRequired,
  itemId: PropTypes.string,
  loading: PropTypes.bool,
  sorting: PropTypes.bool,
  selectable: PropTypes.bool,
  onClickItem: PropTypes.func,
  onSort: PropTypes.func,
  renderFilters: PropTypes.func,
  renderHeader: PropTypes.func,
  renderItemCheckbox: PropTypes.func,
  renderSortIcon: PropTypes.func
};

Table.defaultProps = {
  itemId: 'id',
  loading: false,
  sorting: false,
  selectable: false,
  onClickItem: null,
  onSort: null,
  renderFilters: null,
  renderHeader: null,
  renderItemCheckbox: () => {},
  renderSortIcon: () => {}
};

export default Table;
