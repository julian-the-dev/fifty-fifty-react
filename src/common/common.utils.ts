export class CommonUtils {
    public static isUndefined(item: any) {
        return typeof item === 'undefined';
    }

    public static isDefined(item: any) {
        return !this.isUndefined(item);
    }
}