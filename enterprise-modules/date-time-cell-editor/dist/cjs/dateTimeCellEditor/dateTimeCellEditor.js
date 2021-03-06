"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeCellEditor = void 0;
var core_1 = require("@ag-grid-community/core");
var dateTimeList_1 = require("../dateTimeList/dateTimeList");
var DateTimeCellEditor = /** @class */ (function (_super) {
    __extends(DateTimeCellEditor, _super);
    function DateTimeCellEditor() {
        var _this = _super.call(this, DateTimeCellEditor.TEMPLATE) || this;
        _this.cancelled = false;
        return _this;
    }
    DateTimeCellEditor.prototype.init = function (params) {
        this.params = params;
        this.originalValue = params.value;
        var initialValue = params.valueToDate ? params.valueToDate(params.value) : new Date(params.value);
        if (isNaN(initialValue.getTime())) {
            var defaultDate = params.defaultDate;
            if (!defaultDate) {
                initialValue = new Date();
            }
            else if (typeof defaultDate === 'function') {
                initialValue = defaultDate();
            }
            else {
                initialValue = defaultDate;
            }
            initialValue = new Date();
        }
        this.editor = new dateTimeList_1.DateTimeList({
            onValueSelect: this.handleValueSelect.bind(this),
            initialValue: initialValue
        });
        this.wireBean(this.editor);
        this.appendChild(this.editor);
    };
    DateTimeCellEditor.prototype.afterGuiAttached = function () {
        this.editor.getGui().focus();
    };
    DateTimeCellEditor.prototype.handleValueSelect = function (value) {
        this.selectedDate = value;
        this.params.stopEditing();
    };
    DateTimeCellEditor.prototype.isPopup = function () {
        return true;
    };
    DateTimeCellEditor.prototype.getPopupPosition = function () {
        return 'under';
    };
    DateTimeCellEditor.prototype.isCancelAfterEnd = function () {
        return this.cancelled;
    };
    DateTimeCellEditor.prototype.getValue = function () {
        if (this.params.dateToValue && this.selectedDate) {
            return this.params.dateToValue(this.selectedDate);
        }
        return this.selectedDate || this.originalValue;
    };
    DateTimeCellEditor.TEMPLATE = "<div class=\"ag-date-time-cell-editor\" tabindex=\"0\"></div>";
    return DateTimeCellEditor;
}(core_1.PopupComponent));
exports.DateTimeCellEditor = DateTimeCellEditor;
//# sourceMappingURL=dateTimeCellEditor.js.map