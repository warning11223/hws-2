/// <reference types="react-scripts" />
declare module 'react-select/dist/declarations/src/Select' {
    export interface Props<
        Option,
        IsMulti extends boolean,
        Group extends GroupBase<Option>
        > {
        myCustomProp: string;
    }
}
