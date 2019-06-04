// Type definitions for ag-grid-community v21.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridPanel } from "../gridPanel/gridPanel";
import { Column } from "../entities/column";
import { RowNode } from "../entities/rowNode";
import { CellComp } from "./cellComp";
import { GridCore } from "../gridCore";
import { LoggerFactory } from "../logger";
import { CellPosition } from "../entities/cellPosition";
import { BeanStub } from "../context/beanStub";
import { FlashCellsParams, GetCellRendererInstancesParams, RefreshCellsParams } from "../gridApi";
import { ICellRendererComp } from "./cellRenderers/iCellRenderer";
import { ICellEditorComp } from "../interfaces/iCellEditor";
import { RowPosition } from "../entities/rowPosition";
export declare class RowRenderer extends BeanStub {
    private paginationProxy;
    private columnController;
    private gridOptionsWrapper;
    private $scope;
    private eventService;
    private pinnedRowModel;
    private rowModel;
    private loggerFactory;
    private focusedCellController;
    private cellNavigationService;
    private columnApi;
    private gridApi;
    private beans;
    private maxDivHeightScaler;
    private animationFrameService;
    private rangeController;
    private gridPanel;
    private destroyFuncsForColumnListeners;
    private firstRenderedRow;
    private lastRenderedRow;
    private rowCompsByIndex;
    private floatingTopRowComps;
    private floatingBottomRowComps;
    private rowContainers;
    private pinningLeft;
    private pinningRight;
    private refreshInProgress;
    private logger;
    private printLayout;
    private embedFullWidthRows;
    private gridCore;
    registerGridCore(gridCore: GridCore): void;
    getGridCore(): GridCore;
    agWire(loggerFactory: LoggerFactory): void;
    registerGridComp(gridPanel: GridPanel): void;
    private registerCellEventListeners;
    private removeGridColumnListeners;
    private refreshListenersToColumnsForCellComps;
    private onDomLayoutChanged;
    datasourceChanged(): void;
    private onPageLoaded;
    getAllCellsForColumn(column: Column): HTMLElement[];
    refreshFloatingRowComps(): void;
    private refreshFloatingRows;
    private onPinnedRowDataChanged;
    private onModelUpdated;
    private getRenderedIndexesForRowNodes;
    redrawRows(rowNodes: RowNode[]): void;
    private getCellToRestoreFocusToAfterRefresh;
    redrawAfterModelUpdate(params?: RefreshViewParams): void;
    private scrollToTopIfNewData;
    private sizeContainerToPageHeight;
    private getLockOnRefresh;
    private releaseLockOnRefresh;
    private restoreFocusedCell;
    stopEditing(cancel?: boolean): void;
    forEachCellComp(callback: (cellComp: CellComp) => void): void;
    private forEachRowComp;
    addRenderedRowListener(eventName: string, rowIndex: number, callback: Function): void;
    flashCells(params?: FlashCellsParams): void;
    refreshCells(params?: RefreshCellsParams): void;
    getCellRendererInstances(params: GetCellRendererInstancesParams): ICellRendererComp[];
    getCellEditorInstances(params: GetCellRendererInstancesParams): ICellEditorComp[];
    getEditingCells(): CellPosition[];
    private forEachCellCompFiltered;
    destroy(): void;
    private binRowComps;
    private removeRowComps;
    redrawAfterScroll(): void;
    private removeRowCompsNotToDraw;
    private calculateIndexesToDraw;
    private redraw;
    private flushContainers;
    private onDisplayedColumnsChanged;
    private redrawFullWidthEmbeddedRows;
    refreshFullWidthRows(): void;
    private createOrUpdateRowComp;
    private destroyRowComps;
    private checkAngularCompile;
    private workOutFirstAndLastRowsToRender;
    private ensureAllRowsInRangeHaveHeightsCalculated;
    getFirstVirtualRenderedRow(): number;
    getLastVirtualRenderedRow(): number;
    private keepRowBecauseEditingOrFocused;
    private createRowComp;
    getRenderedNodes(): RowNode[];
    navigateToNextCell(event: KeyboardEvent | null, key: number, currentCell: CellPosition, allowUserOverride: boolean): void;
    private getLastCellOfColSpan;
    ensureCellVisible(gridCell: CellPosition): void;
    startEditingCell(gridCell: CellPosition, keyPress: number, charPress: string): void;
    getComponentForCell(cellPosition: CellPosition): CellComp;
    getRowNode(gridRow: RowPosition): RowNode | null;
    onTabKeyDown(previousRenderedCell: CellComp, keyboardEvent: KeyboardEvent): void;
    tabToNextCell(backwards: boolean): boolean;
    private moveToCellAfter;
    private moveToNextEditingCell;
    private moveToNextEditingRow;
    private moveToNextCellNotEditing;
    private moveEditToNextCellOrRow;
    private findNextCellToFocusOn;
    private lookupRowNodeForCell;
}
export interface RefreshViewParams {
    recycleRows?: boolean;
    animate?: boolean;
    suppressKeepFocus?: boolean;
    onlyBody?: boolean;
    newData?: boolean;
    newPage?: boolean;
}
