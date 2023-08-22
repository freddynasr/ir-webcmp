/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { checkboxes, guestInfo, selectOption } from "./common/models";
export { checkboxes, guestInfo, selectOption } from "./common/models";
export namespace Components {
    interface IrButton {
        "btn_block": boolean;
        "btn_color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "btn_disabled": boolean;
        "btn_type": string;
        "icon": string;
        "name": string;
        "size": 'sm' | 'md' | 'lg';
        "text": any;
        "textSize": 'sm' | 'md' | 'lg';
    }
    interface IrChannelManager {
        "dropdownData": {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  };
        "listData": {
    title: string;
    channel: string;
    status: string;
    id: string;
    group: string;
    property: string;
    hotelId: string;
    mapping: any;
  }[];
    }
    interface IrChannelSelect {
        "data": any[];
        "icon": boolean;
        "label": string;
        "placeholder": string;
    }
    interface IrCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "label": string;
        "labelPosition": 'before' | 'after';
        "name": string;
        "value": string;
    }
    interface IrCheckboxes {
        "checkboxes": checkboxes[];
    }
    interface IrDropdown {
        "data": {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  };
        "object": any;
    }
    interface IrGeneralSettings {
        "connectionStatus": string;
        "data": any;
        "mode": string;
    }
    interface IrGuestInfo {
        "data": guestInfo;
        "setupDataCountries": selectOption[];
        "setupDataCountriesCode": selectOption[];
    }
    interface IrIcon {
        "icon": string;
    }
    interface IrInputChannel {
        "label": string;
        "placeholder": string;
        "value": string;
    }
    interface IrInputText {
        "LabelAvailable": boolean;
        "inputStyle": boolean;
        "label": string;
        "labelBackground": 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "labelBorder": 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none';
        "labelColor": 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "labelPosition": 'left' | 'right' | 'center';
        "labelWidth": 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
        "name": string;
        "placeholder": string;
        "required": boolean;
        "size": 'sm' | 'md' | 'lg';
        "submited": boolean;
        "textSize": 'sm' | 'md' | 'lg';
        "type": string;
        "value": any;
    }
    interface IrListItem {
        "dropdownData": {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  };
        "dropdownDataDisable": {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  };
        "listData": {
    title: string;
    channel: string;
    status: string;
    id: string;
    group: string;
    property: string;
    hotelId: string;
  }[];
    }
    interface IrLoader {
        "size": string;
    }
    interface IrMapping {
        "_onSaveMapping": () => Promise<void>;
        "map": any;
    }
    interface IrModal {
        "btnPosition": 'left' | 'right' | 'center';
        "closeModal": () => Promise<void>;
        "item": any;
        "leftBtnActive": boolean;
        "leftBtnColor": 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "leftBtnText": string;
        "openModal": () => Promise<void>;
        "rightBtnActive": boolean;
        "rightBtnColor": 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "rightBtnText": string;
    }
    interface IrRadioBtn {
        "data": selectOption[];
        "disabled": boolean;
        "selectedValue": any;
    }
    interface IrSelect {
        "LabelAvailable": boolean;
        "data": selectOption[];
        "firstOption": string;
        "label": string;
        "labelBackground": 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "labelBorder": 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none';
        "labelColor": 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "labelPosition": 'left' | 'right' | 'center';
        "labelWidth": 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
        "name": string;
        "required": boolean;
        "selectStyle": boolean;
        "selectedValue": any;
        "size": 'sm' | 'md' | 'lg';
        "submited": boolean;
        "textSize": 'sm' | 'md' | 'lg';
    }
    interface IrSidebar {
        "name": string;
        "open": boolean;
        "side": 'right' | 'left';
        "toggleSidebar": () => Promise<void>;
    }
    interface IrSpan {
        "text": any;
    }
    interface IrSwitch {
        "baseClass"?: string;
        "classOn"?: string;
        "colorOn"?: string;
        "disabled"?: boolean;
        "handleWidth"?: string | 'auto';
        "indeterminate"?: boolean;
        "inverse"?: boolean;
        "labelOff": string;
        "labelOn": string;
        "labelText"?: string;
        "labelWidth"?: string | 'auto';
        "offClass"?: string;
        "offColor"?: string;
        "radioAllOff"?: boolean;
        "readonly"?: boolean;
        "size"?: string | 'mini' | 'small' | 'normal' | 'large';
        "switch_animate"?: boolean;
        "value": boolean;
        "wrapperClass"?: string;
    }
    interface IrTextarea {
        "cols": number;
        "label": string;
        "placeholder": string;
        "rows": number;
        "text": string;
    }
    interface IrTopbar {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface IrButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrButtonElement;
}
export interface IrChannelSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrChannelSelectElement;
}
export interface IrCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrCheckboxElement;
}
export interface IrCheckboxesCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrCheckboxesElement;
}
export interface IrDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrDropdownElement;
}
export interface IrGeneralSettingsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrGeneralSettingsElement;
}
export interface IrGuestInfoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrGuestInfoElement;
}
export interface IrInputChannelCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrInputChannelElement;
}
export interface IrInputTextCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrInputTextElement;
}
export interface IrListItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrListItemElement;
}
export interface IrMappingCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrMappingElement;
}
export interface IrModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrModalElement;
}
export interface IrRadioBtnCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrRadioBtnElement;
}
export interface IrSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSelectElement;
}
export interface IrSidebarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSidebarElement;
}
export interface IrSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSwitchElement;
}
export interface IrTopbarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrTopbarElement;
}
declare global {
    interface HTMLIrButtonElement extends Components.IrButton, HTMLStencilElement {
    }
    var HTMLIrButtonElement: {
        prototype: HTMLIrButtonElement;
        new (): HTMLIrButtonElement;
    };
    interface HTMLIrChannelManagerElement extends Components.IrChannelManager, HTMLStencilElement {
    }
    var HTMLIrChannelManagerElement: {
        prototype: HTMLIrChannelManagerElement;
        new (): HTMLIrChannelManagerElement;
    };
    interface HTMLIrChannelSelectElement extends Components.IrChannelSelect, HTMLStencilElement {
    }
    var HTMLIrChannelSelectElement: {
        prototype: HTMLIrChannelSelectElement;
        new (): HTMLIrChannelSelectElement;
    };
    interface HTMLIrCheckboxElement extends Components.IrCheckbox, HTMLStencilElement {
    }
    var HTMLIrCheckboxElement: {
        prototype: HTMLIrCheckboxElement;
        new (): HTMLIrCheckboxElement;
    };
    interface HTMLIrCheckboxesElement extends Components.IrCheckboxes, HTMLStencilElement {
    }
    var HTMLIrCheckboxesElement: {
        prototype: HTMLIrCheckboxesElement;
        new (): HTMLIrCheckboxesElement;
    };
    interface HTMLIrDropdownElement extends Components.IrDropdown, HTMLStencilElement {
    }
    var HTMLIrDropdownElement: {
        prototype: HTMLIrDropdownElement;
        new (): HTMLIrDropdownElement;
    };
    interface HTMLIrGeneralSettingsElement extends Components.IrGeneralSettings, HTMLStencilElement {
    }
    var HTMLIrGeneralSettingsElement: {
        prototype: HTMLIrGeneralSettingsElement;
        new (): HTMLIrGeneralSettingsElement;
    };
    interface HTMLIrGuestInfoElement extends Components.IrGuestInfo, HTMLStencilElement {
    }
    var HTMLIrGuestInfoElement: {
        prototype: HTMLIrGuestInfoElement;
        new (): HTMLIrGuestInfoElement;
    };
    interface HTMLIrIconElement extends Components.IrIcon, HTMLStencilElement {
    }
    var HTMLIrIconElement: {
        prototype: HTMLIrIconElement;
        new (): HTMLIrIconElement;
    };
    interface HTMLIrInputChannelElement extends Components.IrInputChannel, HTMLStencilElement {
    }
    var HTMLIrInputChannelElement: {
        prototype: HTMLIrInputChannelElement;
        new (): HTMLIrInputChannelElement;
    };
    interface HTMLIrInputTextElement extends Components.IrInputText, HTMLStencilElement {
    }
    var HTMLIrInputTextElement: {
        prototype: HTMLIrInputTextElement;
        new (): HTMLIrInputTextElement;
    };
    interface HTMLIrListItemElement extends Components.IrListItem, HTMLStencilElement {
    }
    var HTMLIrListItemElement: {
        prototype: HTMLIrListItemElement;
        new (): HTMLIrListItemElement;
    };
    interface HTMLIrLoaderElement extends Components.IrLoader, HTMLStencilElement {
    }
    var HTMLIrLoaderElement: {
        prototype: HTMLIrLoaderElement;
        new (): HTMLIrLoaderElement;
    };
    interface HTMLIrMappingElement extends Components.IrMapping, HTMLStencilElement {
    }
    var HTMLIrMappingElement: {
        prototype: HTMLIrMappingElement;
        new (): HTMLIrMappingElement;
    };
    interface HTMLIrModalElement extends Components.IrModal, HTMLStencilElement {
    }
    var HTMLIrModalElement: {
        prototype: HTMLIrModalElement;
        new (): HTMLIrModalElement;
    };
    interface HTMLIrRadioBtnElement extends Components.IrRadioBtn, HTMLStencilElement {
    }
    var HTMLIrRadioBtnElement: {
        prototype: HTMLIrRadioBtnElement;
        new (): HTMLIrRadioBtnElement;
    };
    interface HTMLIrSelectElement extends Components.IrSelect, HTMLStencilElement {
    }
    var HTMLIrSelectElement: {
        prototype: HTMLIrSelectElement;
        new (): HTMLIrSelectElement;
    };
    interface HTMLIrSidebarElement extends Components.IrSidebar, HTMLStencilElement {
    }
    var HTMLIrSidebarElement: {
        prototype: HTMLIrSidebarElement;
        new (): HTMLIrSidebarElement;
    };
    interface HTMLIrSpanElement extends Components.IrSpan, HTMLStencilElement {
    }
    var HTMLIrSpanElement: {
        prototype: HTMLIrSpanElement;
        new (): HTMLIrSpanElement;
    };
    interface HTMLIrSwitchElement extends Components.IrSwitch, HTMLStencilElement {
    }
    var HTMLIrSwitchElement: {
        prototype: HTMLIrSwitchElement;
        new (): HTMLIrSwitchElement;
    };
    interface HTMLIrTextareaElement extends Components.IrTextarea, HTMLStencilElement {
    }
    var HTMLIrTextareaElement: {
        prototype: HTMLIrTextareaElement;
        new (): HTMLIrTextareaElement;
    };
    interface HTMLIrTopbarElement extends Components.IrTopbar, HTMLStencilElement {
    }
    var HTMLIrTopbarElement: {
        prototype: HTMLIrTopbarElement;
        new (): HTMLIrTopbarElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ir-button": HTMLIrButtonElement;
        "ir-channel-manager": HTMLIrChannelManagerElement;
        "ir-channel-select": HTMLIrChannelSelectElement;
        "ir-checkbox": HTMLIrCheckboxElement;
        "ir-checkboxes": HTMLIrCheckboxesElement;
        "ir-dropdown": HTMLIrDropdownElement;
        "ir-general-settings": HTMLIrGeneralSettingsElement;
        "ir-guest-info": HTMLIrGuestInfoElement;
        "ir-icon": HTMLIrIconElement;
        "ir-input-channel": HTMLIrInputChannelElement;
        "ir-input-text": HTMLIrInputTextElement;
        "ir-list-item": HTMLIrListItemElement;
        "ir-loader": HTMLIrLoaderElement;
        "ir-mapping": HTMLIrMappingElement;
        "ir-modal": HTMLIrModalElement;
        "ir-radio-btn": HTMLIrRadioBtnElement;
        "ir-select": HTMLIrSelectElement;
        "ir-sidebar": HTMLIrSidebarElement;
        "ir-span": HTMLIrSpanElement;
        "ir-switch": HTMLIrSwitchElement;
        "ir-textarea": HTMLIrTextareaElement;
        "ir-topbar": HTMLIrTopbarElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface IrButton {
        "btn_block"?: boolean;
        "btn_color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "btn_disabled"?: boolean;
        "btn_type"?: string;
        "icon"?: string;
        "name"?: string;
        "onClickHanlder"?: (event: IrButtonCustomEvent<any>) => void;
        "size"?: 'sm' | 'md' | 'lg';
        "text"?: any;
        "textSize"?: 'sm' | 'md' | 'lg';
    }
    interface IrChannelManager {
        "dropdownData"?: {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  };
        "listData"?: {
    title: string;
    channel: string;
    status: string;
    id: string;
    group: string;
    property: string;
    hotelId: string;
    mapping: any;
  }[];
    }
    interface IrChannelSelect {
        "data"?: any[];
        "icon"?: boolean;
        "label"?: string;
        "onIrSelect"?: (event: IrChannelSelectCustomEvent<any>) => void;
        "placeholder"?: string;
    }
    interface IrCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "label"?: string;
        "labelPosition"?: 'before' | 'after';
        "name"?: string;
        "onCheckboxChange"?: (event: IrCheckboxCustomEvent<{ name: string; value: string; checked: boolean }>) => void;
        "value"?: string;
    }
    interface IrCheckboxes {
        "checkboxes"?: checkboxes[];
        "onCheckboxesChange"?: (event: IrCheckboxesCustomEvent<checkboxes[]>) => void;
    }
    interface IrDropdown {
        "data"?: {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  };
        "object"?: any;
        "onDropdownItemCLicked"?: (event: IrDropdownCustomEvent<{ name: string; object: any }>) => void;
    }
    interface IrGeneralSettings {
        "connectionStatus"?: string;
        "data"?: any;
        "mode"?: string;
        "onSendToParent"?: (event: IrGeneralSettingsCustomEvent<any>) => void;
    }
    interface IrGuestInfo {
        "data"?: guestInfo;
        "onGetSetupData"?: (event: IrGuestInfoCustomEvent<any>) => void;
        "onSubmitForm"?: (event: IrGuestInfoCustomEvent<guestInfo>) => void;
        "setupDataCountries"?: selectOption[];
        "setupDataCountriesCode"?: selectOption[];
    }
    interface IrIcon {
        "icon"?: string;
    }
    interface IrInputChannel {
        "label"?: string;
        "onSendValue"?: (event: IrInputChannelCustomEvent<any>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface IrInputText {
        "LabelAvailable"?: boolean;
        "inputStyle"?: boolean;
        "label"?: string;
        "labelBackground"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "labelBorder"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none';
        "labelColor"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "labelPosition"?: 'left' | 'right' | 'center';
        "labelWidth"?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
        "name"?: string;
        "onTextChange"?: (event: IrInputTextCustomEvent<any>) => void;
        "placeholder"?: string;
        "required"?: boolean;
        "size"?: 'sm' | 'md' | 'lg';
        "submited"?: boolean;
        "textSize"?: 'sm' | 'md' | 'lg';
        "type"?: string;
        "value"?: any;
    }
    interface IrListItem {
        "dropdownData"?: {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  };
        "dropdownDataDisable"?: {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  };
        "listData"?: {
    title: string;
    channel: string;
    status: string;
    id: string;
    group: string;
    property: string;
    hotelId: string;
  }[];
        "onCreateNew"?: (event: IrListItemCustomEvent<any>) => void;
        "onOpenSidebar"?: (event: IrListItemCustomEvent<any>) => void;
    }
    interface IrLoader {
        "size"?: string;
    }
    interface IrMapping {
        "map"?: any;
        "onSendMappingToParent"?: (event: IrMappingCustomEvent<any>) => void;
    }
    interface IrModal {
        "btnPosition"?: 'left' | 'right' | 'center';
        "item"?: any;
        "leftBtnActive"?: boolean;
        "leftBtnColor"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "leftBtnText"?: string;
        "onCancelModal"?: (event: IrModalCustomEvent<any>) => void;
        "onConfirmModal"?: (event: IrModalCustomEvent<any>) => void;
        "rightBtnActive"?: boolean;
        "rightBtnColor"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "rightBtnText"?: string;
    }
    interface IrRadioBtn {
        "data"?: selectOption[];
        "disabled"?: boolean;
        "onSelectChange"?: (event: IrRadioBtnCustomEvent<any>) => void;
        "selectedValue"?: any;
    }
    interface IrSelect {
        "LabelAvailable"?: boolean;
        "data"?: selectOption[];
        "firstOption"?: string;
        "label"?: string;
        "labelBackground"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "labelBorder"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none';
        "labelColor"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        "labelPosition"?: 'left' | 'right' | 'center';
        "labelWidth"?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
        "name"?: string;
        "onSelectChange"?: (event: IrSelectCustomEvent<any>) => void;
        "required"?: boolean;
        "selectStyle"?: boolean;
        "selectedValue"?: any;
        "size"?: 'sm' | 'md' | 'lg';
        "submited"?: boolean;
        "textSize"?: 'sm' | 'md' | 'lg';
    }
    interface IrSidebar {
        "name"?: string;
        "onIrSidebarToggle"?: (event: IrSidebarCustomEvent<any>) => void;
        "open"?: boolean;
        "side"?: 'right' | 'left';
    }
    interface IrSpan {
        "text"?: any;
    }
    interface IrSwitch {
        "baseClass"?: string;
        "classOn"?: string;
        "colorOn"?: string;
        "disabled"?: boolean;
        "handleWidth"?: string | 'auto';
        "indeterminate"?: boolean;
        "inverse"?: boolean;
        "labelOff"?: string;
        "labelOn"?: string;
        "labelText"?: string;
        "labelWidth"?: string | 'auto';
        "offClass"?: string;
        "offColor"?: string;
        "onValueChange"?: (event: IrSwitchCustomEvent<boolean>) => void;
        "radioAllOff"?: boolean;
        "readonly"?: boolean;
        "size"?: string | 'mini' | 'small' | 'normal' | 'large';
        "switch_animate"?: boolean;
        "value"?: boolean;
        "wrapperClass"?: string;
    }
    interface IrTextarea {
        "cols"?: number;
        "label"?: string;
        "placeholder"?: string;
        "rows"?: number;
        "text"?: string;
    }
    interface IrTopbar {
        "onOpenSidebar"?: (event: IrTopbarCustomEvent<any>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ir-button": IrButton;
        "ir-channel-manager": IrChannelManager;
        "ir-channel-select": IrChannelSelect;
        "ir-checkbox": IrCheckbox;
        "ir-checkboxes": IrCheckboxes;
        "ir-dropdown": IrDropdown;
        "ir-general-settings": IrGeneralSettings;
        "ir-guest-info": IrGuestInfo;
        "ir-icon": IrIcon;
        "ir-input-channel": IrInputChannel;
        "ir-input-text": IrInputText;
        "ir-list-item": IrListItem;
        "ir-loader": IrLoader;
        "ir-mapping": IrMapping;
        "ir-modal": IrModal;
        "ir-radio-btn": IrRadioBtn;
        "ir-select": IrSelect;
        "ir-sidebar": IrSidebar;
        "ir-span": IrSpan;
        "ir-switch": IrSwitch;
        "ir-textarea": IrTextarea;
        "ir-topbar": IrTopbar;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ir-button": LocalJSX.IrButton & JSXBase.HTMLAttributes<HTMLIrButtonElement>;
            "ir-channel-manager": LocalJSX.IrChannelManager & JSXBase.HTMLAttributes<HTMLIrChannelManagerElement>;
            "ir-channel-select": LocalJSX.IrChannelSelect & JSXBase.HTMLAttributes<HTMLIrChannelSelectElement>;
            "ir-checkbox": LocalJSX.IrCheckbox & JSXBase.HTMLAttributes<HTMLIrCheckboxElement>;
            "ir-checkboxes": LocalJSX.IrCheckboxes & JSXBase.HTMLAttributes<HTMLIrCheckboxesElement>;
            "ir-dropdown": LocalJSX.IrDropdown & JSXBase.HTMLAttributes<HTMLIrDropdownElement>;
            "ir-general-settings": LocalJSX.IrGeneralSettings & JSXBase.HTMLAttributes<HTMLIrGeneralSettingsElement>;
            "ir-guest-info": LocalJSX.IrGuestInfo & JSXBase.HTMLAttributes<HTMLIrGuestInfoElement>;
            "ir-icon": LocalJSX.IrIcon & JSXBase.HTMLAttributes<HTMLIrIconElement>;
            "ir-input-channel": LocalJSX.IrInputChannel & JSXBase.HTMLAttributes<HTMLIrInputChannelElement>;
            "ir-input-text": LocalJSX.IrInputText & JSXBase.HTMLAttributes<HTMLIrInputTextElement>;
            "ir-list-item": LocalJSX.IrListItem & JSXBase.HTMLAttributes<HTMLIrListItemElement>;
            "ir-loader": LocalJSX.IrLoader & JSXBase.HTMLAttributes<HTMLIrLoaderElement>;
            "ir-mapping": LocalJSX.IrMapping & JSXBase.HTMLAttributes<HTMLIrMappingElement>;
            "ir-modal": LocalJSX.IrModal & JSXBase.HTMLAttributes<HTMLIrModalElement>;
            "ir-radio-btn": LocalJSX.IrRadioBtn & JSXBase.HTMLAttributes<HTMLIrRadioBtnElement>;
            "ir-select": LocalJSX.IrSelect & JSXBase.HTMLAttributes<HTMLIrSelectElement>;
            "ir-sidebar": LocalJSX.IrSidebar & JSXBase.HTMLAttributes<HTMLIrSidebarElement>;
            "ir-span": LocalJSX.IrSpan & JSXBase.HTMLAttributes<HTMLIrSpanElement>;
            "ir-switch": LocalJSX.IrSwitch & JSXBase.HTMLAttributes<HTMLIrSwitchElement>;
            "ir-textarea": LocalJSX.IrTextarea & JSXBase.HTMLAttributes<HTMLIrTextareaElement>;
            "ir-topbar": LocalJSX.IrTopbar & JSXBase.HTMLAttributes<HTMLIrTopbarElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
